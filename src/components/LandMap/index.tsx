import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

import { Atlas, Layer } from "../Atlas/Atlas";
import { Tile } from "../Atlas/Atlas.types";
import Popup from "../Atlas/Popup";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSaleParcels } from "../../store/salespaces/selectors";
import { parcels } from "../../store/parcels/selectors";
import { SpaceProxyAddress } from "../../config/contracts/SpaceRegistryContract";
import { setSaleSpaces } from "../../store/salespaces";
import { setSpaces } from "../../store/parcels";
import { showAlert } from "../../store/alert";
import { selectLoginAddress } from "../../store/auth/selectors";
import { ethers } from "ethers";
import { getCoords } from "../../common/utils";
import { EstateProxyAddress } from "../../config/contracts/EstateRegitryContract";

interface LandMapProps {
  height?: any;
  width?: any;
  centerX?: any;
  centerY?: any;
}

const LandMap: React.FC<LandMapProps> = ({
  height,
  width,
  centerX,
  centerY,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [price, setPrice] = useState("");
  const [onSale, setOnSale] = useState(true);
  const [, setEstateid] = useState(null);
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { tokensid } = useParams();

  const query = new URLSearchParams(location.search);

  const saleSpaces: any = useAppSelector(selectSaleParcels);
  const tiles: any = useAppSelector(parcels);
  const loginAddress: any = useAppSelector(selectLoginAddress);

  const handleClick = useCallback(
    async (x: number, y: number) => {
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      const sale: any = saleSpaces && (saleSpaces[getCoords(x, y)] as Tile);
      if (!tile) {
        return;
      }
      if (tile.estateId) {
        setEstateid(tile.estateId);
        navigate(`/contracts/${EstateProxyAddress}/tokens/${tile.estateId}`);
      } else {
        setEstateid(null);
        try {
          query.set("onlyOnSale", onSale.toString());
          navigate({
            pathname: `/contracts/${SpaceProxyAddress}/tokens/${tile.tokenId}`,
            search: query.toString(),
          });
        } catch (error: any) {
          console.warn(
            `Couldn't fetch parcel ${tile.x},${tile.y}: ${error.message}`
          );
        }
        return;
      }
    },
    [tiles]
  );

  const isSaleParcel = useCallback(
    (x: number, y: number) => {
      if (!saleSpaces) return false;
      const tile: any = saleSpaces && (saleSpaces[getCoords(x, y)] as Tile);

      if (onSale === true && tile) {
        return true;
      }
      return false;
    },
    [saleSpaces, onSale]
  );

  const isEstated = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.estateId) {
        return true;
      } else return false;
    },
    [tiles]
  );

  const isCustomerSaleParcel = useCallback(
    (x: number, y: number) => {
      if (!saleSpaces) return false;
      const sale: any = saleSpaces && (saleSpaces[getCoords(x, y)] as Tile);

      if (
        onSale === true &&
        sale?.seller.toLowerCase() === loginAddress.toLowerCase()
      ) {
        return true;
      }
      return false;
    },
    [saleSpaces, onSale]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles[getCoords(x, y)] as Tile;

      if (tile?.estateId && tokensid === tile?.estateId) {
        return true;
      }
      if (tokensid && tile && tokensid === tile?.tokenId) {
        return true;
      }
      return false;
    },
    [tokensid, tiles]
  );

  const handleHidePopup = useCallback(() => {
    setShowPopup(false);
    setMouseX(-1);
    setMouseY(-1);
  }, []);

  const selectedStrokeLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isCustomerSaleParcel(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isSaleParcel(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isEstated(x, y)
        ? { color: "transparent", scale: 1.4 }
        : null;
    },
    [isSelected]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: "#ff9990", scale: 1.2 }
        : isCustomerSaleParcel(x, y)
        ? { color: "#6ad3fe", scale: 1.2 }
        : isSaleParcel(x, y)
        ? { color: "#d5ed11", scale: 1.2 }
        : isEstated(x, y)
        ? { color: "#29c98f", scale: 1.2 }
        : null;
    },
    [isSelected]
  );

  const handleHover = useCallback(
    (x: number, y: number) => {
      if (!tiles) return;
      const id = getCoords(x, y);
      const tile: Tile = tiles && tiles[id];
      const sale: any = saleSpaces && saleSpaces[id];
      if (tile?.estateId && tokensid === tile?.estateId) {
        setShowPopup(false);
        return;
      }
      if (sale?.seller) {
        setPrice(ethers.utils.formatUnits(sale?.priceInWei, 18));
      } else {
        setPrice("");
      }
      if (tile && !showPopup) {
        setShowPopup(true);
        setHoveredTile(tile);
        setMouseX(-1);
        setMouseY(-1);
      } else if (tile && tile !== hoveredTile) {
        setHoveredTile(tile);
        setMouseX(-1);
        setMouseY(-1);
      } else if (!tile && showPopup) {
        setShowPopup(false);
      }
    },
    [hoveredTile, showPopup, tiles]
  );
  // mouse move
  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (showPopup && mouseX === -1 && mouseY === -1) {
        setMouseX(event.offsetX);
        setMouseY(event.offsetY);
        setX(event.offsetX);
        setY(event.offsetY);
      }
    }
    if (true) {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (true) {
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [showPopup, mouseX, mouseY]);

  useEffect(() => {
    if (query.get("onlyOnSale") === null) {
      setOnSale(true);
      return;
    }
    if (query.get("onlyOnSale") === "true") {
      setOnSale(true);
    } else {
      setOnSale(false);
    }
    dispatch(setSaleSpaces());
    dispatch(setSpaces());
  }, [location]);

  console.log("saleSpaces status: ",saleSpaces)

  return (
    <div onMouseLeave={handleHidePopup}>
      <Atlas
        tiles={tiles}
        layers={[selectedStrokeLayer, selectedFillLayer]}
        onHover={handleHover}
        onClick={handleClick}
        height={height}
        width={width}
        y={centerY}
        x={centerX}
      />
      {hoveredTile ? (
        <Popup
          x={x}
          y={y}
          visible={showPopup}
          tile={hoveredTile}
          price={price}
          position={x > window.innerWidth - 550 ? "left" : "right"}
        />
      ) : null}
    </div>
  );
};

export default LandMap;
