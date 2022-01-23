/** @format */

import { useNavigate } from "react-router";
import NeedSignIn from "../../components/NoSign/NeedSignIn";
import ActionButton from "../../components/Base/ActionButton";
import TokenImg from "../../assets/img/1.png";
import settingicon from "../../assets/svg/bidpage_settingicon.svg";
import raiseicon from "../../assets/svg/bid_raiseicon.svg";

import { useStyles } from "./BuyStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";

const Buy = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  var isSignIn = 1;

  return (
    <div className={classes.root}>
      {isSignIn === 1 ? (
        <div>
          <BackButton />
          <div className={classes.bidCard}>
            <div className={classes.leftCard}>
              <div className={classes.imgContent}>
                <img
                  src={TokenImg}
                  className={classes.tokenImg}
                  alt='token'></img>
              </div>
            </div>

            <div className={classes.rightCard}>
              <div className={classes.title}>{t("Buy Estate")}</div>
              <div className={classes.subtitle}>
                {t("You don't have enough MANA to buy Hanzo-Gate1 for")}
                <img src={settingicon} className={classes.symbol} />
                <b> 1,000,000.</b>
              </div>

              {/* buttons */}
              <div className={classes.buttons}>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={() => navigate(-1)}>
                  {t("CANCEL")}
                </ActionButton>
                <ActionButton
                  disabled
                  color='light'
                  className={classes.bidchange}>
                  {t("BUY")}
                  <img src={raiseicon} />
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NeedSignIn />
      )}
    </div>
  );
};

export default Buy;
