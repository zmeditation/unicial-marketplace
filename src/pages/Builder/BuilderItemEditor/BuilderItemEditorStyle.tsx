import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const BuilderItemEditorStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
    },
    charactorContainer: {
      height: "100vh",
      backgroundColor: "#282E4E",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "calc(100% - 902px)",
    },
    blackman: {
      width: "212px",
      height: "701px",
    },
  })
);
