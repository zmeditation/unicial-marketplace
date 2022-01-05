import * as React from "react";
import { TileMapProps, Layer, TileMap, Coord } from "react-tile-map";
import "react-tile-map/lib/styles.css";
import "./Atlas.css";

export type { Layer, Coord };

interface AtlasTile {
  x: number;
  y: number;
  type: number;
  left?: number;
  top?: number;
  topLeft?: number;
  owner: string;
  name?: string;
  estate_id?: string;
}

interface AtlasProps {
  layers?: any;
  tiles?: Record<string, AtlasTile>;
  onHover?: any;
  onClick?: any;
}

export const Atlas = (props: AtlasProps) => {
  const { layers, tiles, ...rest } = props;
  const classes = "dcl atlas ";

  const COLOR_BY_TYPE: any = Object.freeze({
    0: "#ff9990", // my parcels
    1: "#ff4053", // my parcels on sale
    2: "#ff9990", // my estates
    3: "#ff4053", // my estates on sale
    4: "#ffbd33", // parcels/estates where I have permissions
    5: "#5054D4", // districts
    6: "#563db8", // contributions
    7: "#716C7A", // roads
    8: "#70AC76", // plazas
    9: "#3D3A46", // owned parcel/estate
    10: "#3D3A46", // parcels on sale (we show them as owned parcels)
    11: "#09080A", // unowned pacel/estate
    12: "#18141a", // background
    13: "#110e13", // loading odd
    14: "#0d0b0e", // loading even
  });

  const layer: Layer = (x, y) => {
    const id = x + "," + y;
    if (tiles && id in tiles) {
      const tile = tiles[id];
      return {
        color: COLOR_BY_TYPE[tile.type],
        top: !!tile.top,
        left: !!tile.left,
        topLeft: !!tile.topLeft,
      };
    } else {
      return {
        color: (x + y) % 2 === 0 ? COLOR_BY_TYPE[13] : COLOR_BY_TYPE[14],
      };
    }
  };
  return (
    <TileMap
      {...rest}
      className={classes.trim()}
      layers={[layer, ...layers]}
      initialX={10}
      initialY={20}
      size={1}
      height={500}
    />
  );
};
