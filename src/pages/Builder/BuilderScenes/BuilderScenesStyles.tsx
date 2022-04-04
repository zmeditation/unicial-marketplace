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
    viewLetter: {
      fontFamily: "Lato",
      fontSize: "14px",
      fontStyle: "Regular",
      fontWeight: 400,
      lineHeight: "19px",
      color: "red",
      cursor: "pointer",
    },
    viewArrow: {
      cursor: "pointer",
      "& i": {
        color: "red",
        marginLeft: "10px",
      },
    },
    sceneContent: {
      display: "flex",
      overflowX: "scroll",
      paddingBottom: "30px",
    },
    sceneCardRoot: {
      width: "250px",
      minWidth: "250px",
      height: "180px",
      background: "grey",
      borderRadius: "20px",
      position: "relative",
      marginRight: "20px",
    },
    sceneName: {
      fontFamily: "Montserrat",
      fontSize: "19px",
      fontWeight: 500,
      lineHeight: "19px",
      position: "absolute",
      left: "20px",
      bottom: "50px",
    },
    sceneSize: {
      fontFamily: "Montserrat",
      fontSize: "19px",
      fontWeight: 500,
      lineHeight: "19px",
      position: "absolute",
      left: "20px",
      bottom: "20px",
    },
  })
);
