import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import LandMap from "../components/LandMap";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Title from "../components/ContractInfo/Title";
import Description from "../components/ContractInfo/Description";
import Owner from "../components/ContractInfo/Owner";
import Bidbox from "../components/ContractInfo/Bidbox";
import Parcels from "../components/ContractInfo/Parcels";
import TobTab from "../components/TopTab/TopTab";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    maxWidth: "1064px",
    margin: "40px auto",
    position: "relative",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      maxWidth: "933px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "723px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
    },
  },
  LandMap: {
    maxWidth: "945px",
    display: "grid",
    margin: "0px auto",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "820px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "600px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
      marginTop: "60px",
    },
  },
  backBtn: {
    top: "5px",
    position: "absolute",
    borderRadius: "25px",
    border: "1px solid #6763709c",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      borderColor: "white",
    },
    [theme.breakpoints.down(769)]: {
      top: "-40px",
    },
  },
  backIcon: {
    width: "15px",
    height: "15px",
    color: "white",
    marginLeft: "10px",
  },
  contractDescription: {
    marginTop: "35px",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  leftDescription: {
    flex: "1 1",
    marginRight: "48px",
    [theme.breakpoints.down(769)]: {
      width: "100%",
    },
  },
  rightDescription: {
    minWidth: "320px",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginTop: "20px",
    },
  },
  items: {
    marginBottom: "40px",
  },
}));

const Contract = () => {
  const classes = useStyles();
  const { contractaddress, tokensId } = useParams();
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(945);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(820);
    } else if (window.innerWidth <= 992 && window.innerWidth > 770) {
      setWidth(600);
    } else if (window.innerWidth <= 770 && window.innerWidth >= 500) {
      setWidth(420);
    } else {
      setWidth(300);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <TobTab />
      <div className={classes.root}>
        <span className={classes.backBtn} onClick={() => navigate(-1)}>
          <ArrowBackIosIcon className={classes.backIcon} />
        </span>
        <div className={classes.LandMap}>
          <div style={{ height: "400px" }}>
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <div className={classes.contractDescription}>
            <div className={classes.leftDescription}>
              <div className={classes.items}>
                <Title />
              </div>
              <div className={classes.items}>
                <Description />
              </div>
              <Owner />
            </div>
            <div className={classes.rightDescription}>
              <Bidbox />
            </div>
          </div>
          <Parcels />
        </div>
      </div>
    </>
  );
};

export default Contract;
