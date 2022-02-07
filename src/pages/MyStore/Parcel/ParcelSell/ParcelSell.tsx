/** @format */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { BigNumber, ethers } from "ethers";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";

import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./ParcelSellStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import settingicon from "../../../../assets/svg/bidpage_settingicon.svg";
import calendar_icon from "../../../../assets/svg/calendar_icon.svg";
import { Grid } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";

import {
  MarketplaceAddress,
  MarketplaceAbi,
} from "../../../../config/contracts/MarketPlaceContract";

import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../../../config/contracts/SpaceRegistryContract";

declare var window: any;
var signer: any, marketplaceContract: any, spaceRegistryContract: any;

const ParcelSell = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [price, setPrice] = useState(0);

  const { contractaddress, tokensid } = useParams();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  var isSignIn = 1;

  const handleChange = (e: any) => {
    setPrice(e.target.value);
  };

  // occur a transaction to create sale order on marketplace for this parcel
  const handleCreateOrder = async () => {
    console.log("contractaddress: ", contractaddress);
    console.log("tokensid: ", tokensid);

    signer = generateSigner(window.ethereum);
    marketplaceContract = generateContractInstance(
      MarketplaceAddress,
      MarketplaceAbi,
      signer
    );
    spaceRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );

    // check if this token is approved for marketplace contract
    let isApproved = false;
    isApproved = await spaceRegistryContract.isAuthorized(
      MarketplaceAddress,
      BigNumber.from(tokensid)
    );
    if (!isApproved) {
      // approve marketplace contract to transfer this asset

      window.alert(
        "You have to first approve the marketplace contract to operate your asset."
      );
      let approveMarketTx = await spaceRegistryContract.approve(
        MarketplaceAddress,
        tokensid
      );
      await approveMarketTx.wait();

      window.alert(
        "Successfully approved. You have to confirm order creation transaction to finally publich your order."
      );
    }

    let createOrderTx = await marketplaceContract.createOrder(
      contractaddress,
      BigNumber.from(tokensid),
      BigNumber.from(price * Math.pow(10, 18)), // price in wei
      BigNumber.from(
        selectedDate !== null &&
          Math.floor(selectedDate.getTime() / 1000) * Math.pow(10, 18)
      ) // expireAt to UTC timestamp
    );

    await createOrderTx.wait();
    window.alert("Sales order is successfully published.");
  };

  const handleCancelOrder = async () => {
    // signer = generateSigner(window.ethereum);
    // marketplaceContract = generateContractInstance(
    //   MarketplaceAddress,
    //   MarketplaceAbi,
    //   signer
    // );
    // spaceRegistryContract = generateContractInstance(
    //   SpaceProxyAddress,
    //   SpaceRegistryAbi,
    //   signer
    // );
    // // check if this token is approved for marketplace contract
    // let cancelOrderTx = await marketplaceContract.safeTransferFrom(
    //   contractaddress,
    //   BigNumber.from(tokensid),
    //   BigNumber.from(price * Math.pow(10, 18)), // price in wei
    //   BigNumber.from(
    //     selectedDate !== null &&
    //       Math.floor(selectedDate.getTime() / 1000) * Math.pow(10, 18)
    //   ) // expireAt to UTC timestamp
    // );
    // await cancelOrderTx.wait();
  };

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
              <div className={classes.title}>{t("List for sale")}</div>
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
                <p>&nbsp;</p>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                <ActionButton
                  color='light'
                  className={classes.bidchange}
                  onClick={handleCreateOrder}>
                  {t("List Sell")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={handleCancelOrder}>
                  {t("Cancel Orders")}
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

export default ParcelSell;
