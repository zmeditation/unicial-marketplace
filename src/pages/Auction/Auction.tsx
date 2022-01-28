/** @format */

import React, { useState, useEffect } from "react";
import { BigNumber } from "ethers";

import LandMap from "../../components/Admin/LandMap";
import TobTab from "../../components/TopTab/TopTab";
import { useStyles } from "./AuctionStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import LandAccordion from "./LandAccordion/LandAccordion";
import CountDown from "../../components/CountDown/CountDown";
import { Balance } from "../../components/Balance/Balance";
import StagingTable from "./StagingTable/StagingTable";
import { headerData, transactionData } from "./AuctionData";
import ActionButton from "../../components/Base/ActionButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectLoginAddress } from "../../store/auth/selectors";
import { selectparcels } from "../../store/selectedparcels/selectors";
import { alertMessage, alertSeverity } from "../../store/alert/selectors";
import { showAlert } from "../../store/alert";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
// import contracts information
import {
  UccContractAbi,
  UccContractAddress,
} from "../../config/contracts/UnicialCashToken";
import {
  SpaceAuctionAddress,
  SpaceAuctionAbi,
} from "../../config/contracts/SpaceAuctionContract";
import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../config/contracts/SpaceRegistryContract";

// import utility functions
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";
import { getparcels } from "../../store/selectedparcels";
import { Typography } from "@material-ui/core";

declare var window: any;
var signer: any,
  uccContract: any,
  spaceAuctionContract: any,
  spaceRegistryContract: any;

// define consts
var spacesLimitPerBid: number;
const uccApprovalAmount = BigNumber.from(
  "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
);
const Auction = () => {
  const classes = useStyles();

  const [width, setWidth] = useState(0);
  const [uccPricePerSpace, setUccPricePerSpace] = useState(0);
  const [uccAllowance, setUccAllowance] = useState(BigNumber.from(0)); // This shows current appoved ucc allowance
  const [ttlSpacesPrice, setTtlSpacePrice] = useState(BigNumber.from(0)); // This shows current total space price
  const [uccBalance, setUccBalance] = useState(BigNumber.from(0));
  const [bid, setBid] = useState({ xs: [], ys: [], beneficiary: "" });
  const [isBiddable, setIsBiddable] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuctionAuthorized, setIsAuctionAuthorized] = useState(false);
  const { t, i18n } = useTranslation();

  const loginAddress = useAppSelector(selectLoginAddress);
  const bidParcels = useAppSelector(selectparcels) || [];
  const dispatch = useAppDispatch();

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(1064);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(933);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(723);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    signer = generateSigner(window.ethereum);
    uccContract = generateContractInstance(
      UccContractAddress,
      UccContractAbi,
      signer
    );

    spaceAuctionContract = generateContractInstance(
      SpaceAuctionAddress,
      SpaceAuctionAbi,
      signer
    );

    initialize();
  }, [loginAddress]);

  useEffect(() => {
    convertToBidData();
    let ttl =
      (uccPricePerSpace &&
        BigNumber.from(bidParcels.length * uccPricePerSpace)) ||
      BigNumber.from(0);
    setTtlSpacePrice(ttl);
  }, [bidParcels.length]);

  useEffect(() => {}, [uccAllowance.toString()]);

  useEffect(() => {}, []);
  // approve UCC token to buy Space token
  const handleApproveUCCToken = async () => {
    // generate approve tx and wait until tx finihes
    let uccApproveTx = await uccContract.approve(
      SpaceAuctionAddress,
      uccApprovalAmount
    );

    await uccApproveTx.wait();

    let allowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    setUccAllowance(allowance);
  };

  const handleCancelApprove = async () => {
    // generate cancel approve tx and wait until tx finihes
    let uccCancelApproveTx = await uccContract.approve(SpaceAuctionAddress, 0);

    await uccCancelApproveTx.wait();

    let allowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    setUccAllowance(allowance);
  };
  const handleClear = () => {
    dispatch(
      showAlert({
        message: "You have successfully registered!",
        severity: "error",
      })
    );
    dispatch(getparcels([]));
  };
  const handleBidSpace = async () => {
    if (bidParcels.length === 0) {
      window.alert("No space selected for bid. Please select first.");
    } else {
      // check able to bid first for else case
      if (bidParcels.length > spacesLimitPerBid) {
        window.alert(
          "Selction is out of limit. Maximum spaces per bid is " +
            spacesLimitPerBid
        );
      } else {
        if (uccBalance.gte(ttlSpacesPrice)) {
          if (uccAllowance.gt(0)) {
            // call bid function to get space token by offering ucc token
            let bidTx = await spaceAuctionContract.bid(
              bid.xs,
              bid.ys,
              loginAddress
            );

            await bidTx.wait();
            window.alert("Bid was successful");

            await initUccBalAndAllowance();
          } else {
            // check able to approve
            window.alert(
              "Auction contract is not allowed to use your UCC token. Click Approve button to approve auction contract."
            );
            // await handleApproveUCCToken();
          }
        } else {
          window.alert(
            "You don't have enought UCC token to bid for space tokens"
          );
        }
      }
    }
  };

  const convertToBidData = () => {
    let xs: any = [],
      ys: any = [];

    bidParcels.forEach((parcel: string) => {
      xs.push(parseInt(parcel.split(",")[0]));
      ys.push(parseInt(parcel.split(",")[1]));
    });

    let data = bid;
    data.xs = xs;
    data.ys = ys;
    setBid(data);
  };

  const initialize = async () => {
    // initialize contracts
    signer = generateSigner(window.ethereum);

    spaceRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );

    spaceAuctionContract = generateContractInstance(
      SpaceAuctionAddress,
      SpaceAuctionAbi,
      signer
    );

    // check if loginAddress is proxy owner
    await proxyOwnerWorker();
    await initUccBalAndAllowance();
    // get ucc price per space and maximum spaces per bid
    let uccPricePerSpaceTmp = parseInt(
      (await spaceAuctionContract.getCurrentPrice()).toString()
    );
    setUccPricePerSpace(uccPricePerSpaceTmp);

    spacesLimitPerBid = parseInt(
      (await spaceAuctionContract.spacesLimitPerBid()).toString()
    );
  };

  // get user's ucc balance and approved balance for auction contract
  const initUccBalAndAllowance = async () => {
    // current ucc balance of login address
    let uccBal = await uccContract.balanceOf(loginAddress);
    setUccBalance(uccBal);
    // current ucc allowance of login address for auction contract
    let allowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    setUccAllowance(allowance);
    if (allowance.gt(BigNumber.from(0)) && uccBal.gt(BigNumber.from(0))) {
      setIsBiddable(true);
    } else {
      setIsBiddable(false);
    }
  };

  const proxyOwnerWorker = async () => {
    let proxyOwner = await spaceRegistryContract.proxyOwner();
    let isAdmin = proxyOwner === loginAddress;
    setIsAdmin(isAdmin);
    if (isAdmin) {
      await authorizeAuctionContract();
    }

    return isAdmin;
  };

  const authorizeAuctionContract = async () => {
    // authorizedDeployStatus show auction contract is authorized in SPACERegistry.sol to assign space tokens
    let authorizedDeployStatus = await spaceRegistryContract.authorizedDeploy(
      SpaceAuctionAddress
    );
    if (!authorizedDeployStatus) {
      // authorize auction contract
      let authorizeSpaceAuctionTx = await spaceRegistryContract.authorizeDeploy(
        SpaceAuctionAddress
      );
      await authorizeSpaceAuctionTx.wait();
      setIsAuctionAuthorized(true);
    } else {
      setIsAuctionAuthorized(true);
    }
  };

  return (
    <>
      <TobTab />
      <div className={classes.root}>
        <div className={classes.auctionInfo}>
          <span className={classes.title}>{t("Left Time")}.</span>
          <CountDown />
        </div>
        <div className={classes.auctionBalance}>
          {/* <Typography>My UCC Balance: {uccBalance.toString()}</Typography>
          <Typography>
            Current Space Price in UCC Token: {uccPricePerSpace}
          </Typography>
          <Typography>
            Buyable Maximum Spaces:{" "}
            {uccPricePerSpace > 0 &&
              uccBalance.div(BigNumber.from(uccPricePerSpace)).toString()}
          </Typography> */}
          <Grid container spacing={2}>
            <Grid item md={4} sm={4} xs={12}>
              <Balance type="uccbalance" />
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Balance type="currentspace" />
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Balance type="buyable" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <div className={classes.actionButtonContainer}>
            <BackButton className={classes.backBtnPosition} />
            <div className={classes.actionButtons}>
              {uccAllowance.gt(BigNumber.from(0)) ? (
                <ActionButton
                  color="light"
                  className={classes.normalBtn}
                  onClick={handleCancelApprove}
                >
                  {t("Cancel Approve")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
              ) : (
                <ActionButton
                  color="light"
                  className={classes.normalBtn}
                  onClick={handleApproveUCCToken}
                >
                  {t("Approve")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
              )}

              {isBiddable ? (
                <ActionButton
                  color="light"
                  className={classes.normalBtn}
                  onClick={handleBidSpace}
                >
                  {t("Bid")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
              ) : (
                <ActionButton
                  color="light"
                  className={classes.normalBtn}
                  disabled
                >
                  {t("Bid")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
              )}

              <ActionButton
                color="dark"
                className={classes.gradientBtn}
                onClick={handleClear}
              >
                {t("clear")}
              </ActionButton>
              {isAdmin ? (
                isAuctionAuthorized ? (
                  <ActionButton
                    color="dark"
                    className={classes.gradientBtn}
                    onClick={authorizeAuctionContract}
                  >
                    {t("Auction Authorized")}
                  </ActionButton>
                ) : (
                  <ActionButton color="dark">
                    {t("Authorize Auction")}
                  </ActionButton>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
          <LandAccordion />
        </div>
      </div>
    </>
  );
};

export default Auction;
