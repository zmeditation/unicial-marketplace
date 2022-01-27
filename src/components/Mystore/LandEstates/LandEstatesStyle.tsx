import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const LandEstatesStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
    },
    buttons: {
      display: "flex",
      width: "400px",
      [theme.breakpoints.down(769)]: {
        width: "100%",
        display: "grid",
      },
    },
    bidchange: {
      marginLeft: "16px",
      minWidth: "160px",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      [theme.breakpoints.down(769)]: {
        marginLeft: "0px",
        order: 1,
      },
    },
    cancelchange: {
      minWidth: "160px",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FFFFFF",
      [theme.breakpoints.down(769)]: {
        order: 2,
        marginTop: "15px",
      },
    },
  })
);
