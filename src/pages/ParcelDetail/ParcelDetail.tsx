/** @format */

import { useNavigate } from "react-router";
import NeedSignIn from "../NeedSignIn";
import ActionButton from "../../components/Base/ActionButton";
import TokenImg from "../../assets/img/1.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useParams } from "react-router-dom";
import { useStyles } from "./ParcelDetailStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";

const ParcelDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { contractaddress, tokensid } = useParams();

  return (
    <div className={classes.root}>
      <div className={classes.root_container}>
        <BackButton className={classes.backBtn} />
        <div className={classes.bidCard}>
          <div className={classes.leftCard}>
            <div className={classes.imgContent}>
              <img
                src={TokenImg}
                className={classes.tokenImg}
                alt="token"
              ></img>
            </div>
          </div>

          <div className={classes.rightCard}>
            <div className={classes.title}>{t("Parcel detail")}</div>
            <div className={classes.buttons}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }
              >
                {t("Sell")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/transfer`
                  )
                }
              >
                {t("Transfer")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
              <ActionButton
                color="dark"
                className={classes.cancelchange}
                onClick={() => navigate(-1)}
              >
                {t("Cancel")}
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
