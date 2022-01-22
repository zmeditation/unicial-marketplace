/** @format */

import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 160px)",
    maxWidth: "1064px",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
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
    textAlign: "right",
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
    lineHeight: "50px",
    letterSpacing: "0.02em",
    color: "#FFFFFF",
    [theme.breakpoints.down(769)]: {
      fontSize: "28px",
    },
  },
  subtitle: {
    marginBottom: "32px",
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
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      fontFamily: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif',
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
      paddingBottom: "15px",
    },
  },
  date_container: {
    minWidth: "auto",
    //
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      fontFamily: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif',
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
      paddingBottom: "15px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid #28242b",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover": {
      "&:before": {
        borderBottom: "2px solid #28242b",
      },
    },
  },
  subheader_label: {
    color: "#676370",
    fontSize: "13px",
    lineHeight: "18px",
    fontWeight: 400,
    marginBottom: "6px",
  },
  manafield: {
    display: "flex",
  },
  symbol: {
    fontWeight: 700,
    fontSize: "21px",
    color: "#ff2d55",
    fontStyle: "normal",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    display: "inline-block",
    // marginRight: "4px",
    marginLeft: "5px",
    marginBottom: "6px",
  },
  buttons: {
    display: "flex",
    width: "400px",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      display: "grid",
    },
    marginBottom: "150px",
  },
  bidchange: {
    marginLeft: "16px",
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
    minWidth: "160px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
    [theme.breakpoints.down(769)]: {
      order: 2,
      marginTop: "15px",
    },
  },
}));

export const StyledInput = withStyles((theme) => ({
  root: {
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
      paddingTop: "15px",
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

export const StyledDateInput = withStyles((theme) => ({
  root: {
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
      paddingTop: "15px",
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
      borderLeft: "1px solid #373F66",
    },
  },
}))(Input);
