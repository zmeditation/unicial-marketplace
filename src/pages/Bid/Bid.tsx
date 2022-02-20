/** @format */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";

import ActionButton from "../../components/Base/ActionButton";
import TokenImg from "../../assets/img/1.png";
import NeedSignIn from "..//NeedSignIn";
import { useStyles, StyledInput } from "./BidStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import settingicon from "../../assets/svg/bidpage_settingicon.svg";
import calendar_icon from "../../assets/svg/calendar_icon.svg";
import { Grid } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showAlert } from "../../store/alert";
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";
import { BigNumber, ethers } from "ethers";
import { selectLoginAddress } from "../../store/auth/selectors";
import { min, max } from "../../store/bidContractData/selectors";
import {
  BidContractAddress,
  BidContractAbi,
} from "../../config/contracts/BidContract";
import {
  UccContractAbi,
  UccContractAddress,
} from "../../config/contracts/UnicialCashToken";

declare var window: any;
var signer: any, bidContract: any, uccContract: any;

const uccApprovalAmount = BigNumber.from(
  "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
);

const Bid = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { contractaddress, tokensid } = useParams();
  const loginAddress = useAppSelector(selectLoginAddress);
  const maxTime = useAppSelector(max);
  const minTime = useAppSelector(min);
  const [price, setPrice] = useState(0);
  const [timeStamp, setTimeStamp] = useState(0);
  const [bidStatus, setBidStatus] = useState(true);

  const [uccAllowance, setUccAllowance] = useState(BigNumber.from(0));
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  var isSignIn = 1;

  const handleChange = (e: any) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    let time =
      selectedDate !== null && Math.round(selectedDate.getTime() / 1000);
    let currenttime = Math.round(new Date().getTime() / 1000);
    time !== false && setTimeStamp(time - currenttime);
  }, [selectedDate]);

  const handleApprove = async () => {
    signer = generateSigner(window.ethereum);
    uccContract = generateContractInstance(
      UccContractAddress,
      UccContractAbi,
      signer
    );

    let allowance = await uccContract.allowance(
      loginAddress,
      BidContractAddress
    );

    setUccAllowance(allowance);
    if (!allowance.gt(0)) {
      // approve marketplace contract to transfer this asset
      dispatch(
        showAlert({
          message:
            "You have to first approve the marketplace contract to operate your asset.",
          severity: "error",
        })
      );
      let approveMarketTx = await uccContract.approve(
        BidContractAddress,
        uccApprovalAmount
      );
      await approveMarketTx.wait();

      allowance = await uccContract.allowance(loginAddress, BidContractAddress);
      setUccAllowance(allowance);

      dispatch(
        showAlert({
          message:
            "Successfully approved. You have to confirm order creation transaction to finally publich your order.",
          severity: "success",
        })
      );
    }
  };

  const handleCancelApprove = async () => {};

  const handleBid = async () => {
    if (timeStamp < minTime || timeStamp > maxTime) {
      dispatch(
        showAlert({
          message: "Expiration date have to put between 1 minute and 1 year.",
          severity: "error",
        })
      );
      return;
    }
    if (loginAddress.length === 0) {
      dispatch(
        showAlert({
          message: "You have to connect Meta mask wallet.",
          severity: "error",
        })
      );
      navigate("/signin");
      return;
    }

    if (price === 0) {
      dispatch(
        showAlert({
          message: "You have to set price value to sell.",
          severity: "error",
        })
      );
      return;
    }

    signer = generateSigner(window.ethereum);
    bidContract = generateContractInstance(
      BidContractAddress,
      BidContractAbi,
      signer
    );

    let bidOrderTx = await bidContract[
      "placeBid(address,uint256,uint256,uint256)"
    ](
      contractaddress,
      BigNumber.from(tokensid),
      ethers.utils.parseEther(price.toString()), // price in wei
      BigNumber.from(timeStamp),
      { from: loginAddress } // expireAt to UTC timestamp
    );
    await bidOrderTx.wait();

    dispatch(
      showAlert({
        message: "Bid order is successfully published.",
        severity: "success",
      })
    );
  };

  useEffect(() => {
    uccAllowance.gt(0) ? setBidStatus(false) : setBidStatus(true);
  }, [uccAllowance]);

  console.log("uccAllowance : ", uccAllowance);

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
                  alt='token'></img>
              </div>
            </div>
            <div className={classes.rightCard}>
              <div className={classes.title}>{t("Place a Bid")}</div>
              <div className={classes.subtitle}>
                {t("Set a price and expiration date for your bid on")}{" "}
                <span>{t("Genesis Plaza")}</span>.
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>
                        {t("PRICE")}
                      </div>
                      <FormControl>
                        <StyledInput
                          placeholder='0'
                          onChange={(e) => handleChange(e)}
                          startAdornment={
                            <InputAdornment position='start'>
                              <img src={settingicon} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>
                        {t("EXPIRATION DATE")}
                      </div>
                      <FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            className={classes.datePicker}
                            format='MM/dd/yyyy'
                            margin='normal'
                            id='date-picker-dialog'
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                            keyboardIcon={<img src={calendar_icon} />}
                          />
                        </MuiPickersUtilsProvider>
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                <ActionButton
                  color='light'
                  className={classes.approve}
                  onClick={bidStatus ? handleApprove : handleCancelApprove}>
                  {bidStatus ? t("Approve") : t("Cancel Approve")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
                <ActionButton
                  color='light'
                  className={classes.bidchange}
                  disabled={bidStatus}
                  onClick={handleBid}>
                  {t("Bid")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={() => navigate(-1)}>
                  {t("Cancel")}
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
export default Bid;
