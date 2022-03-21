import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Atlas, Layer } from "../Atlas/Atlas";
import { Tile } from "../Atlas/Atlas.types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSaleParcels } from "../../store/saleparcels/selectors";
import { totalSpace } from "../../store/parcels/selectors";
import { setSaleParcels } from "../../store/saleparcels";
import { setSpaces } from "../../store/parcels";
import { selectLoginAddress } from "../../store/auth/selectors";
import { getCoords } from "../../common/utils";
import { useStyles } from "./SliceMapStyle";

declare var window: any;

interface SliceMapProps {
  centerX?: any;
  centerY?: any;
}

const SliceMap: React.FC<SliceMapProps> = ({ centerX, centerY }) => {
  const classes = useStyles();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [onSale, setOnSale] = useState(true);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { tokensid } = useParams();

  const query = new URLSearchParams(location.search);

  const saleSpaces: any = useAppSelector(selectSaleParcels);
  const tiles: any = useAppSelector(totalSpace);
  const loginAddress: any = useAppSelector(selectLoginAddress);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(329);
      setHeight(265);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(329);
      setHeight(265);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(329);
      setHeight(265);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
      setHeight(420);
    } else if (window.innerWidth <= 500) {
      setWidth(329);
      setHeight(329);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const isSaleParcel = useCallback(
    (x: number, y: number) => {
      if (!saleSpaces) return false;
      const tile: any = saleSpaces && (saleSpaces[getCoords(x, y)] as Tile);

      if (onSale === true && tile) {
        return true;
      }
      return false;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [saleSpaces, onSale]
  );

  const isOwned = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.owner) {
        return true;
      } else return false;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [tiles]
  );

  const isEstated = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.estateId) {
        return true;
      } else return false;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [saleSpaces, onSale, loginAddress]
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
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [tokensid, tiles]
  );

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
        : isOwned(x, y)
        ? { color: "transparent", scale: 1.4 }
        : null;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
        : isOwned(x, y)
        ? { color: "#313960", scale: 1.4 }
        : null;
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [isSelected]
  );

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
    dispatch(setSaleParcels());
    dispatch(setSpaces());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className={classes.mapRoot}>
        <Atlas
          tiles={tiles}
          layers={[selectedStrokeLayer, selectedFillLayer]}
          height={height}
          width={width}
          y={centerY}
          x={centerX}
          movingeStatus={false}
          zoomStatus={2}
        />
      </div>
    </>
  );
};

export default SliceMap;
