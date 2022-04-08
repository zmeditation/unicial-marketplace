import { useAppDispatch } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles, StyledInput } from "./SettingPriceModalStyle";
import clsx from "clsx";
import { useState, useEffect } from "react";
import PaytypeBtn from "../Base/PaytypeBtn";
import YellowBtn from "./../../components/Base/YellowBtn";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import whiteTokenIcon from "./../../assets/svg/whiteToken.png";
import InfoIcon from "../../assets/svg/Info.png";
import makeBlockie from "ethereum-blockies-base64";

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function CreateSceneModal({ show, onClose }: Props) {
  const address = "0x8734CB972d36a740Cc983d5515e160C373A4a016";
  const emptyaddress = "0x00000000000000000000000000000";
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showStatus, setShowStatus] = useState(show);
  const [price, setPrice] = useState("");
  const [nonefreeStatus, setNonefreeStatus] = useState(true);
  const [freeStatus, setFreeStatus] = useState(false);

  const handleNonefreeBtn = () => {
    setNonefreeStatus(!nonefreeStatus);
    setFreeStatus(false);
  };
  const handleFreeBtn = () => {
    setFreeStatus(!freeStatus);
    setNonefreeStatus(false);
  };
  const handlePrice = (e: any) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    setShowStatus(show);
  }, [show]);
  let status = 1;
  console.log("nonefreestatus:", nonefreeStatus, "freestatus", freeStatus);
  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        {status === 1 ? (
          <div className={classes.modalRoot}>
            <div className={classes.closeIcon} onClick={onClose}>
              <i className="fas fa-times"></i>
            </div>
            <div className={classes.title}>
              Set price and address for "OrionNFT"
            </div>
            <div className={classes.mainContainer}>
              <div className={classes.payTypeContainer}>
                {nonefreeStatus === true ? (
                  <PaytypeBtn
                    letter="I am the beneficiary"
                    actived
                    className={classes.nonefreeBtn}
                    onClick={() => {
                      handleNonefreeBtn();
                    }}
                  />
                ) : (
                  <PaytypeBtn
                    letter="I am the beneficiary"
                    className={classes.nonefreeBtn}
                    onClick={handleNonefreeBtn}
                  />
                )}
                {freeStatus === true ? (
                  <PaytypeBtn
                    letter="Make it free"
                    actived
                    onClick={handleFreeBtn}
                  />
                ) : (
                  <PaytypeBtn letter="Make it free" onClick={handleFreeBtn} />
                )}
              </div>
              {nonefreeStatus === false && freeStatus === false ? (
                <>
                  <div className={classes.titleLetter}>Price</div>

                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder="100"
                      //   onChange={(e) => handleChange(e)}
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={whiteTokenIcon} alt="settingIcon" />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    Beneficiary{" "}
                    <img src={InfoIcon} className={classes.infoIcon} />
                  </div>
                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder="0x"
                      value=""
                      //   onChange={(e) => handleChange(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <img
                            src={makeBlockie(address)}
                            className={classes.addressImg}
                            alt="address"
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </>
              ) : nonefreeStatus === true && freeStatus === false ? (
                <>
                  <div className={classes.titleLetter}>Price</div>

                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder="100"
                      //   onChange={(e) => handleChange(e)}
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={whiteTokenIcon} alt="settingIcon" />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    Beneficiary{" "}
                    <img src={InfoIcon} className={classes.infoIcon} />
                  </div>
                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder="0x"
                      value={address}
                      //   onChange={(e) => handleChange(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <img
                            src={makeBlockie(address)}
                            className={classes.addressImg}
                            alt="address"
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </>
              ) : (
                <>
                  <div className={classes.titleLetter}>Price</div>

                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder="0"
                      disabled
                      startAdornment={
                        <InputAdornment position="start">
                          <img src={whiteTokenIcon} alt="settingIcon" />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    Beneficiary{" "}
                    <img src={InfoIcon} className={classes.infoIcon} />
                  </div>
                  <FormControl className={classes.formContainer}>
                    <StyledInput
                      placeholder={emptyaddress}
                      disabled
                      value=""
                      className={classes.disablecursor}
                      endAdornment={
                        <InputAdornment position="end">
                          <img
                            src={makeBlockie(address)}
                            className={classes.addressImg}
                            alt="address"
                          />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </>
              )}

              <YellowBtn letter="Submit" className={classes.subBtn} />
            </div>
          </div>
        ) : (
          <>
            <div></div>
          </>
        )}
      </div>
    </>
  );
}
