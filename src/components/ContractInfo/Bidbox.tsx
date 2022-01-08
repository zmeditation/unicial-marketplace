import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Button from "../Base/Button";
import ActionButton from "../Base/ActionButton";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "20px 24px",
    border: "2px solid #242129",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
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
}));

interface BidboxProps {}

const Bidbox: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>network</div>
      <div className={classes.subtitle}>Ethereum</div>
      <ActionButton>BID</ActionButton>
    </div>
  );
};

export default Bidbox;
