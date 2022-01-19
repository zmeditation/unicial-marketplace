import React, { useState, useEffect } from "react";
import { BigNumber } from "ethers";

import LandMap from "../../components/Admin/LandMap";
import TobTab from "../../components/TopTab/TopTab";
import { useStyles } from "./AuctionStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import LandAccordion from "./LandAccordion/LandAccordion";
import CountDown from "../../components/CountDown/CountDown";
import StagingTable from "./StagingTable/StagingTable";
import { headerData, transactionData } from "./AuctionData";
import ActionButton from "../../components/Base/ActionButton";
import { useAppSelector } from "../../store/hooks";
import { selectLoginAddress } from "../../store/auth/selectors";
import { selectparcels } from "../../store/selectedparcels/selectors";
import CallMadeIcon from "@material-ui/icons/CallMade";
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
  const [ttlSpacesPrice, setTtlSpacePrice] = useState(BigNumber.from(0)); // This shows current allowed ucc allowance
  const [uccBalance, setUccBalance] = useState(BigNumber.from(0));
  const [bid, setBid] = useState({ xs: [], ys: [], beneficiary: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuctionAuthorized, setIsAuctionAuthorized] = useState(false);

  const loginAddress = useAppSelector(selectLoginAddress);
  const bidParcels = useAppSelector(selectparcels) || [];
  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(1064);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(933);
    } else if (window.innerWidth <= 992 && window.innerWidth > 770) {
      setWidth(723);
    } else if (window.innerWidth <= 770 && window.innerWidth > 500) {
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
    console.log(bidParcels.length * uccPricePerSpace);
    let ttl =
      (uccPricePerSpace &&
        BigNumber.from(bidParcels.length * uccPricePerSpace)) ||
      BigNumber.from(0);
    setTtlSpacePrice(ttl);
    setUccApprovalAmount(ttl);
  }, [bidParcels.length]);

  useEffect(() => {
    console.log("Ucc allowance changed!", uccAllowance.toString());
  }, [uccAllowance.toString()]);

  useEffect(() => {}, []);
  // approve UCC token to buy Space token
  const handleApproveUCCToken = async () => {
    console.log(uccApprovalAmount + " in handleApprovedUCCToken");
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

  const handleBidSpace = async () => {
    console.log("ttlSpacesPrice", ttlSpacesPrice);
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
          // check able to approve
          window.alert(
            "Not enough allowance for ucc token. Will you approve the auction contract to use some of your UCC for your bid?"
          );
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
    uccPricePerSpace = parseInt(
      (await spaceAuctionContract.getCurrentPrice()).toString()
    );
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
          <span className={classes.title}>Left Time.</span>
          <CountDown />
          <span className={classes.title}>Staging.</span>
          <StagingTable
            columns={headerData}
            rows={transactionData}
            stepIndex={1}
          />
        </div>
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <BackButton />
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <div className={classes.actionButton}>
            <ActionButton
              color="light"
              className={classes.approveBtn}
              onClick={handleBidSpace}
            >
              Bid
              <CallMadeIcon fontSize="small" />
            </ActionButton>
            <ActionButton color="dark">Clear</ActionButton>
            {isAdmin ? (
              isAuctionAuthorized ? (
                <ActionButton color="dark" onClick={authorizeAuctionContract}>
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
