import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "0px",
      borderBottom: "1px solid #282e4e",
      width: "100%",
      position: "relative",
      backgroundColor: "#21263F",
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
        width: "100%",
        padding: "0 16px",
        margin: "0 !important",
      },
    },
    headermenuContainer: {
      margin: "0px",
      borderRadius: "0px",
      border: "none",
      boxShadow: "none",
      display: "flex",
      alignItems: "center",
      height: "100%",
      // [theme.breakpoints.down(768)]: {
      //   display: "none",
      // },
    },
    logoContent: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
    logoName: {
      color: "#fff",
      fontSize: "16px",
      fontWeight: 600,
      letterSpacing: "0.02em",
      lineHeight: "20px",
      margin: "0px 10px",
      [theme.breakpoints.down(500)]: {
        display: "none",
      },
    },
    accountRoot: {
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    accountContainer: {
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

    headerBtn: {
      fontWeight: "normal",
      color: "#ffffff",
      borderRadius: "6px",
      textTransform: "uppercase",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      marginLeft: "24px",
      padding: "0px",
      fontSize: "16px",
      lineHeight: "18px",
      minWidth: "33px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    headerClickBtn: {
      fontWeight: "normal",
      color: "#ffffff",
      textTransform: "uppercase",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      marginLeft: "24px",
      padding: "2px 0px 0px 0px!important",
      fontSize: "16px",
      lineHeight: "18px",
      minWidth: "33px",
      height: "100%",
      borderRadius: "0px",
      borderBottom: "2px solid #7F64E2",
      "&:hover": {
        cursor: "pointer",
      },
      position: "relative",
      "&::after": {
        content: "",
        position: "absolute",
        left: 0,
        bottom: 0,
        height: "1px",
        width: "50%",
        borderBottom: "1px solid magenta",
      },
    },
    // signnormal: {
    //   fontWeight: 400,
    //   color: "#676370",
    //   borderRadius: "6px",
    //   textTransform: "uppercase",
    //   fontFamily:
    //     '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    //   marginLeft: "24px",
    //   padding: "0px",
    //   fontSize: "13px",
    //   lineHeight: "18px",
    //   cursor: "pointer",
    //   "&:hover": {
    //     color: "#fff",
    //   },
    // },
    // signclicked: {
    //   fontWeight: 700,
    //   color: "#ff2d55",
    //   cursor: "pointer",
    //   textTransform: "uppercase",
    //   fontFamily:
    //     '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
    //   marginLeft: "24px",
    //   padding: "0px",
    //   fontSize: "13px",
    //   lineHeight: "18px",
    // },
  })
);
