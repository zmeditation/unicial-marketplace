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

// import utility functions
import {
  generateContractInstance,
  generateSigner,
} from "../../common/contract";

declare var window: any;
var loginAddress: string;
var signer: any, uccContract: any, spaceAuctionContract: any;

// define consts
var uccPricePerSpace: number;
var spacesLimitPerBid: number;

const Auction = () => {
  const classes = useStyles();

  const [width, setWidth] = useState(0);
  const [isApprovable, setIsApprovable] = useState(true);
  const [isBiddable, setIsBiddable] = useState(false);
  const [uccAllowance, setUccAllowance] = useState(0);
  const [uccBalance, setUccBalance] = useState(0);
  const [uccApproveAmount, setUccApproveAmount] = useState(0);
  const [bid, setBid] = useState({ xs: [], ys: [], beneficiary: "" });

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
    // generate approve tx and wait until tx finishes
    let uccApproveTx = await uccContract.approve(
      SpaceAuctionAddress,
      uccPricePerSpace * spacesLimitPerBid
    );

    await uccApproveTx.wait();

    let allowance = await uccContract.allowance(
      loginAddress,
      SpaceAuctionAddress
    );
    console.log("uccAllowance after approve", allowance);

    let uccTokenAddressInSpaceAuction = await spaceAuctionContract.uccToken();
    console.log("uccTokenAddressInSpaceAuction", uccTokenAddressInSpaceAuction);

    window.alert("Bid was successful");
  };

  const handleBidSpace = async () => {
    signer = generateSigner(window.ethereum);

    spaceAuctionContract = generateContractInstance(
      SpaceAuctionAddress,
      SpaceAuctionAbi,
      signer
    );

    console.log("bid.xs", bid.xs);
    console.log("bid.ys", bid.ys);

    // call bid function to get space token by offering ucc token
    let bidTx = await spaceAuctionContract.bid(bid.xs, bid.ys, loginAddress);

    await bidTx.wait();
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
    console.log("Bid parcels changing");
    console.log("uccBalance", uccBalance);
    console.log("uccAllowance", uccAllowance);
    console.log("uccPricePerSpace", uccPricePerSpace);
    console.log(
      "bidParcels.length * uccPricePerSpace",
      bidParcels.length * uccPricePerSpace
    );
    console.log(
      "uccBalance > bidParcels.length * uccPricePerSpace",
      uccBalance > bidParcels.length * uccPricePerSpace
    );
    if (bidParcels.length === 0) {
      setIsBiddable(false);
      setIsApprovable(false);
    }
    // Disable if bid parcels count is bigger than space limit
    else if (bidParcels.length > spacesLimitPerBid) {
      setIsBiddable(false);
      window.alert(
        "Info: You can only bid up to " +
          spacesLimitPerBid +
          " spaces " +
          "per bid."
      );
    }
    // if already approved enough then show Bid button
    else if (uccAllowance > bidParcels.length * uccPricePerSpace) {
      console.log("In case 3");
      setIsBiddable(true);
    }
    // if bid parcels is in [0, spacesLimitPerBid] and not approved enough yet then make a approve & else set is approval false
    else {
      if (uccBalance > bidParcels.length * uccPricePerSpace) {
        console.log("In case 4-1");

        setUccApproveAmount(
          bidParcels.length * uccPricePerSpace - uccAllowance
        );
        setIsApprovable(true);
      } else {
        console.log("In case 4-2");

        setIsApprovable(false);
      }
    }

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
    // current znx coin balance of login address
    let coinBal = await signer.getBalance();
    console.log("coin balance before approve", coinBal);

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
            {isBiddable ? (
              <ActionButton
                color="red"
                className={classes.approveBtn}
                onClick={handleBidSpace}
              >
                Bid
              </ActionButton>
            ) : isApprovable ? (
              <ActionButton
                color="red"
                className={classes.approveBtn}
                onClick={handleApproveUCCToken}
              >
                Approve
              </ActionButton>
            ) : (
              <ActionButton color="red" className={classes.approveBtn}>
                Cant' approve
              </ActionButton>
            )}

            <ActionButton color="dark">clear</ActionButton>
          </div>
          <LandAccordion />
        </div>
      </div>
    </>
  );
};

export default Auction;
