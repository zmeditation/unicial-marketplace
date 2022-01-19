import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const SignInStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "calc(100vh - 203px)",
      [theme.breakpoints.down(768)]: {
        minHeight: "calc(100vh - 272px)",
      },
    },
    container: {
      position: "relative",
      alignItems: "center",
      maxWidth: "100% !important",
      height: "auto",
      fontFamily:
        'system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      display: "flex",
      flexFlow: "column",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      justifyContent: "space-between",
      [theme.breakpoints.down(1204)]: {
        height: "auto",
        marginBottom: "48px",
      },
      [theme.breakpoints.down(1201)]: {
        flexFlow: "column nowrap",
        marginBottom: "12px",
      },
      [theme.breakpoints.down(1200)]: {
        flexFlow: "column nowrap",
        marginBottom: "12px",
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        margin: "48px 16px 0px 16px !important",
        paddingBottom: "80px",
      },
      [theme.breakpoints.down(768)]: {
        width: "auto !important",
      },
    },
    headerText: {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "34px",
      marginTop: "40px",
      marginBottom: "25px",
    },
    starWalletIcon: {
      width: "180px",
      height: "180px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    descriptionContainer: {
      padding: "0px 38px",
      marginBottom: "20px",
      textAlign: "center",
      color: "#96A1DB",
      fontSize: "16px",
    },
    browserLink: {
      color: "#FF7C4C",
      textDecoration: "none",
    },
    connectBtn: {
      minWidth: "64px",
    },
    signinellipse1: {
      position: "absolute",
      top: "30%",
      left: "0px",
    },
    signinellipse2: {
      position: "absolute",
      right: "0px",
    },
    callmadeicon: {
      width: "20px",
      height: "16px",
    },
  })
);
