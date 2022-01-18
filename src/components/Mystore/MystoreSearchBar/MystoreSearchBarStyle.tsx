import {
  createStyles,
  withStyles,
  Theme,
  Popover,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const MystoreSearchBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      background: "#21263f",
      backdropFilter: "blur(20)",
      zIndex: 1,
      display: "flex",
      width: "100%",
      height: "auto",
    },
    container: {
      width: "100%",
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
      justifyContent: "end",
    },
    textfilter: {
      display: "flex",
      width: "175px",
    },
    searchIcon: {
      height: "14px",
      marginTop: "8px",
      marginRight: "10px",
    },
    searchinput: {
      fontSize: "14px",
      color: "white",
      backgroundPositionY: "4px",
      lineHeight: "17px",
      background: "none",
      fontWeight: 400,
      border: "none",
      borderRadius: "6px",
      padding: "6px 6px 6px 0px",
      outline: "none",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "8px",
      overflow: "visible",
    },
    topbarFilter: {
      marginLeft: "20px",
      [theme.breakpoints.down(768)]: {
        display: "none",
      },
      "& .MuiSwitch-thumb": {
        width: "12px",
        height: "12px",
        marginTop: "3px",
        marginLeft: "3px",
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
    openfilterLabel: {
      color: "#ff2d55",
      marginRight: "10px",
      fontWeight: 500,
    },
    filterIcon: {
      width: "20px",
      height: "20px",
    },
    listDropdown: {
      // width: "120px",
      height: "30px",
      transform: "translateY(-4px)",
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      outline: 0,
      textAlign: "center",
      //
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      //
      [theme.breakpoints.down(1025)]: {
        marginBottom: "18px",
      },
    },
    listRoot: {
      textTransform: "none",
      display: "inline-block",
      transition: "none",
      cursor: "pointer",
    },
    listContainer: {
      display: "flex",
      alignItems: "center",
    },
    gradientlistLabel: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
      background: "linear-gradient( #FF7C4C 0%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    listLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
      "&:hover": {
        color: "white",
      },
    },
    switch: {
      "& .MuiSwitch-thumb": {
        width: "13px",
        height: "13px",
        marginTop: "2.5px",
        marginLeft: "3px",
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
      },
      "& .MuiSwitch-root": {
        padding: "12.5px 12px",
      },
    },
    filterDownArrow: {
      color: "linear-gradient( #FF7C4C 20%, #FFB03A 101.82%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginLeft: "3px",
      marginTop: "4px",
    },
  })
);

export const StyledFormControlLabel = withStyles({
  label: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    background: "linear-gradient( #FF7C4C 20%, #FFB03A 101.82%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
})(FormControlLabel);

export const StyledListPopover = withStyles({
  paper: {
    backgroundColor: "#171b30",
    marginBottom: "70px",
    borderRadius: "6px",
    position: "absolute",
    minWidth: "168px",
    top: "419px",
  },
})(Popover);

export const StyledMenuItem = withStyles({
  root: {
    color: "white",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    minWidth: "210px",
    padding: "10px 16px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      backgroundColor: "#24212933",
    },
  },
})(MenuItem);
