import FormControl from "@material-ui/core/FormControl";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./SettingManagerStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import raiseicon from "../../../../assets/svg/bid_raiseicon.svg";
import { Grid } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../../store/hooks";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { BigNumber, ethers } from "ethers";

const SettingManager = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [managerAddress, setManagerAddress] = useState("");
  const dispatch = useAppDispatch();
  const { estateid } = useParams();

  var isSignIn = 1;
  const [isCorrectAddress, setIsCorrectAddress] = useState(false);
  const isAddress = (address: string) => {
    try {
      ethers.utils.getAddress(address);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleChange = (e: any) => {
    setManagerAddress(e.target.value);
  };

  useEffect(() => {
    let result = isAddress(managerAddress);
    result === true ? setIsCorrectAddress(true) : setIsCorrectAddress(false);
  }, [managerAddress]);

  const handleTransferOrder = async () => {};

  return (
    <div className={classes.root}>
      {isSignIn === 1 ? (
        <div className={classes.container_root}>
          <BackButton className={classes.backButton} />
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
              <div className={classes.title}>{t("Update Manager")}</div>
              <div className={classes.subtitle}>
                {t("Your are not the owner of Roads.")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={12} sm={12} xs={12} item>
                      <div className={classes.subheader_label}>
                        {t("RECEPIENT ADDRESS")}
                      </div>
                      <FormControl>
                        <StyledInput placeholder="0x" onChange={handleChange} />
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
                <p>&nbsp;</p>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                {isCorrectAddress === true ? (
                  <ActionButton
                    color="light"
                    className={classes.bidchange}
                    onClick={handleTransferOrder}
                  >
                    {t("Transfer")} &nbsp;
                    <img src={raiseicon} alt="raiseicon" />
                  </ActionButton>
                ) : (
                  <ActionButton
                    disabled
                    color="light"
                    className={classes.bidchange}
                  >
                    {t("Transfer")} &nbsp;
                    <img src={raiseicon} alt="raiseicon" />
                  </ActionButton>
                )}
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
          {/* <div className={classes.updateManagerRoot}></div> */}
        </div>
      ) : (
        <NeedSignIn />
      )}
    </div>
  );
};

export default SettingManager;
