import { Theme, makeStyles } from "@material-ui/core/styles";
export const MyStoreStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    maxWidth: "1064px",
    margin: "40px auto",
    position: "relative",
    display: "flex",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
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
  leftPart: {
    width: "264px",
    marginRight: "20px",
    [theme.breakpoints.down(769)]: {
      display: "none",
    },
  },
  rightPart: {
    width: "calc(100% - 268px)",
    [theme.breakpoints.down(769)]: {
      width: "100%",
    },
  },
  statsContainer: {
    marginBottom: "42px",
  },
  title: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "50px",
    letterSpacing: "2%",
    marginTop: "-7px",
    marginBottom: "16px",
  },
  generalStats: {
    marginBottom: "20px",
  },
  staginContainer: {},
  MobileSidebarContainer: {
    display: "none",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
}));
