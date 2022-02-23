import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

import { Atlas, Layer } from "../Atlas/Atlas";
import { Tile } from "../Atlas/Atlas.types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectSaleParcels } from "../../store/saleparcels/selectors";
import { parcels } from "../../store/parcels/selectors";
import { setSaleParcels } from "../../store/saleparcels";
import { setParcels } from "../../store/parcels";
import { selectLoginAddress } from "../../store/auth/selectors";
import { getCoords } from "../../common/utils";
import {useStyles} from "./SliceMapStyle"

declare var window: any;


interface SliceMapProps {
  centerX?: any;
  centerY?: any;
}

const SliceMap: React.FC<SliceMapProps> = ({
  centerX,
  centerY,
}) => {
  const classes = useStyles()
  const [width, setWidth] = useState(0)
  const [height, setHeight] =  useState(0)
  const [onSale, setOnSale] = useState(true);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { tokensid } = useParams();

  const query = new URLSearchParams(location.search);

  const saleParcels: any = useAppSelector(selectSaleParcels);
  const tiles: any = useAppSelector(parcels);
  const loginAddress: any = useAppSelector(selectLoginAddress);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(300);
      setHeight(300);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(300);
      setHeight(300);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(300);
      setHeight(300);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(300);
      setHeight(300);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
      setHeight(300);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  const isSaleParcel = useCallback(
    (x: number, y: number) => {
      if (!saleParcels) return false;
      const tile: any = saleParcels && (saleParcels[getCoords(x, y)] as Tile);

      if (onSale === true && tile) {
        return true;
      }
      return false;
    },
    [saleParcels, onSale]
  );

  const isOwned = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.owner) {
        return true;
      } else return false;
    },
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
    [tiles]
  );

  const isCustomerSaleParcel = useCallback(
    (x: number, y: number) => {
      if (!saleParcels) return false;
      const sale: any = saleParcels && (saleParcels[getCoords(x, y)] as Tile);

      if (
        onSale === true &&
        sale?.seller.toLowerCase() === loginAddress.toLowerCase()
      ) {
        return true;
      }
      return false;
    },
    [saleParcels, onSale]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles[getCoords(x, y)] as Tile;

      if(tile?.estateId && tokensid === tile?.estateId){
        return true
      }
      if (tokensid && tile && tokensid === tile?.tokenId) {
        return true;
      }
      return false;
    },
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
        :null;
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
        : isOwned(x, y)
        ? { color: "#313960", scale: 1.4 }
        : null;
    },
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
    dispatch(setParcels());
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
      />
    </div>
    </>
  );
};

export default SliceMap;
