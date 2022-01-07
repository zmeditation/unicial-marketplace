import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Button from "../Base/Button";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "34px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
  },
  buttonGroup: {
    display: "flex",
    marginTop: "15px",
    gridGap: "8px",
    gap: "8px",
  },
}));

interface TitleProps {}

const Title: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>Genesis Plaza</div>
      <div className={classes.buttonGroup}>
        <Button color="dark">400 LAND</Button>
        <Button color="red">JUMP IN</Button>
      </div>
    </div>
  );
};

export default Title;
