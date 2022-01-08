import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  leftCard: {
    flex: "0.75 1 auto",
    textAlign: "right",
    marginRight: "80px",
    [theme.breakpoints.down(769)]: {
      marginRight: "0px !important",
      marginBottom: "25px !important",
      width: "100%",
      height: "100%",
    },
  },
  rightCard: {
    flex: "1.25 1 auto",
  },
  tokenImg: {
    width: "100%",
    borderRadius: "15px",
  },
  imgContent: {
    width: "240px",
    borderRadius: "16px",
    overFlow: "hidden",
    display: "inline-block",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      height: "auto",
    },
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
  form_field: {
    maxWidth: "420px",
    marginBottom: "20px",
  },
  price_container: {
    minWidth: "400px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      fontFamily: 'Lato,"Helvetica Neue",Arial,Helvetica,sans-serif',
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
      paddingBottom: "15px",
    },
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid white",
    },
  },
  price_label: {
    color: "#676370",
    fontSize: "13px",
    lineHeight: "18px",
    fontWeight: 400,
    marginBottom: "6px",
  },
  manafield: {
    display: "flex",
  },
  symbol: {
    fontWeight: 700,
    fontSize: "21px",
    color: "#ff2d55",
    fontStyle: "normal",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    display: "inline-block",
    // marginRight: "4px",
    marginLeft: "5px",
    marginBottom: "6px",
  },
  price_value: {},
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
          <div className={classes.form_field}>
            <div className={classes.price_container}>
              <div className={classes.price_label}>PRICE</div>
              {/* <div className={classes.manafield}>
                <i className={classes.symbol}>⏣</i>
                <div className={classes.price_value}>1000</div>
              </div> */}
              <FormControl>
                {/* <InputLabel htmlFor="input-with-icon-adornment">
                  With a start adornment
                </InputLabel> */}
                <Input
                  id="input-with-icon-adornment"
                  startAdornment={
                    <InputAdornment position="start" placeholder="1000">
                      {/* <AccountCircle /> */}
                      <i className={classes.symbol}>⏣</i>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bid;
