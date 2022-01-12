import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 160px)",
    maxWidth: "1064px",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
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
    marginRight: "80px",
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
    width: "240px",
    borderRadius: "16px",
    overFlow: "hidden",
    display: "inline-block",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      height: "auto",
    },
  },
  title: {
    fontSize: "34px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
    marginBottom: "8px",
    [theme.breakpoints.down(769)]: {
      fontSize: "28px",
    },
  },
  subtitle: {
    marginBottom: "10px",
    color: "#ffa900",
    fontSize: "14px",
  },
  form_field: {
    maxWidth: "420px",
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
    fontSize: "normal",
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
  },
  bidchange: {
    marginLeft: "16px",
    minWidth: "64px",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      order: 1,
    },
  },
  cancelchange: {
    minWidth: "64px",
    [theme.breakpoints.down(769)]: {
      order: 2,
      marginTop: "15px",
    },
  },
  viewNeedSignIn: {
    display: "block",
  },
  unviewNeedSignIn: {
    display: "none",
  },
  viewBuy: {
    display: "block",
  },
  unviewBuy: {
    display: "none",
  },
}));
