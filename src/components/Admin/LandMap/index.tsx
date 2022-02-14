import React, { useCallback, useEffect, useState } from "react";

import { Atlas, Layer } from "../../Atlas/Atlas";
import { Tile } from "../../Atlas/Atlas.types";
import Popup from "../../Atlas/Popup";
import { fetchTiles } from "../../../hooks/tiles";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { selectparcels } from "../../../store/selectedparcels/selectors";
import { getparcels } from "../../../store/selectedparcels";

interface LandMapProps {
  height?: any;
  width?: any;
  initialX?: number;
  initialY?: number;
}

const LandMap: React.FC<LandMapProps> = ({ height, width }) => {
  const [tiles, setTiles] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dispatch = useAppDispatch();
  const selectedTile = useAppSelector(selectparcels);

  const getCoords = (x: number | string, y: number | string) => `${x},${y}`;

  const handleClick = useCallback(
    async (x: number, y: number) => {
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile.owner) {
        return;
      } else {
        let newSelectedTile: string[] = [];
        const selectedIndex = selectedTile.indexOf(getCoords(x, y));
        if (selectedIndex === -1) {
          newSelectedTile = newSelectedTile.concat(
            selectedTile,
            getCoords(x, y)
          );
        } else if (selectedIndex === 0) {
          newSelectedTile = newSelectedTile.concat(selectedTile.slice(1));
        } else if (selectedIndex === selectedTile.length - 1) {
          newSelectedTile = newSelectedTile.concat(selectedTile.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelectedTile = newSelectedTile.concat(
            selectedTile.slice(0, selectedIndex),
            selectedTile.slice(selectedIndex + 1)
          );
        }
        dispatch(getparcels(newSelectedTile));
      }
    },
    [tiles, selectedTile]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      return selectedTile.includes(getCoords(x, y));
    },
    [selectedTile, tiles]
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

  const handleHidePopup = useCallback(() => {
    setShowPopup(false);
    setMouseX(-1);
    setMouseY(-1);
  }, []);

  const selectedStrokeLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isOwned(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isSelected(x, y)
        ? { color: "transparent", scale: 1.4 }
        : null;
    },
    [isSelected]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isOwned(x, y)
        ? { color: "#141b31", scale: 1.2 }
        : isSelected(x, y)
        ? { color: "#ff9990", scale: 1.2 }
        : null;
    },
    [isSelected]
  );

  const handleHover = useCallback(
    (x: number, y: number) => {
      if (!tiles) return;
      const id = getCoords(x, y);
      const tile: Tile = tiles && tiles[id];

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
    <div onMouseLeave={handleHidePopup}>
      <Atlas
        tiles={tiles}
        layers={[selectedStrokeLayer, selectedFillLayer]}
        onHover={handleHover}
        onClick={handleClick}
        height={height}
        width={width}
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

export default LandMap;
