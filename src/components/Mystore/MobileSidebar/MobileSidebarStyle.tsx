import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const MobileSidebarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#21263f",
      display: "grid",
    },
  })
);
