/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { Atlas, Layer, Coord } from "../Atlas/Atlas";
import { Tile } from "../Atlas/Atlas.types";
import Popup from "../Atlas/Popup";
import { fetchTiles } from "../../hooks/tiles";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { useAppSelector } from "../../store/hooks";
import { selectSaleParcels } from "../../store/saleparcels/selectors";

const useStyles = makeStyles((theme: Theme) => ({}));

interface LandMapProps {
  height?: any;
  width?: any;
  initialX?: number;
  initialY?: number;
}

const LandMap: React.FC<LandMapProps> = ({
  height,
  width,
  initialX,
  initialY,
}) => {
  const [tiles, setTiles] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [onSale, setOnSale] = useState(false);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [estateid, setEstateid] = useState(null);
  let navigate = useNavigate();
  const location = useLocation();
  const saleParcels = useAppSelector(selectSaleParcels);

  const query = new URLSearchParams(location.search);

  const getCoords = (x: number | string, y: number | string) => `${x},${y}`;

  const handleClick = useCallback(
    async (x: number, y: number) => {
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (!tile) {
        return;
      }
      if (tile.estateId) {
        setEstateid(tile.estateId);
        navigate(
          "/contracts/0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d/tokens/115792089237316195423570985008687907843061513658012410135556345784960083296262"
        );
      } else {
        setEstateid(null);
        try {
          navigate(
            "/contracts/0x959e104e1a4db6317fa58f8295f586e1a978c297/tokens/735"
          );
        } catch (error: any) {
          console.warn(
            `Couldn't fetch parcel ${tile.x},${tile.y}: ${error.message}`
          );
        }
      }
    },
    [tiles]
  );

  const isSaleParcel = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const isSaleParcelIndex = Object.keys(saleParcels).indexOf(
        getCoords(x, y)
      );
      if (isSaleParcelIndex < 0) {
        return false;
      } else {
        return true;
      }
    },
    [tiles]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile = tiles[getCoords(x, y)] as Tile;
      if (estateid && tile && tile.estateId && estateid === tile.estateId) {
        return true;
      }
      return false;
    },
    [estateid, tiles]
  );

  const handleHidePopup = useCallback(() => {
    setShowPopup(false);
    setMouseX(-1);
    setMouseY(-1);
  }, []);

  const selectedStrokeLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y) ? { color: "#ff0044", scale: 1.4 } : null;
    },
    [isSelected]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y) ? { color: "#ff9990", scale: 1.2 } : null;
    },
    [isSelected]
  );

  const handleHover = useCallback(
    (x: number, y: number) => {
      if (!tiles) return;
      const id = getCoords(x, y);
      const tile: Tile = tiles && tiles[id];
      if (tile?.estateId && estateid === tile?.estateId) {
        setShowPopup(false);
        return;
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
    if (window) {
      fetchTiles().then((_tiles: any) => setTiles(_tiles));
    }
  }, []);

  useEffect(() => {
    if (query.get("onlyOnSale") === "true") {
      setOnSale(true);
    } else {
      setOnSale(false);
    }
  }, [location]);
  return (
    <div onMouseLeave={handleHidePopup}>
      <Atlas
        tiles={tiles}
        layers={[selectedStrokeLayer, selectedFillLayer]}
        onHover={handleHover}
        onClick={handleClick}
        height={height}
        width={width}
        initialX={initialX}
        initialY={initialY}
      />
      {hoveredTile ? (
        <Popup
          x={x}
          y={y}
          visible={showPopup}
          tile={hoveredTile}
          position={x > window.innerWidth - 550 ? "left" : "right"}
        />
      ) : null}
    </div>
  );
};

export default LandMap;
