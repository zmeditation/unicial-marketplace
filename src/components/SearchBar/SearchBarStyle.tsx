import { createStyles, withStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TableChartIcon from "@material-ui/icons/TableChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";

// import IconButton from "@material-ui/core/IconButton";
import search_svg from "./../../assets/svg/search.svg";
export const SearchBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      background: "#16141abf",
      backdropFilter: "blur(20)",
      zIndex: 1,
      //   [theme.breakpoints.down(769)]: {
      //     marginTop: "22px",
      //     marginBottom: "22px",
      //   },
    },
    container: {
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      display: "block",
      maxWidth: "100% !important",
      fontSize: "14px",
      color: "#fff",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      lineHeight: "1.4285em",

      [theme.breakpoints.down(1200)]: {
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        marginLeft: "16px !important",
        marginRight: "16px !important",
      },
    },
    nftfillter: {
      position: "relative",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    topbar: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
    },
    textfilter: {
      flex: "1 0 auto",
      marginRight: "30px",
      display: "flex",
    },
    search_icon: {
      height: "14px",
      marginTop: "8px",
      marginRight: "10px",
    },
    searchinput: {
      fontSize: "15px",
      color: "white",
      backgroundPositionY: "4px",
      lineHeight: "20px",
      background: "none",
      fontWeight: 600,
      border: "none",
      borderRadius: "6px",
      padding: "6px 6px 6px 0px",
      outline: "none",
      width: "100%",
      //   backgroundImage: "url(" + search_svg + " )",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "8px",
      overflow: "visible",
    },
    topbar_filter: {
      marginLeft: "20px",
      [theme.breakpoints.down(768)]: {
        display: "none",
      },
      "& .MuiSwitch-thumb": {
        width: "12px",
        height: "12px",
        marginTop: "2px",
        marginLeft: "3px",
      },
    },
    table_location_filter: {
      marginLeft: "20px",
      [theme.breakpoints.down(768)]: {
        display: "none",
      },
    },
    openfilter: {
      display: "none",
      [theme.breakpoints.down(768)]: {
        display: "flex",
        position: "relative",
        cursor: "pointer",
      },
    },
    openfilter_label: {
      color: "#ff2d55",
      marginRight: "10px",
      fontWeight: 500,
    },
    filter_icon: {
      width: "20px",
      height: "20px",
    },
  })
);

export const StyledFormControlLabel = withStyles({
  label: {
    fontSize: "12px",
    color: "#ff2d55",
  },
})(FormControlLabel);

export const StyledButton = withStyles({
  root: {
    // backgroundColor: "#504c58",
    backgroundColor: "#4c4a57",
    borderRadius: "5px",
    padding: "7px 11px",
    minWidth: "35px",
    "&.Mui-disabled": {
      backgroundColor: "#333842 !important",
      "& svg": {
        fill: "#ff2d55",
      },
    },
  },
})(Button);

export const StyledTableChartIcon = withStyles({
  root: {
    fill: "#fff",
    fontSize: "15px",
  },
})(TableChartIcon);

export const StyledLocationOnIcon = withStyles({
  root: {
    fill: "#fff",
    fontSize: "15px",
  },
})(LocationOnIcon);
