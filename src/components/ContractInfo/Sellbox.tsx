import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ActionButton from "../Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useNavigate } from "react-router";
import cloccheckSvg from "../../assets/svg/clockcheck.svg";
import { useTranslation } from "react-i18next";
import { addCommas } from "../../common/utils";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    margin: "5px 0px",
    backgroundColor: "#282E4E",
    borderRadius: "15px",
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
  priceValueContainer: {
    marginTop: "5px",
    fontSize: "20px",
    marginBottom: "20px",
  },
  symbol: {
    fontSize: "normal",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  bidBtn: {
    marginTop: "15px",
  },
  expireContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "15px",
  },
  expireDescription: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
    color: "#96A1DB",
    opacity: "50%",
  },
  clockcheck: {
    marginRight: "12px",
  },
  callmadeicon: {
    width: "20px",
    height: "20px",
  },
}));

interface SellboxProps {
  price?: string;
}

const Sellbox = ({ price }: SellboxProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {price !== undefined && (
        <>
          <div className={classes.title}>{t("Price")}</div>
          <div className={classes.priceValueContainer}>
            <i className={classes.symbol}>⏣</i>
            {addCommas(price)}
          </div>
        </>
      )}
      <div className={classes.title}>{t("Network")}</div>
      <div className={classes.subtitle}>{t("Zilionixx")}</div>
      <ActionButton color="light" onClick={() => navigate("Sell")}>
        {t("Sell")}
        <CallMadeIcon className={classes.callmadeicon} />
      </ActionButton>
      <div className={classes.expireContainer}>
        <img src={cloccheckSvg} className={classes.clockcheck} />
        <div className={classes.expireDescription}>
          {t("Expires in 12 months")}
        </div>
      </div>
    </div>
  );
};

export default Sellbox;
