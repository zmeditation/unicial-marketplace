import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ActionButton from "../Base/ActionButton";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "20px 24px",
    border: "2px solid #242129",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    margin: "5px 0px",
  },
  title: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "uppercase",
    marginBottom: "8px",
    color: "#676370",
  },
  subtitle: {
    fontSize: "20px",
    marginTop: "4px",
    lineHeight: "28px",
  },
  priceValueContainer: {
    fontSize: "20px",
    marginBottom: "25px",
  },
  symbol: {
    fontSize: "normal",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    color: "#ff2d55",
  },
  bidBtn: {
    marginTop: "0px",
  },
  expireContainer: {
    display: "flex",
    marginTop: "15px",
  },
  expireDescription: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "18px",
    marginBottom: "8px",
    color: "#676370",
    marginLeft: "4px",
  },
  clock: {
    fontSize: "16px",
    color: "#676370",
  },
}));

interface BuyboxProps {}

const Buybox: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.title}>price</div>
      <div className={classes.priceValueContainer}>
        <i className={classes.symbol}>⏣</i>
        1,000,000
      </div>
      <div className={classes.title}>network</div>
      <div className={classes.subtitle}>Zilionixx</div>
      <ActionButton color="red" onClick={() => navigate("buy")}>
        BUY
      </ActionButton>
      <ActionButton
        color="dark"
        onClick={() => navigate("bid")}
        className={classes.bidBtn}
      >
        BID
      </ActionButton>
      <div className={classes.expireContainer}>
        <AccessTimeIcon className={classes.clock} />
        <div className={classes.expireDescription}>Expires in 12 months</div>
      </div>
    </div>
  );
};

export default Buybox;
