import React, { useState, useEffect } from "react";

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

// import contracts information
import {
  UccContractAbi,
  UccContractAddress,
} from "../../config/contracts/UnicialCashToken";
import {
  SpaceAuctionAddress,
  SpaceAuctionAbi,
} from "../../config/contracts/SpaceAuctionContract";

// import utility functions
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";

declare var window: any;
var loginAddress: string;

const Auction = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(0);
  const loginAddress = useAppSelector(selectLoginAddress);
  console.log("loginAddress", loginAddress);
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
    console.log(window.ethereum);
    console.log("metamask address: ", window.ethereum.selectedAddress);
    console.log("login address: ", loginAddress);
    const metamaskAddress = window.ethereum.selectedAddress;
    if (metamaskAddress && metamaskAddress === loginAddress) {
    } else {
      //should include else logic; redirect to signin page
    }
    let signer = generateSigner(window.ethereum);
    let uccContract = generateContractInstance(
      UccContractAddress,
      UccContractAbi,
      signer
    );

    let spaceAuctionContract = generateContractInstance(
      SpaceAuctionAddress,
      SpaceAuctionAbi,
      signer
    );

    let uccPricePerSpace = parseInt(
      (await spaceAuctionContract.getCurrentPrice()).toString()
    );
    let spacesLimitPerBid = parseInt(
      (await spaceAuctionContract.spacesLimitPerBid()).toString()
    );
    console.log("uccPricePerSpace: ", uccPricePerSpace);
    console.log("spacesLimitPerBid: ", spacesLimitPerBid);

    let uccAllowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    console.log("uccAllowance before approve", uccAllowance);

    // generate approve tx and wait until tx finishes
    let uccApproveTx = await uccContract.approve(
      SpaceAuctionAddress,
      uccPricePerSpace * spacesLimitPerBid
    );

    await uccApproveTx.wait();

    uccAllowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    console.log("uccAllowance after approve", uccAllowance);

    let uccTokenAddressInSpaceAuction = await spaceAuctionContract.uccToken();
    console.log("uccTokenAddressInSpaceAuction", uccTokenAddressInSpaceAuction);
    // call bid function to get space token by offering ucc token
    let bidTx = await spaceAuctionContract.bid(
      [10, 11, 21, 31],
      [10, 20, 30, 40],
      loginAddress
    );

    await bidTx.wait();
    console.log("uccAllowance after approve", uccAllowance);
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

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
              onClick={handleApproveUCCToken}
            >
              Approve
            </ActionButton>
            <ActionButton color="dark">clear</ActionButton>
          </div>
          <LandAccordion />
        </div>
      </div>
    </>
  );
};

export default Auction;
