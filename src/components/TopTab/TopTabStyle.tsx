import { createStyles, FormControlLabel, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
export const TopTabStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#21263F",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "65px",
      color: "#fff",
      margin: "20px auto",
      paddingRight: "16px",
      [theme.breakpoints.down(769)]: {
        display: "contents",
      },
    },
    container: {
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      display: "block",
      maxWidth: "100% !important",
      [theme.breakpoints.down(1200)]: {
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        marginLeft: "0px !important",
        marginRight: "0px !important",
        marginTop: "22px !important",
        // marginBottom: "22px !important",
      },
      [theme.breakpoints.down(769)]: {
        borderBottom: "1px solid #282E4E",
      },
    },
    nftfilter: {
      position: "relative",
      // height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    topbar: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      [theme.breakpoints.down(769)]: {
        padding: "0px 16px 0px 0px ",
      },
    },
    tabsLeft: {
      flex: "1 0 auto",
      display: "flex",
      fontSize: "14px",
      [theme.breakpoints.down(769)]: {
        display: "inline-grid",
      },
    },
    landtoptabRight: {
      display: "flex",
      alignItems: "center",
    },
    //
    topbarFilter: {
      marginLeft: "20px",
      [theme.breakpoints.down(768)]: {
        display: "none",
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
    activeSwitch: {
      "& .MuiTypography-root": {
        background: "linear-gradient(#7F64E2 20%, #41A6EF 80%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
  })
);

export const StyledTopTabBtn = withStyles((theme) => ({
  root: {
    color: "white",
    position: "relative",
    display: "inline-block",
    padding: "0px 0px",
    fontSize: "16px",
    fontFamily: "Lato",
    lineHeight: "26px",
    letterSpacing: "-0.2px",
    cursor: "pointer",
    textTransform: "none",
    marginBottom: "-2px",
    minWidth: "35px",
    width: "100px",
    height: "30px",
    [theme.breakpoints.down(769)]: {
      paddingLeft: "15px",
      border: "2px solid #21263f",
      marginBottom: "6px",
    },
    "&.Mui-disabled": {
      color: "white",
      [theme.breakpoints.up(769)]: {
        border: "double 1px transparent",
        borderRadius: "100px",
        backgroundImage:
          "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
        backgroundClip: "content-box, border-box",
        backgroundOrigin: "border-box",
      },

      [theme.breakpoints.down(769)]: {
        paddingLeft: "15px",
        borderLeft: "2px solid #7F64E2",
        marginBottom: "6px",
      },
    },
    "& .MuiButton-label": {
      textAlign: "center",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "19.2px",
      fontFamily: "Lato",
      [theme.breakpoints.down(769)]: {
        textAlign: "left",
        fontWeight: 600,
        fontSize: "15px",
        marginRight: "32px",
        marginBottom: "0px",
      },
    },
  },
}))(Button);

//from searchbarstyle.tsx
export const StyledFormControlLabel = withStyles({
  label: {
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    background: "linear-gradient(to right, #FF7C4C, #FFB03A)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
})(FormControlLabel);

export const StyledTableButton = withStyles({
  root: {
    backgroundColor: "#282E4E",
    borderRadius: "100px 0px 0px 100px",
    padding: "7px 11px",
    minWidth: "35px",
    width: "38px",
    height: "30px",
    "&.Mui-disabled": {
      backgroundColor: "#333B67 !important",
      "& svg": {
        fill: "red",
      },
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#282E4E",
    },
  },
})(Button);

export const StyledLocationButton = withStyles({
  root: {
    backgroundColor: "#282E4E",
    borderRadius: "0px 100px 100px 0px",
    padding: "7px 11px",
    minWidth: "35px",
    width: "38px",
    height: "30px",
    "&.Mui-disabled": {
      backgroundColor: "#333B67 !important",
      "& svg": {
        fill: "#ff2d55",
      },
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#282E4E",
    },
  },
})(Button);
