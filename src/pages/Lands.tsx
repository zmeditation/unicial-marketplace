import React, { useCallback, useEffect, useState, useMemo } from "react";
import { Atlas, Layer, Coord } from "../components/Atlas/Atlas";
import { Tile } from "../components/Atlas/Atlas.types";
import Popup from "../components/Atlas/Popup";
import { fetchTiles } from "../hooks/tiles";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 186px)",
    // display: "inline-block",
  },
}));

const Lands: React.FC = () => {
  const classes = useStyles();
  const [tiles, setTiles] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [estateid, setEstateid] = useState(null);

  const getCoords = (x: number | string, y: number | string) => `${x},${y}`;

  const handleClick = useCallback(
    async (x: number, y: number) => {
      if (!true) {
        return;
      }
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (!tile) {
        return;
      }
      if (tile.estate_id) {
        console.log("tile.estate_id", tile.estate_id);
        setEstateid(tile.estate_id);
      } else {
        setEstateid(null);
        try {
          console.log("parcel");
        } catch (error: any) {
          console.warn(
            `Couldn't fetch parcel ${tile.x},${tile.y}: ${error.message}`
          );
        }
      }
    },
    [tiles]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      // console.log("2");
      if (!tiles) return false;
      const tile = tiles[getCoords(x, y)] as Tile;
      if (estateid && tile && tile.estate_id && estateid === tile.estate_id) {
        return true;
      }
      return false;
    },
    [estateid, tiles]
  );

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
      if (tile?.estate_id && estateid === tile?.estate_id) {
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

  return (
    <div className={classes.root}>
      <Atlas
        tiles={tiles}
        layers={[selectedStrokeLayer, selectedFillLayer]}
        onHover={handleHover}
        onClick={handleClick}
      />
      {hoveredTile ? (
        <Popup
          x={x}
          y={y}
          visible={showPopup}
          tile={hoveredTile}
          position={x > window.innerWidth - 280 ? "left" : "right"}
        />
      ) : null}
    </div>
  );
};

export default Lands;
