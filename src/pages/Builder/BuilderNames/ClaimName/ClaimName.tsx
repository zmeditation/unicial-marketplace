import { useNavigate } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import ActionButton from "../../../../components/Base/ActionButton";
import nameBackground from "../../../../assets/svg/claim_namebackground.svg";
import { useStyles, StyledInput } from "./ClaimNameStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../../store/hooks";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import clsx from "clsx";
import { InputAdornment } from "@material-ui/core";
import OnSaleSwitch from "../../../../components/Base/OnSaleSwitch";

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
                alt='token'></img>
            </div>
          </div>
          <div className={classes.rightCard}>
            <div className={classes.title}>{t("Claim a unique Name")}</div>
            <div className={classes.subtitle}>
              {t(
                "Unique names can be assigned to your avatar for use as an alias, or ther can be assigned to parcels"
              )}
              .
            </div>
            <br />
            <div className={classes.subtitle}>
              {t(
                "Assigning a name to a parcel or estate allows you to create a unique URL , like https://name.dcl.eth, making it easy to send people to your LAND. When someone follows your new URL, they will redirected to your LAND in"
              )}
              <span className={classes.importantLetter}>
                {t("Decentraland")}!
              </span>
            </div>
            <br />
            <div className={clsx(classes.subtitle, classes.alignCenter)}>
              {t(
                "Names are only available in Ethereu, and can only be claimed with Ethereum UCC"
              )}
              <img
                src={normalshapeSvg}
                className={classes.normalshape}
                alt='normalShape'
              />
            </div>
            <div className={classes.form_field}>
              <div className={classes.price_container}>
                {/* // */}
                <div className={classes.subheader_label}>{t("NAME")}</div>
                <FormControl className={classes.widthFull}>
                  <StyledInput
                    placeholder='Your name goes here'
                    onChange={() => {}}
                    endAdornment={
                      <InputAdornment
                        position='start'
                        className={classes.inputAdor}>
                        1 / 15
                      </InputAdornment>
                    }
                  />
                </FormControl>
                {/* // */}
                <div className={classes.subheader_label}>
                  {t("UCC APPROVED")}
                </div>
                <div className={classes.marginLeft}>
                  <OnSaleSwitch letter='' />
                </div>
                <div className={classes.subtitle}>
                  {t("Authorize the")} &nbsp;
                  <span className={classes.importantLetter}>
                    {t("DCLController")}
                  </span>
                  &nbsp; {t("contract to operate UCC on your behalf")}
                </div>
              </div>
              <p>&nbsp;</p>
            </div>
            <div className={classes.buttons}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() => {}}>
                {t("CLAIM")}
                <img
                  src={normalshapeSvg}
                  className={classes.normalshape}
                  alt='normalShape'
                />
                100
              </ActionButton>
              <ActionButton
                color='dark'
                className={classes.cancelchange}
                onClick={() => navigate("/account/estate/create")}>
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
