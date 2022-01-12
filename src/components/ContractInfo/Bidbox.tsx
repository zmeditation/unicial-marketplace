import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
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
}));

interface BidboxProps {}

const Bidbox: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <div className={classes.title}>network</div>
      <div className={classes.subtitle}>Zilionixx</div>
      <ActionButton color="red" onClick={() => navigate("bid")}>
        BID
      </ActionButton>
    </div>
  );
};

export default Bidbox;
