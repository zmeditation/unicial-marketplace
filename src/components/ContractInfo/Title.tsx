import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Button from "../Base/Button";
import ActionButton from "../Base/ActionButton";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "34px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
    marginBottom: "15px",
  },
  smalltitle: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
    color: "#96A1DB",
    marginBottom: "30px",
  },
  buttonGroup: {
    display: "flex",
    marginTop: "15px",
    gridGap: "8px",
    gap: "8px",
  },
  jumpbtn: {
    minWidth: "75px !important",
  },
}));

interface TitleProps {}

const Title: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>Genesis Plaza</div>
      <div className={classes.smalltitle}>Unicial Genesis Plaza</div>
      <div className={classes.buttonGroup}>
        <ActionButton disabled>400 LAND</ActionButton>
        <ActionButton color="light" className={classes.jumpbtn}>
          JUMP IN
        </ActionButton>
      </div>
    </div>
  );
};

export default Title;
