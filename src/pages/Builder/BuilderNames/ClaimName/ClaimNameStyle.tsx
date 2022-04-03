import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "1064px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "50px",
    paddingBottom: "50px",
    flexGrow: 1,
    display: "flex",
    position: "relative",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      width: "933px",
    },
    [theme.breakpoints.down(992)]: {
      width: "700px",
      padding: "50px 16px",
    },
    [theme.breakpoints.down(769)]: {
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
    flex: "0.75 1 auto",
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
  subtitle: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#96A1DB",
  },
  form_field: {
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
    fontSize: "12px",
    lineHeight: "14px",
    align: "Left",
    verticalAlign: "Top",
    opacity: "50%",
    marginBottom: "8px",
    marginLeft: "15px",
    marginTop: "24px",
  },
  buttons: {
    display: "flex",

    [theme.breakpoints.down(769)]: {
      width: "100%",
      display: "grid",
    },
  },
  bidchange: {
    minWidth: "160px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      order: 1,
    },
  },
  cancelchange: {
    marginLeft: "16px",
    minWidth: "160px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
    [theme.breakpoints.down(769)]: {
      order: 2,
      marginTop: "15px",
      marginLeft: "0px",
    },
  },
  widthFull: {
    width: "100%",
  },
  importantLetter: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#f50057",
  },
  normalshape: {
    marginLeft: "5px",
  },
  alignCenter: {
    display: "flex",
    alignItems: "center",
  },
  inputAdor: {
    borderLeft: "solid 1px #32395d",
    paddingLeft: "10px",
    height: "100%",
    "& .MuiTypography-colorTextSecondary": {
      color: "#747787",
    },
  },
  marginLeft:{
    marginLeft: "10px",
  },
}));

export const StyledInput = withStyles((theme) => ({
  root: {
    width: "100%",
    marginRight: "20px",
    display: "flex",
    height: "44px",
    alignContent: "center",
    padding: "10px",
    border: "1px solid #373F66",
    borderRadius: "100px",
    alignItems: "center",
    color: "white",
    "&:before": {
      border: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      border: "none",
    },
    "&:after": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
    },
    "& img": {
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "19px",
      fontStyle: "normal",
      padding: "0em 1em",
      transform: "translateY(-0.06em)",
      display: "inline-block",
      marginTop: "2px",
      background: "linear-gradient(to right, #FF7C4C 20%, #FFB03A 101.82%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      borderRight: "1px solid #373F66",
    },
  },
}))(Input);
