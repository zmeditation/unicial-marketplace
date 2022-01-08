import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "18px",
    textTransform: "uppercase",
    marginBottom: "8px",
    color: "#676370",
  },
  descript: {
    fontSize: "17px",
    lineHeight: "26px",
    letterSpacing: ".2px",
  },
}));

interface DescriptionProps {}

const Description: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>description</div>
      <div className={classes.descript}>Decentraland Genesis Plaza</div>
    </div>
  );
};

export default Description;
