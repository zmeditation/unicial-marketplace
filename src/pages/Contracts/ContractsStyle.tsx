import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    maxWidth: "1064px",
    margin: "40px auto",
    position: "relative",
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
  LandMap: {
    display: "grid",
    margin: "0px auto",
    width: "100%",
  },
  LandMapContent: {
    height: "400px",
    [theme.breakpoints.down(768)]: {
      margin: "0px calc( (100% - 400px) / 2)",
    },
    [theme.breakpoints.down(500)]: {
      margin: "0px calc( (100% - 300px) / 2)",
    },
  },

  backBtnPosition: {
    display: "flex",
    justifyContent: "start",
    margin: "10px 0px",
  },
  contractDescription: {
    marginTop: "35px",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(992)]: {
      display: "block",
    },
  },
  leftDescription: {
    flex: "1 1",
    marginRight: "48px",
    [theme.breakpoints.down(992)]: {
      width: "100%",
    },
  },
  rightDescription: {
    minWidth: "265px",
    [theme.breakpoints.down(992)]: {
      width: "100%",
      marginTop: "20px",
    },
  },
  items: {
    marginBottom: "40px",
  },
  divideLine: {
    border: "1px solid #282E4E",
    marginBottom: "37px",
    marginTop: "40px",
  },
  tableRoot: {
    width: "100%",
    "& .MuiTableContainer-root": {
      width: "auto",
    },
  },
  BidsTitle: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "50px",
    color: "white",
  },
  BidboxContainer: {
    marginBottom: "30px",
  },
}));
