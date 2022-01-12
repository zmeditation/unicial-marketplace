import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import makeBlockie from "ethereum-blockies-base64";

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
    display: "flex",
  },
  name: {
    marginLeft: "10px",
    fontSize: "21px",
    lineHeight: "30px",
    letterSpacing: ".3px",
    fontWeight: 600,
    alignSelf: "center",
  },
  addressImg: {
    marginRight: "6px",
    borderRadius: "6px",
    width: "42px",
    cursor: "pointer",
  },
}));

interface DescriptionProps {}

const Owner: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>Owner</div>
      <div className={classes.descript}>
        <img
          src={makeBlockie("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}
          className={classes.addressImg}
          alt="A"
        />
        <div className={classes.name}>0x4eac</div>
      </div>
    </div>
  );
};

export default Owner;
