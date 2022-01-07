import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderSignInBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      //   [theme.breakpoints.down(769)]: {
      //     marginTop: "22px",
      //     marginBottom: "22px",
      //     display: "contents",
      //   },
    },
    container: {
      flex: "1 1 auto",
      justifyContent: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
  })
);
