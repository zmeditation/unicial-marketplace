import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  auctionInfo: {
    maxWidth: "1064px",
    margin: "40px auto",
    position: "relative",
  },
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
    maxWidth: "945px",
    display: "grid",
    margin: "0px auto",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "820px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "600px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
      marginTop: "60px",
    },
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
    position: "absolute",
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
    minWidth: "320px",
    [theme.breakpoints.down(992)]: {
      width: "100%",
      marginTop: "20px",
    },
  },
  items: {
    marginBottom: "40px",
  },
  tableRoot: {
    // width: "820px ",
    width: "100%",
    "& .MuiTableContainer-root": {
      width: "auto",
    },
  },
  BidsTitle: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "uppercase",
    marginBottom: "16px",
    color: "#676370",
  },
  countdownItem: {
    width: "70px",
    padding: "10px 0px 15px 0px",
  },
  timeItem: {
    color: "#12232f",
    fontSize: "36px",
    lineHeight: "53px",
    fontWeight: 800,
    position: "relative",
    textAlign: "center",
  },
  leftTime: {
    backgroundColor: "#242129",
    borderRadius: "10px",
    paddingBottom: "24px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
    margin: "20px 0px",
    display: "block",
  },
  actionButton: {
    display: "flex",
    justifyContent: "end",
    marginTop: "20px",
  },
  approveBtn: {
    marginRight: "20px",
  },
}));
