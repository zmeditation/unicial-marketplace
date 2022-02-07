/** @format */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import { BigNumber, ethers } from "ethers";

import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./ParcelTransferStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import raiseicon from "../../../../assets/svg/bid_raiseicon.svg";
import { Grid } from "@material-ui/core";

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { selectLoginAddress } from "../../../../store/auth/selectors";
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
import { useAppSelector } from "../../../../store/hooks";

declare var window: any;
var signer: any, marketplaceContract: any, spaceRegistryContract: any;

const ParcelTransfer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [transferAddress, setTransferAddress] = useState("");
  const [isCorrectAddress, setIsCorrectAddress] = useState(false);
  const { contractaddress, tokensid } = useParams();
  const customerAddress = useAppSelector(selectLoginAddress);

  const handleTransferOrder = async () => {
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

    let transferTx = await spaceRegistryContract.safeTransferFrom(
      customerAddress,
      transferAddress,
      BigNumber.from(tokensid)
    );
    await transferTx.wait();
    window.alert("Transfer order is successfully published.");
  };

  var isSignIn = 1;

  const handleChange = (e: any) => {
    setTransferAddress(e.target.value);
  };
  useEffect(() => {
    console.log(transferAddress);
  }, [transferAddress]);
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
              <div className={classes.title}>{t("Transfer Parcels")}</div>
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
                        <StyledInput
                          placeholder='0x'
                          onChange={(e) => handleChange(e)}
                        />
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
                    color='light'
                    className={classes.bidchange}
                    onClick={handleTransferOrder}>
                    {t("Transfer")} &nbsp;
                    <img src={raiseicon} alt='raiseicon' />
                  </ActionButton>
                ) : (
                  <ActionButton
                    disabled
                    color='light'
                    className={classes.bidchange}>
                    {t("Transfer")} &nbsp;
                    <img src={raiseicon} alt='raiseicon' />
                  </ActionButton>
                )}
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

export default ParcelTransfer;
