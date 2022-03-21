import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Atlas, Layer } from "../Atlas/Atlas";
import { Tile } from "../Atlas/Atlas.types";
import Popup from "../Atlas/Popup";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectestates } from "../../store/selectedestates/selectors";
import { getestates } from "../../store/selectedestates";
import { totalSpace } from "../../store/parcels/selectors";
import { showAlert } from "../../store/alert";
import { getCoords } from "../../common/utils";

interface SelectSpaceMapProps {
  height?: any;
  width?: any;
  initialX?: number;
  initialY?: number;
}

const SelectSpaceMap: React.FC<SelectSpaceMapProps> = ({ height, width }) => {
  const { estateid } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<Tile | null>(null);
  const [mouseX, setMouseX] = useState(-1);
  const [mouseY, setMouseY] = useState(-1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dispatch = useAppDispatch();
  const selectedTile = useAppSelector(selectestates);
  const tiles: any = useAppSelector(totalSpace);
  const mineAddress = useAppSelector(selectLoginAddress);

  const handleClick = useCallback(
    async (x: number, y: number) => {
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (
        tile.owner &&
        tile.owner.toLowerCase() === mineAddress.toLowerCase() &&
        tile.estateId === estateid
      ) {
        let newSelectedTile: string[] = [];
        const selectedIndex = selectedTile.indexOf(getCoords(x, y));
        if (selectedIndex === -1) {
          //   alert("-1");
          newSelectedTile = newSelectedTile.concat(
            selectedTile,
            getCoords(x, y)
          );
        } else if (selectedIndex === 0) {
          //   alert("0");
          newSelectedTile = newSelectedTile.concat(selectedTile.slice(1));
        } else if (selectedIndex === selectedTile.length - 1) {
          //   alert("kk");
          newSelectedTile = newSelectedTile.concat(selectedTile.slice(0, -1));
        } else if (selectedIndex > 0) {
          //   alert(">0");
          newSelectedTile = newSelectedTile.concat(
            selectedTile.slice(0, selectedIndex),
            selectedTile.slice(selectedIndex + 1)
          );
        }
        dispatch(getestates(newSelectedTile));
      } else {
        dispatch(
          showAlert({
            message: "You have to select the spaces of this estate!",
            severity: "error",
          })
        );
      }
    },
    [tiles, selectedTile]
  );

  const isSelected = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      return selectedTile?.includes(getCoords(x, y));
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
  const isfocused = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.estateId === estateid) {
        return true;
      } else return false;
    },
    [tiles]
  );

  const isOwnedWithEstate = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (tile?.owner && tile?.estateId !== undefined) {
        return true;
      } else return false;
    },
    [tiles]
  );

  const isMine = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);

      if (
        tile?.owner &&
        tile?.owner?.toLowerCase() === mineAddress.toLowerCase()
      ) {
        return true;
      } else return false;
    },
    [tiles]
  );

  const isMineWithEstate = useCallback(
    (x: number, y: number) => {
      if (!tiles) return false;
      const tile: any = tiles && (tiles[getCoords(x, y)] as Tile);
      if (
        tile?.owner &&
        tile?.owner?.toLowerCase() === mineAddress.toLowerCase() &&
        tile?.estateId !== undefined
      ) {
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
      return isSelected(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isfocused(x, y)
        ? { color: "transparent", scale: 1.4 }
        : // : isMineWithEstate(x, y)
        // ? { color: "transparent", scale: 1.4 }
        isMine(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isOwnedWithEstate(x, y)
        ? { color: "transparent", scale: 1.4 }
        : isOwned(x, y)
        ? { color: "transparent", scale: 1.4 }
        : null;
    },
    [isSelected]
  );

  const selectedFillLayer: Layer = useCallback(
    (x: any, y: any) => {
      return isSelected(x, y)
        ? { color: "#ff9990", scale: 1.2 }
        : isfocused(x, y)
        ? { color: "red", scale: 1.2 }
        : // : isMineWithEstate(x, y)
        // ? { color: "#4aff3a", scale: 1.2 }
        isMine(x, y)
        ? { color: "#2b1c70", scale: 1.2 }
        : isOwnedWithEstate(x, y)
        ? { color: "#f0af37", scale: 1.2 }
        : isOwned(x, y)
        ? { color: "#21263f", scale: 1.2 }
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
          position={x > window.innerWidth - 550 ? "left" : "right"}
        />
      ) : null}
    </div>
  );
};

export default SelectSpaceMap;
