/** @format */

import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useStyles } from "./BalanceStyle";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface BalanceProps {
  className?: any;
  type: string;
}

export const Balance = ({ className, type }: BalanceProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <div className={classes.balanceRoot}>
      {type === "uccbalance" && (
        <>
          <div className={classes.balanceDotUcc}></div>
          <div className={classes.balanceDescriptionUcc}>
            {t("My UCC Balance")}:
          </div>
          <div className={classes.balancePercentUcc}>100</div>
        </>
      )}
      {type === "currentspace" && (
        <>
          <div className={classes.balanceDotCurrent}></div>
          <div className={classes.balanceDescriptionCurrent}>
            {t("Current Space Price in UCC Token")}:
          </div>
          <div className={classes.balancePercentCurrent}>0</div>
        </>
      )}
      {type === "buyable" && (
        <>
          <div className={classes.balanceDotBuyable}></div>
          <div className={classes.balanceDescriptionBuyable}>
            {t("Buyable Maximum Spaces")}:
          </div>
          <div className={classes.balancePercentBuyable}>100</div>
        </>
      )}
    </div>
  );
};