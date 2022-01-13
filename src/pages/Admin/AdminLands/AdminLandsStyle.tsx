import { Theme, makeStyles } from "@material-ui/core/styles";

export const AdminLandsStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 160px)",
    maxWidth: "1064px",
    marginTop: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
    position: "relative",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "933px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "723px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
    },
  },
}));
