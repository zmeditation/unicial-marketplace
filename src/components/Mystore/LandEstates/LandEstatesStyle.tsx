import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const LandEstatesStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    createBtnContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginRight: "20px",
      marginBottom: "50px",
    },
    createBtn: {
      width: "200px",
    },
    showmoreContent: {
      marginTop: "15px",
      justifyContent: "center",
      width: "100%",
      flexFlow: "row nowrap",
      display: "flex",
    },
    displayNone: {
      display: "none",
    },
  })
);
