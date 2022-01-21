import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import fromImg from "../../assets/img/1.png";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: "1 0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 41px",
    marginTop: "13px",
    marginBottom: "20px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#282E4E",
    borderRadius: "15px",
  },
  container: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  fromPart: {
    width: "30%",
    display: "block",
    marginRight: "24px",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      width: "80%",
    },
  },
  pricePart: {
    marginLeft: "48px",
    width: "20%",
    marginRight: "24px",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      width: "100%",
    },
  },
  timePart: {
    marginLeft: "48px",
    width: "20%",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      width: "100%",
    },
  },
  title: {
    fontSize: "14px",
    lineHeight: "17px",
    marginBottom: "8px",
    color: "#96A1DB",
    fontWeight: 400,
  },

  fromIamge: {
    marginRight: "6px",
    borderRadius: "3px",
    width: "20px",
    height: "20px",
  },
  content: {
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
    fontWeight: 400,
  },
  symbol: {
    fontSize: "20px",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

interface data {
  fromName: string;
  price: number;
  time: number;
}

const BidRecord = ({ fromName, price, time }: data) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        <div className={classes.container}>
          <div className={classes.fromPart}>
            <div className={classes.title}>FROM</div>
            <div className={classes.content}>
              <img
                src={fromImg}
                className={classes.fromIamge}
                alt="fromimage!"
              />
              {fromName}
            </div>
          </div>

          <div className={classes.pricePart}>
            <div className={classes.title}>PRICE</div>
            <div className={classes.content}>
              <i className={classes.symbol}>⏣</i>
              {price}
            </div>
          </div>

          <div className={classes.timePart}>
            <div className={classes.title}>TIME LEFT</div>
            <div className={classes.content}>{time} days</div>
          </div>
        </div>
      }
    </div>
  );
};

export default BidRecord;
