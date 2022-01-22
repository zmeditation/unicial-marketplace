import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ActionButton from "../Base/ActionButton";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "20px 24px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    margin: "5px 0px",
    backgroundColor: "#282E4E",
  },
  title: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
    marginBottom: "8px",
    color: "#96A1DB",
    opacity: "50%",
  },
  subtitle: {
    fontSize: "16px",
    marginTop: "4px",
    lineHeight: "40px",
    marginBottom: "13px",
  },
  callmadeicon: {
    width: "20px",
    height: "20px",
  },
}));

interface BidboxProps {}

const Bidbox: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Network</div>
      <div className={classes.subtitle}>Zilionixx</div>
      <ActionButton color="light" onClick={() => navigate("bid")}>
        BID
        <CallMadeIcon className={classes.callmadeicon} />
      </ActionButton>
    </div>
  );
};

export default Bidbox;
