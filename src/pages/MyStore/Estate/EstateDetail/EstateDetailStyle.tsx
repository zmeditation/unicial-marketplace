/** @format */

import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: "50px",
    paddingBottom: "50px",
    maxWidth: "1064px",
    marginLeft: "auto",
    marginRight: "auto",
    flexGrow: 1,
    position: "relative",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      minWidth: "933px",
      maxWidth: "933px",
    },
    [theme.breakpoints.down(992)]: {
      minWidth: "700px",
      padding: "50px 16px",
    },
    [theme.breakpoints.down(769)]: {
      minWidth: "calc(100% - 32px) !important",
    },
    [theme.breakpoints.down(560)]: {
      width: "calc(100% - 32px) !important",
    },
  },
  container_root: {
    width: "100%",
  },
  backButton: {
    marginBottom: "50px",
  },
  bidCard: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    width: "100%",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  leftCard: {
    textAlign: "left",
    marginRight: "50px",
    [theme.breakpoints.down(769)]: {
      marginRight: "0px !important",
      marginBottom: "25px !important",
      width: "100%",
      height: "100%",
    },
  },
  rightCard: {
    flex: "1.25 1 auto",
  },
  tokenImg: {
    width: "100%",
    borderRadius: "15px",
  },
  imgContent: {
    width: "329px",
    height: "265.58px",
    borderRadius: "16px",
    overflow: "hidden",
    display: "inline-block",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      height: "auto",
    },
  },
  title: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "35px",
    fontFamily: "Montserrat",
    lineHeight: "50px",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    [theme.breakpoints.down(769)]: {
      fontSize: "28px",
    },
  },
  form_field: {
    marginTop: "50px",
    marginBottom: "20px",
    [theme.breakpoints.down(769)]: {
      marginBottom: "30px",
    },
  },
  price_container: {
    minWidth: "auto",
    marginBottom: "-5px",
  },
  subheader_label: {
    fontFamily: "Lato",
    color: "#96A1DB",
    fontStyle: "Regular",
    fontSize: "24px",
    lineHeight: "14px",
    align: "Left",
    verticalAlign: "Top",
    marginTop: "30px",
    marginBottom: "8px",
  },
  operatorValue: {
    fontFamily: "Lato",
    color: "#ffffff",
    fontStyle: "Regular",
    fontSize: "24px",
    lineHeight: "14px",
    align: "Left",
    verticalAlign: "Top",
    marginBottom: "8px",
    paddingLeft: "8px",
  },
  entireEstate: {
    marginTop: "50px",
    border: "1px solid #373F66",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "20px",
  },
  entireLabel: {
    position: "absolute",
    top: "-8px",
    left: "30px",
    fontFamily: "Lato",
    color: "#ffffff",
    fontStyle: "Regular",
    fontSize: "24px",
    lineHeight: "14px",
    align: "Left",
    verticalAlign: "Top",
    padding: "0px 10px",
    backgroundColor: "#21263f",
    borderRadius: "50px",
  },
  bidchange: {
    width: "100%",
    marginRight: "16px",
    marginTop: "16px",
    minWidth: "160px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
    [theme.breakpoints.down(960)]: {
      minWidth: "100%",
      marginLeft: "0px",
      order: 1,
    },
  },
  bidDetail: {
    marginTop: "50px",
  },
  bidsTitle: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "50px",
    color: "white",
  },
  showmoreContent: {
    marginTop: "15px",
    justifyContent: "center",
    width: "100%",
    flexFlow: "row nowrap",
    display: "flex",
  },
  displayNone: {
    display: "none",
  },
}));
