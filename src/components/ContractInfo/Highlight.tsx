import React from "react";
import clsx from "clsx";
import { Theme, makeStyles } from "@material-ui/core/styles";
import plaza_svg from "../../assets/svg/plaza.svg";
import road_svg from "../../assets/svg/road.svg";
import distirct_svg from "../../assets/svg/district.svg";
import { highlight, parcelInfo } from "../../config/hightLightData";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "45px",
  },
  title: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14.4px",
    textTransform: "uppercase",
    marginBottom: "21px",
    color: "#96A1DB",
    opacity: "50%",
  },
  cards: {
    width: "100%",
    display: "flex",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  card: {
    display: "flex",
    marginBottom: "20px",
    marginRight: "30px",
    alignItems: "center",
  },
  addressImg: {
    marginRight: "8px",
    borderRadius: "8px",
    width: "48px",
  },
  rightPart: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
  },
  name: {
    fontSize: "16px",
    lineHeight: "19.2px",
    fontWeight: 400,
    marginBottom: "7px",
  },
  description: {
    fontSize: "14px",
    lineHeight: "16.8px",
    fontWeight: 400,
    color: "#96A1DB",
  },
  unviewPlaza: {
    display: "none",
  },
  unviewRoad: {
    display: "none",
  },
  unviewDistrict: {
    display: "none",
  },
  imgContainer: {
    width: "44px",
    height: "44px",
    backgroundColor: "#282E4E",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  displayNone:{
    display: "none",
  },
}));

interface HighlightProps {
  type?: string;
}

const Highlight = ({ type }: HighlightProps)=> {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{t("Highlight")}</div>
      <div className={classes.cards}>
        <div
          className={
            type === "plaza"
            ? classes.card
            : clsx(classes.card, classes.unviewPlaza)
          }
        >
          <div className={classes.imgContainer}>
            <img src={plaza_svg} alt="A" />
          </div>
          <div className={classes.rightPart}>
            <div className={classes.name}>{t("Plaza")}</div>
            <div className={classes.description}>
              {parcelInfo.plaza} {t("parcel away")}
            </div>
          </div>
        </div>
        <div
          className={
            type === "road"
            ? classes.card
            : clsx(classes.card, classes.unviewRoad)
          }
        >
          <div className={classes.imgContainer}>
            <img src={road_svg} alt="A" />
          </div>

          <div className={classes.rightPart}>
            <div className={classes.name}>{t("Road")}</div>
            <div className={classes.description}>
              {parcelInfo.road} {t("parcel away")}
            </div>
          </div>
        </div>
        <div
          className={
            type === "district"
            ? classes.card
            : clsx(classes.card, classes.unviewDistrict)
          }
        >
          <div className={classes.imgContainer}>
            <img src={distirct_svg} alt="A" />
          </div>

          <div className={classes.rightPart}>
            <div className={classes.name}>{t("District")}</div>
            <div className={classes.description}>
              {parcelInfo.district} {t("parcel away")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
