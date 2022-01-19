import { createStyles, FormControlLabel, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import TableChartIcon from "@material-ui/icons/TableChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Button } from "@material-ui/core";
export const TopTabStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#21263F",
      marginBottom: "0px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "65px",
      color: "#fff",
      [theme.breakpoints.down(769)]: {
        marginTop: "22px",
        marginBottom: "22px",
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
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        marginLeft: "0px !important",
        marginRight: "0px !important",
        marginTop: "22px !important",
        marginBottom: "22px !important",
      },
    },
    nftfilter: {
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
    tabsLeft: {
      flex: "1 0 auto",
      display: "flex",
      fontSize: "14px",
      [theme.breakpoints.down(769)]: {
        display: "inline-grid",
      },
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
      "& .MuiSwitch-track": {
        // backgroundColor: "blue",
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
    marginRight: "14px",
    fontSize: "16px",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    lineHeight: "26px",
    letterSpacing: "-0.2px",
    cursor: "pointer",
    textTransform: "none",
    // borderBottom: "3px solid #18141a",
    marginBottom: "-2px",
    minWidth: "35px",
    width: "77px",
    height: "30px",
    [theme.breakpoints.down(769)]: {
      padding: "0px",
      marginBottom: "6px",
    },
    "&.Mui-disabled": {
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      color: "white",
    },
    "& .MuiButton-label": {
      textAlign: "center",
      [theme.breakpoints.down(769)]: {
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
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    background: "linear-gradient( #FF7C4C 20%, #FFB03A 101.82%)",
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
        // background: "linear-gradient(#7F64E2 100%, #41A6EF 100%)",
        //
      },
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#392d38",
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
      backgroundColor: "#392d38",
    },
  },
})(Button);

export const StyledTableChartIcon = withStyles({
  root: {
    fill: "#fff",

    fontSize: "20px",
  },
})(TableChartIcon);

export const StyledLocationOnIcon = withStyles({
  root: {
    fill: "#fff",
    fontSize: "20px",
  },
})(LocationOnIcon);
