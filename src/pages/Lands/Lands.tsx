/** @format */

import React, { useEffect, useState } from "react";
import LandMap from "../../components/LandMap";
import TobTab from "../../components/TopTab/TopTab";
import { useStyles } from "./LandsStyle";
import { useAppSelector } from "../../store/hooks";
import { selectSaleParcels } from "../../store/saleparcels/selectors";
import { parcels } from "../../store/parcels/selectors";

const Lands: React.FC = () => {
  const classes = useStyles();
  const saleParcels = useAppSelector(selectSaleParcels);
  const parcel = useAppSelector(parcels);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight - 246);
  };
  useEffect(() => {
    setHeight(window.innerHeight - 246);
    setWidth(window.innerWidth);
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
        <LandMap height={height} width={width} />
      </div>
    </>
  );
};

export default Lands;
