import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderStyle = makeStyles((theme: Theme) =>
  createStyles({
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
    headermenuContainer: {
      margin: "0px",
      borderRadius: "0px",
      border: "none",
      boxShadow: "none",
      display: "flex",
      // [theme.breakpoints.down(768)]: {
      //   display: "none",
      // },
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
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
      minWidth: "33px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    headerClickBtn: {
      fontWeight: 700,
      color: "#ffffff",
      borderRadius: "6px",
      textTransform: "uppercase",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      marginLeft: "24px",
      padding: "0px",
      fontSize: "13px",
      lineHeight: "18px",
      minWidth: "33px",
      "&:hover": {
        cursor: "pointer",
      },
    },
    signnormal: {
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
      cursor: "pointer",
      "&:hover": {
        color: "#fff",
      },
    },
    signclicked: {
      fontWeight: 700,
      color: "#ff2d55",
      cursor: "pointer",
      textTransform: "uppercase",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
      marginLeft: "24px",
      padding: "0px",
      fontSize: "13px",
      lineHeight: "18px",
    },
  })
);
