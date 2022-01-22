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
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14.4px",
    textTransform: "uppercase",
    marginBottom: "21px",
    color: "#96A1DB",
  },
  cards: {
    width: "100%",
    display: "flex",
    // justifyContent: "space-between",
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
          <div className={classes.imgContainer}>
            <img src={plaza_svg} alt="A" />
          </div>
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
          <div className={classes.imgContainer}>
            <img src={road_svg} alt="A" />
          </div>

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
          <div className={classes.imgContainer}>
            <img src={distirct_svg} alt="A" />
          </div>

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
