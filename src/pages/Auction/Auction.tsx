import React, { useState, useEffect } from "react";
import LandMap from "../../components/Admin/LandMap";
import TobTab from "../../components/TopTab/TopTab";
import { useStyles } from "./AuctionStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import LandAccordion from "./LandAccordion/LandAccordion";
import CountDown from "../../components/CountDown/CountDown";
import StageMarket from "../../components/StageMarket/StageMarket";
import { headerData, transactionData } from "./AuctionData";

const Auction = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(0);

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
          <LandAccordion />
        </div>
      </div>
    </>
  );
};

export default Auction;
