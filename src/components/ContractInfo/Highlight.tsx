import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import makeBlockie from "ethereum-blockies-base64";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  container: {
    display: "flex",
  },
  addressImg: {
    marginRight: "8px",
    borderRadius: "8px",
    width: "48px",
  },
  rightPart: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
  },
  name: {
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: 600,
  },
  description: {
    fontSize: "15px",
    lineHeight: "24px",
    color: "#676370",
  },
}));

interface DescriptionProps {}

const Highlight: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <img
          src={makeBlockie("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}
          className={classes.addressImg}
          alt="A"
        />

        <div className={classes.rightPart}>
          <div className={classes.name}>Road</div>
          <div className={classes.description}>1 parcel away</div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
