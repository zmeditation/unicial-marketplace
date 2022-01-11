import React from "react";
import clsx from "clsx";
import { Theme, makeStyles } from "@material-ui/core/styles";
import makeBlockie from "ethereum-blockies-base64";
import plaza_svg from "../../assets/svg/plaza.svg";
import road_svg from "../../assets/svg/road.svg";
import distirct_svg from "../../assets/svg/district.svg";
import { highlight, parcelInfo } from "../../config/hightLightData";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "45px",
  },
  title: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "uppercase",
    marginBottom: "8px",
    color: "#676370",
  },
  cards: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  card: {
    display: "flex",
    marginBottom: "20px",
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
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: 600,
  },
  description: {
    fontSize: "15px",
    lineHeight: "24px",
    color: "#676370",
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
}));

interface DescriptionProps {}

const Highlight: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>Highlight</div>
      <div className={classes.cards}>
        <div
          className={
            highlight.plaza === 0
              ? clsx(classes.card, classes.unviewPlaza)
              : classes.card
          }
        >
          <img src={plaza_svg} className={classes.addressImg} alt="A" />

          <div className={classes.rightPart}>
            <div className={classes.name}>Plaza</div>
            <div className={classes.description}>
              {parcelInfo.plaza} parcel away
            </div>
          </div>
        </div>
        <div
          className={
            highlight.road === 0
              ? clsx(classes.card, classes.unviewRoad)
              : classes.card
          }
        >
          <img src={road_svg} className={classes.addressImg} alt="A" />

          <div className={classes.rightPart}>
            <div className={classes.name}>Road</div>
            <div className={classes.description}>
              {parcelInfo.road} parcel away
            </div>
          </div>
        </div>
        <div
          className={
            highlight.district === 0
              ? clsx(classes.card, classes.unviewDistrict)
              : classes.card
          }
        >
          <img src={distirct_svg} className={classes.addressImg} alt="A" />

          <div className={classes.rightPart}>
            <div className={classes.name}>District</div>
            <div className={classes.description}>
              {parcelInfo.district} parcel away
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
