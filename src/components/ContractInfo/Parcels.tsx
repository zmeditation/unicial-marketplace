import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Button from "../Base/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "35px",
  },
  title: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "uppercase",
    marginBottom: "8px",
    color: "#676370",
  },
  parcels: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  buttonGroup: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "repeat(auto-fill, 110px)",
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
      <div className={classes.title}>parcels</div>
      <div className={classes.parcels}>
        <div className={classes.buttonGroup}>
          <Button color="dark" className={classes.parcelbtn}>
            <LocationOnIcon className={classes.pin} />
            -9, -9
          </Button>
          <Button color="dark" className={classes.parcelbtn}>
            <LocationOnIcon className={classes.pin} />
            -9, -8
          </Button>
          <Button color="dark" className={classes.parcelbtn}>
            <LocationOnIcon className={classes.pin} />
            -9, -7
          </Button>
          <Button color="dark" className={classes.parcelbtn}>
            <LocationOnIcon className={classes.pin} />
            -9, -6
          </Button>
          <Button color="dark" className={classes.parcelbtn}>
            <LocationOnIcon className={classes.pin} />
            -9, -5
          </Button>
        </div>
        <div className={classes.showmoreContent}>
          <span className={classes.showmoreBtn}>SHOW LESS</span>
        </div>
      </div>
    </div>
  );
};

export default Parcels;
