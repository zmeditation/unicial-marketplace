import { createStyles, Theme, withWidth } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
export const HeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   margin: "48px 0px",
    //   padding: "0px 24px",
    //   width: "100%",
    //   [theme.breakpoints.down(760)]: {
    //     margin: "48px 0px 48px 0px",
    //     padding: "0px 16px 0px 16px",
    //   },
    // },
    root: {
      marginTop: "0px",
      borderBottom: "none",
      width: "100%",
      position: "relative",
      backgroundColor: "#18141a",
    },
    container: {
      position: "relative",
      display: "flex",
      flexFlow: "row no wrap",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      [theme.breakpoints.down(1200)]: {
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        width: "calc(100% - 32px) !important",
        padding: "0 16px",
        margin: "0 !important",
      },
    },
    headermenu_container: {
      margin: "0px",
      borderRadius: "0px",
      border: "none",
      boxShadow: "none",
      display: "flex",
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
    account_root: {
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    account_container: {
      margin: "0px",
      display: "flex",
    },
    signinbtn: {
      color: "#676370",
      textTransform: "uppercase",
      marginLeft: "24px",
      padding: "0px",
      fontSize: "13px",
      lineHeight: "18px",
      margin: "0 0.35714286em",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
  })
);

export const StyledHeaderBtn = withStyles({
  root: {
    fontWeight: 400,
    color: "#676370",
    borderRadius: "6px",
    textTransform: "uppercase",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    marginLeft: "24px",
    padding: "0px",
    fontSize: "13px",
    lineHeight: "18px",
    "&:hover": {
      color: "#fff",
      cursor: "pointer",
    },
    "&.Mui-disabled": {
      fontWeight: 700,
      color: "#ffffff",
      cursor: "pointer",
    },
  },
})(Button);
