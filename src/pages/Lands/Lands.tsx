import SearchBar from "../../components/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import LandMap from "../../components/LandMap";
import TobTab from "../../components/TopTab/TopTab";
import { useStyles } from "./LandsStyle";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectSaleParcels } from "../../store/saleparcels/selectors";
import { setSaleParcels } from "../../store/saleparcels";

const Lands: React.FC = () => {
  const classes = useStyles();
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const dispatch = useAppDispatch();
  const saleParcels = useAppSelector(selectSaleParcels);

  console.log(saleParcels);
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight - 246);
  };
  useEffect(() => {
    setHeight(window.innerHeight - 246);
    setWidth(window.innerWidth);
    dispatch(setSaleParcels());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <TobTab />
      {/* <div>
        <SearchBar />
      </div> */}
      <div className={classes.landMap}>
        <LandMap height={height} width={width} initialX={50} initialY={50} />
      </div>
    </>
  );
};

export default Lands;
