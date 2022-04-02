import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "calc(100vh - 246px)",
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
      marginTop: "30px",
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
      alignItems: "center",
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
    openEditorRoot: {
      marginLeft: "10px",
    },
    openEditorContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ff2d55",
      padding: "6px 13px",
      fontSize: "11px",
      borderRadius: "3px",
    },

    //noitems realte start
    noItemsRoot: {
      marginTop: "20px",
    },
    noItmesContainer: {
      border: " 1px solid #282e4e",
      borderRadius: "10px",
      padding: "112px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    noItemsInfoContainer: {},
    noItemsTitle: {
      color: "white",
      fontSize: "34px",
      fontWeight: 600,
      textAlign: "center",
    },
    noItemsDesc: {
      color: "#676370",
      fontSize: "17px",
      textAlign: "center",
      width: "500px",
      margin: "8px auto 34px",
    },
    CardsContainer: {
      display: "flex",
      alignItems: "center",
    },
    CardContainer: {
      width: "240px",
      height: "204px",
    },
    MarginRight: {
      marginRight: "24px",
    },
    //noitems realte end
  })
);
