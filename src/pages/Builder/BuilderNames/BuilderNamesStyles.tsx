import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 390px)",
      minWidth: "1064px",
      maxWidth: "1064px",
      margin: "10px auto 60px auto",
      position: "relative",
      "& canvas, .react-tile-map ": {
        borderRadius: "15px",
      },
      [theme.breakpoints.up(1366)]: {
        maxWidth: "1064px",
      },
      [theme.breakpoints.down(1200)]: {
        minWidth: "933px",
        maxWidth: "933px",
      },
      [theme.breakpoints.down(960)]: {
        minWidth: "calc(100% - 32px) !important",
        margin: "10px 16px",
      },
      [theme.breakpoints.down(768)]: {
        minWidth: "calc(100% - 32px) !important",
      },
    },
    createBtns: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
    },
    resultStatus: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
    },
    functionBtn: {
      display: "flex",
    },
    functionIcon: {
      padding: "5px 10px",
      borderRadius: "4px",
      border: "1px solid #282e4e",
      marginLeft: "4px",
      cursor: "pointer",
      "& i": {
        width: "16px",
        height: "16px",
        color: "red",
      },
    },
    createContent: {
      border: "solid 1px #282e4e",
      height: "200px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Lato",
      fontSize: "16px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
    },
    importantLink: {
      color: "red",
      cursor: "pointer",
    },
    contentLetter: {
      textAlign: "center",
    },
  })
);
