import React, { useState, useEffect } from "react";
import { BigNumber } from "ethers";

import LandMap from "../../components/Admin/LandMap";
import TobTab from "../../components/TopTab/TopTab";
import { useStyles } from "./AuctionStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import LandAccordion from "./LandAccordion/LandAccordion";
import CountDown from "../../components/CountDown/CountDown";
import StageMarket from "../../components/StageMarket/StageMarket";
import { headerData, transactionData } from "./AuctionData";
import ActionButton from "../../components/Base/ActionButton";
import { useAppSelector } from "../../store/hooks";
import { selectLoginAddress } from "../../store/auth/selectors";
import { selectparcels } from "../../store/selectedparcels/selectors";

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

declare var window: any;
var signer: any,
  uccContract: any,
  spaceAuctionContract: any,
  spaceRegistryContract: any;

// define consts
var uccPricePerSpace: number;
var spacesLimitPerBid: number;

const Auction = () => {
  const classes = useStyles();

  const [width, setWidth] = useState(0);
  const [uccAllowance, setUccAllowance] = useState(BigNumber.from(0)); // This shows current allowed ucc allowance
  const [uccApprovalAmount, setUccApprovalAmount] = useState(BigNumber.from(0)); // This shows current allowed ucc allowance
  const [uccBalance, setUccBalance] = useState(BigNumber.from(0));
  const [bid, setBid] = useState({ xs: [], ys: [], beneficiary: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuctionAuthorized, setIsAuctionAuthorized] = useState(false);

  const loginAddress = useAppSelector(selectLoginAddress);
  const bidParcels = useAppSelector(selectparcels);
  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(945);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(820);
    } else if (window.innerWidth <= 992 && window.innerWidth > 770) {
      setWidth(600);
    } else if (window.innerWidth <= 770 && window.innerWidth > 500) {
      setWidth(420);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
    }
  };

  // approve UCC token to buy Space token
  const handleApproveUCCToken = async () => {
    console.log(uccApprovalAmount + "in handleApprovedUCCToken");
    // generate approve tx and wait until tx finihes
    let uccApproveTx = await uccContract.approve(
      SpaceAuctionAddress,
      uccApprovalAmount
    );

    await uccApproveTx.wait();
  };

  const handleBidSpace = async () => {
    let ttlSpacesPrice = BigNumber.from(bidParcels.length * uccPricePerSpace);

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
        if (uccBalance.gt(ttlSpacesPrice)) {
          // check able to approve
          window.alert(
            "Not enough allowance for ucc token. Will you approve the auction contract to use some of your UCC for your bid?"
          );
          setUccApprovalAmount(ttlSpacesPrice);
          await handleApproveUCCToken();
        } else {
          window.alert(
            "You don't have enought UCC token to bid for space tokens"
          );
        }
      }
    }

    // call bid function to get space token by offering ucc token
    let bidTx = await spaceAuctionContract.bid(bid.xs, bid.ys, loginAddress);

    await bidTx.wait();
    window.alert("Bid was successful");

    await initUccBalAndAllowance();
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
  }, []);

  useEffect(() => {
    convertToBidData();
  }, [bidParcels.length]);

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
    isProxyOwner();
    // if proxy owner then authorize auction contract as authorizedDeployer if not yet
    initializeAsProxyOwner();
    // current znx coin balance of login address
    // let coinBal = await signer.getBalance();

    await initUccBalAndAllowance();

    uccPricePerSpace = parseInt(
      (await spaceAuctionContract.getCurrentPrice()).toString()
    );
    spacesLimitPerBid = parseInt(
      (await spaceAuctionContract.spacesLimitPerBid()).toString()
    );
  };

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
  };

  const initializeAsProxyOwner = async () => {
    addSpaceAuctionContractAsAuthorized();
  };

  const addSpaceAuctionContractAsAuthorized = async () => {
    let authorizedDeployStatus = await spaceRegistryContract.authorizedDeploy(
      SpaceAuctionAddress
    );

    if (!authorizedDeployStatus) {
      let authorizeSpaceAuctionTx = await spaceRegistryContract.authorizeDeploy(
        SpaceAuctionAddress
      );

      await authorizeSpaceAuctionTx.wait();

      setIsAuctionAuthorized(true);
    } else {
      setIsAuctionAuthorized(true);
    }
  };

  const isProxyOwner = async () => {
    let proxyOwner = await spaceRegistryContract.proxyOwner();
    let isAdmin = proxyOwner === loginAddress;
    setIsAdmin(isAdmin);

    return isAdmin;
  };

  return (
    <>
      <TobTab />
      <div className={classes.auctionInfo}>
        <span className={classes.title}>Left Time</span>
        <div className={classes.leftTime}>
          <CountDown />
        </div>
        <span className={classes.title}>Staging</span>
        <div>
          <StageMarket columns={headerData} rows={transactionData} />
        </div>
      </div>
      <div className={classes.root}>
        <BackButton className={classes.backBtnPosition} />
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <div className={classes.actionButton}>
            <ActionButton
              color="red"
              className={classes.approveBtn}
              onClick={handleBidSpace}
            >
              Bid
            </ActionButton>

            <ActionButton color="dark">clear</ActionButton>
            {isAdmin ? (
              isAuctionAuthorized ? (
                <ActionButton
                  color="dark"
                  onClick={addSpaceAuctionContractAsAuthorized}
                >
                  Auction Authorized
                </ActionButton>
              ) : (
                <ActionButton color="dark">Authorize Auction</ActionButton>
              )
            ) : (
              <></>
            )}
          </div>
          <LandAccordion />
        </div>
      </div>
    </>
  );
};

export default Auction;
