import { useNavigate } from "react-router-dom";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TokenImg from "../assets/img/1.png";

const useStyles = makeStyles((theme: Theme) => ({
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
  backBtn: {
    borderRadius: "25px",
    border: "1px solid #6763709c",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    marginTop: "5vh",
    marginBottom: "10vh",
    cursor: "pointer",
    "&:hover": {
      borderColor: "white",
    },
    [theme.breakpoints.down(769)]: {
      top: "-40px",
    },
  },
  backIcon: {
    width: "15px",
    height: "15px",
    color: "white",
    marginLeft: "10px",
  },
  bidCard: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    width: "100%",
  },
  leftCard: {
    flex: "0.75 1 auto",
    textAlign: "right",
    marginRight: "80px",
  },
  rightCard: {
    flex: "1.25 1 auto",
  },
  tokenImg: {
    width: "100%",
  },
  imgContent: {
    width: "240px",
    borderRadius: "16px",
    overFlow: "hidden",
    display: "inline-block",
  },
  title: {
    fontSize: "34px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
    marginBottom: "8px",
  },
  subtitle: {
    marginBottom: "32px",
  },
}));

const Bid = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div className={classes.root}>
      <span className={classes.backBtn} onClick={() => navigate(-1)}>
        <ArrowBackIosIcon className={classes.backIcon} />
      </span>
      <div className={classes.bidCard}>
        <div className={classes.leftCard}>
          <div className={classes.imgContent}>
            <img src={TokenImg} className={classes.tokenImg} alt="token"></img>
          </div>
        </div>
        <div className={classes.rightCard}>
          <div className={classes.title}>Place a bid</div>
          <div className={classes.subtitle}>
            Set a price and expiration date for your bid on{" "}
            <span>Genesis Plaza</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bid;
