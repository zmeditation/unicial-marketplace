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
var loginAddress: string;
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
  const [isApprovable, setIsApprovable] = useState(true);
  const [isBiddable, setIsBiddable] = useState(false);
  const [uccAllowance, setUccAllowance] = useState(BigNumber.from(0)); // This shows current allowed ucc allowance
  const [uccApprovalAmount, setUccApprovalAmount] = useState(BigNumber.from(0)); // This shows current allowed ucc allowance
  const [uccBalance, setUccBalance] = useState(BigNumber.from(0));
  const [bid, setBid] = useState({ xs: [], ys: [], beneficiary: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuctionAuthorized, setIsAuctionAuthorized] = useState(false);

  const loginAddress = useAppSelector(selectLoginAddress);
  console.log("loginAddress", loginAddress);
  const bidParcels = useAppSelector(selectparcels);
  console.log("parcels", bidParcels);
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
    console.log("======== uccApprovalAmount in handleApproveUCCToken ========");
    console.log(uccApprovalAmount);
    console.log("======== uccApprovalAmount in handleApproveUCCToken ========");

    // generate approve tx and wait until tx finihes
    let uccApproveTx = await uccContract.approve(
      SpaceAuctionAddress,
      uccApprovalAmount
    );

    await uccApproveTx.wait();
    setIsBiddable(true);

    let allowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    console.log("uccAllowance after approve", allowance);

    let uccTokenAddressInSpaceAuction = await spaceAuctionContract.uccToken();
    console.log("uccTokenAddressInSpaceAuction", uccTokenAddressInSpaceAuction);
  };

  const handleBidSpace = async () => {
    console.log("bid.xs", bid.xs);
    console.log("bid.ys", bid.ys);
    console.log("======== UCC allowance in handleBidSpace ========");
    console.log(uccAllowance);
    console.log("======== UCC allowance in handleBidSpace ========");

    let ttlSpacesPrice = BigNumber.from(bidParcels.length * uccPricePerSpace);
    console.log("Bid parcels changing");
    console.log("uccBalance", uccBalance);
    console.log(uccBalance);
    console.log("uccAllowance", uccAllowance);
    console.log(uccAllowance);
    console.log("uccPricePerSpace", uccPricePerSpace);
    console.log(uccPricePerSpace);
    console.log("ttlSpacesPrice", ttlSpacesPrice);
    console.log(ttlSpacesPrice);
    console.log("uccBalance > ttlSpacesPrice", uccBalance.gt(ttlSpacesPrice));

    if (bidParcels.length === 0) {
      console.log("case 0");
      window.alert("No space selected for bid. Please select first.");
    } else {
      // check able to bid first for else case
      if (bidParcels.length > spacesLimitPerBid) {
        console.log("case 1-1");
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
    console.log(data);
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
    let coinBal = await signer.getBalance();
    console.log("coin balance before approve", coinBal);

    await initUccBalAndAllowance();

    uccPricePerSpace = parseInt(
      (await spaceAuctionContract.getCurrentPrice()).toString()
    );
    console.log("uccPricePerSpace in initializa", uccPricePerSpace);
    spacesLimitPerBid = parseInt(
      (await spaceAuctionContract.spacesLimitPerBid()).toString()
    );
    console.log("uccPricePerSpace: ", uccPricePerSpace);
    console.log("spacesLimitPerBid: ", spacesLimitPerBid);
  };

  const initUccBalAndAllowance = async () => {
    // current ucc balance of login address
    let uccBal = await uccContract.balanceOf(loginAddress);
    setUccBalance(uccBal);
    console.log("uccBalance before approve", uccBal);

    // current ucc allowance of login address for auction contract
    let allowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    setUccAllowance(allowance);
    console.log("uccAllowance before approve", uccAllowance);
  };

  const initializeAsProxyOwner = async () => {
    addSpaceAuctionContractAsAuthorized();
  };

  const addSpaceAuctionContractAsAuthorized = async () => {
    console.log("SpaceAuctionAddress: ", SpaceAuctionAddress);
    let authorizedDeployStatus = await spaceRegistryContract.authorizedDeploy(
      SpaceAuctionAddress
    );

    console.log(
      "authorizedDeployStatus for ",
      SpaceAuctionAddress,
      "is",
      authorizedDeployStatus
    );

    if (!authorizedDeployStatus) {
      console.log("To be Authorized Address: ", SpaceAuctionAddress);

      let authorizeSpaceAuctionTx = await spaceRegistryContract.authorizeDeploy(
        SpaceAuctionAddress
      );

      console.log("authorizeSpaceAuctionTx");
      console.log(authorizeSpaceAuctionTx);
      await authorizeSpaceAuctionTx.wait();

      setIsAuctionAuthorized(true);
      console.log(
        "SpaceAuctionAddress" +
          SpaceAuctionAddress +
          "is successfully authorized as Space token deployer"
      );
    } else {
      setIsAuctionAuthorized(true);
      console.log(
        "SpaceAuctionAddress " +
          SpaceAuctionAddress +
          " is already authorized as Space token deployer"
      );
    }
  };

  const isProxyOwner = async () => {
    let proxyOwner = await spaceRegistryContract.proxyOwner();
    let currentContract = await spaceRegistryContract.currentContract();

    console.log("proxyOwner", proxyOwner);
    console.log("currentContract", currentContract);

    let isAdmin = proxyOwner === loginAddress;
    console.log(
      "Current login address " + loginAddress + " is proxy owner? ",
      isAdmin
    );
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
