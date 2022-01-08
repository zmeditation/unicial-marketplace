import SearchBar from "../components/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import LandMap from "../components/LandMap";

const useStyles = makeStyles((theme: Theme) => ({
  landMap: {
    minHeight: "calc(100vh - 246px)",
  },
}));

const Lands: React.FC = () => {
  const classes = useStyles();
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
      <div>
        <SearchBar />
      </div>
      <div className={classes.landMap}>
        <LandMap height={height} width={width} initialX={50} initialY={50} />
      </div>
    </>
  );
};

export default Lands;
