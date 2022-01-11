import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const SignInStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   marginTop: "20px",
      //   marginBottom: "50px",
      width: "100%",
      minHeight: "calc(100vh - 120px)",
    },
    container: {
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
      marginBottom: "25px",
      width: "180px",
      height: "180px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      backgroundColor: "#242129",
    },
    descriptionContainer: {
      padding: "0px 38px",
      marginBottom: "40px",
      textAlign: "center",
      color: "#676370",
      fontSize: "16px",
    },
    browserLink: {
      color: "#ff2d55",
      textDecoration: "none",
    },
    connectBtn: {
      minWidth: "64px",
      width: "64px !important",
    },
  })
);
