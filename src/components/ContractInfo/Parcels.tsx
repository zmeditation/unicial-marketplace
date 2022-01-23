import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Button from "../Base/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationBtn from "../Base/LocationBtn";
import { ShowMoreLessBtn } from "../ShowMoreLessBtn/ShowMoreLessBtn";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "35px",
    marginBottom: "47px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "50px",
    marginBottom: "8px",
    color: "white",
  },
  parcels: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  buttonGroup: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "repeat(auto-fill, 83px)",
    marginTop: "13px",
    overflow: "hidden",
  },
  pin: {
    width: "17px !important",
    height: "16px !important",
    backgroundSize: "19px",
    backgroundPosition: "-2px -1px",
  },
  parcelbtn: {
    margin: "6px",
    borderRadius: "20px",
    width: "79px",
    padding: "5.5px 11px",
    backgroundColor: "#282E4E",
  },
  showmoreContent: {
    marginTop: "15px",
    justifyContent: "center",
    width: "100%",
    flexFlow: "row nowrap",
    display: "flex",
  },
  showmoreBtn: {
    fontSize: "15px",
    color: "#ff2d55",
    cursor: "pointer",
  },
}));

interface ParcelsProps {}

const Parcels: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>Parcels</div>
      <div className={classes.parcels}>
        <div className={classes.buttonGroup}>
          <LocationBtn axisX={12} axisY={45} />
          <LocationBtn axisX={32} axisY={11} />
          <LocationBtn axisX={33} axisY={9} />
          <LocationBtn axisX={30} axisY={-45} />
          <LocationBtn axisX={12} axisY={-45} />
          <LocationBtn axisX={12} axisY={-45} />
          <LocationBtn axisX={12} axisY={-45} />
          <LocationBtn axisX={12} axisY={-45} />
          <LocationBtn axisX={12} axisY={-45} />
          <LocationBtn axisX={12} axisY={-45} />
          <LocationBtn axisX={12} axisY={-45} />
        </div>
        <div className={classes.showmoreContent}>
          {/* <span className={classes.showmoreBtn}>SHOW LESS</span> */}
          <ShowMoreLessBtn />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
