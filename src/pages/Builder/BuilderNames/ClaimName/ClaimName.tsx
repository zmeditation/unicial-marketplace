import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ActionButton from "../../../../components/Base/ActionButton";
import nameBackground from "../../../../assets/svg/claim_namebackground.svg";
import { useStyles, StyledInput } from "./ClaimNameStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";

const ClaimName = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
        <div className={classes.container_root}>
          <BackButton className={classes.backButton} />
          <div className={classes.bidCard}>
            <div className={classes.leftCard}>
              <div className={classes.imgContent}>
                <img
                  src={nameBackground}
                  className={classes.tokenImg}
                  alt="token"
                ></img>
              </div>
            </div>
            <div className={classes.rightCard}>
              <div className={classes.title}>{t("Claim a unique Name")}</div>
              <div className={classes.subtitle}>
                {t("Set a name and description for your estate")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  {/* // */}
                  <div className={classes.subheader_label}>
                    {t("Beneficiary")}
                  </div>
                  <FormControl className={classes.widthFull}>
                    <StyledInput
                      placeholder={t("Beneficiary Address")}
                      onChange={() => {}}
                    />
                  </FormControl>
                  {/* // */}
                  <div className={classes.subheader_label}>{t("Name")}</div>
                  <FormControl className={classes.widthFull}>
                    <StyledInput
                      placeholder={t("Estate name")}
                      onChange={() => {}}
                    />
                  </FormControl>
                </div>
                <p>&nbsp;</p>
              </div>
              <div className={classes.buttons}>
                <ActionButton
                  color="light"
                  className={classes.bidchange}
                  onClick={() => {}}
                >
                  {t("SUBMIT")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
                <ActionButton
                  color="dark"
                  className={classes.cancelchange}
                  onClick={() => navigate("/account/estate/create")}
                >
                  {t("CANCEL")}
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ClaimName;
