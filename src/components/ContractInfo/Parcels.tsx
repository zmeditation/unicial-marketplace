/** @format */

import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Button from "../Base/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocationBtn from "../Base/LocationBtn";
import { ShowMoreLessBtn } from "../ShowMoreLessBtn/ShowMoreLessBtn";
import { useTranslation } from "react-i18next";
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
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{t("Parcels")}</div>
      <div className={classes.parcels}>
        <div className={classes.buttonGroup}>
          <LocationBtn position="12,-45" />
          <LocationBtn position="32,-45" />
          <LocationBtn position="33,-45" />
          <LocationBtn position="30,-45" />
          <LocationBtn position="12,-45" />
          <LocationBtn position="12,-45" />
          <LocationBtn position="12,-45" />
          <LocationBtn position="12,-45" />
          <LocationBtn position="12,-45" />
          <LocationBtn position="12,-45" />
          <LocationBtn position="12,-45" />
        </div>
        <div className={classes.showmoreContent}>
          <ShowMoreLessBtn letter="Show More" />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
