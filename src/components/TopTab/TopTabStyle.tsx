import { createStyles, Theme, withWidth } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
export const TopTabStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderBottom: "1px solid #67637033",
      backgroundColor: "#18141a",
      marginBottom: "0px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "65px",
      color: "#fff",
      [theme.breakpoints.down(769)]: {
        marginTop: "22px",
        marginBottom: "22px",
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
      // [theme.breakpoints.down(769)]: {
      //   marginLeft: "16px !important",
      //   marginRight: "16px !important",
      // },
    },
    tabs_left: {
      flex: "1 0 auto",
      fontSize: "14px",
      //   [theme.breakpoints.down(769)]: {
      //     display: "grid",
      //   },
    },
  })
);

export const StyledTopTabBtn = withStyles({
  root: {
    color: "white",
    position: "relative",
    display: "inline-block",
    padding: "19px 0px",
    marginRight: "32px",
    fontSize: "17px",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    lineHeight: "26px",
    letterSpacing: "-0.2px",
    cursor: "pointer",
    textTransform: "none",
    "&.Mui-disabled": {
      borderBottom: "3px solid #ff2d55",
      borderRadius: "0px",
      color: "white",
    },
  },
})(Button);
