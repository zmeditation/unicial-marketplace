import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

export const CategoryTreeStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
      width: "244px",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      borderRadius: "15px",
      height: "auto",
      padding: "26px 0px",
    },
    typeTreeRoot: {
      height: "auto",
      flexGrow: 1,
      maxWidth: 400,
      "& .MuiTreeItem-iconContainer": {
        display: "none",
      },
      "& .MuiTreeItem-content": {
        padding: "9px 39px",
      },
      "& .Mui-selected": {
        backgroundColor: "#21263F",
        "& .MuiTreeItem-content": {
          //   backgroundColor: "green",
        },
      },
    },
    title: {
      fontFamily: "Lato",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#96A1DB",
      opacity: "0.5",
      margin: "0px 0px 21px 0px",
      padding: "0px 40px 0px 40px",
    },
  })
);
