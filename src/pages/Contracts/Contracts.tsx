import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import LandMap from "../../components/LandMap";
import Title from "../../components/ContractInfo/Title";
import Description from "../../components/ContractInfo/Description";
import Owner from "../../components/ContractInfo/Owner";
import Highlight from "../../components/ContractInfo/Highlight";
import Bidbox from "../../components/ContractInfo/Bidbox";
import Buybox from "../../components/ContractInfo/Buybox";
import Parcels from "../../components/ContractInfo/Parcels";
import TobTab from "../../components/TopTab/TopTab";
import TransactionHistoryTable from "../../components/ContractInfo/TransactionHistoryTable";
import BidRecord from "../../components/ContractInfo/BidRecord";
import { headerData, transactionData } from "./ContractsData";
import { BidRecordData } from "./ContractsData";
import { useStyles } from "./ContractsStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import LatestSalesTable from "../../components/ContractInfo/LatestSalesTable/LatestSalesTable";

const Contract = () => {
  const classes = useStyles();
  const { contractaddress, tokensId } = useParams();
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

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

  return (
    <>
      <TobTab />
      <div className={classes.root}>
        <BackButton className={classes.backBtnPosition} />
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <div className={classes.contractDescription}>
            <div className={classes.leftDescription}>
              <div className={classes.items}>
                <Title />
              </div>
              <div className={classes.items}>
                <Description />
              </div>
              <Owner />
              <Highlight />
            </div>
            <div className={classes.rightDescription}>
              <Bidbox />
              <Buybox />
            </div>
          </div>
          <Parcels />
          <div className={classes.tableRoot}>
            {/* <TransactionHistoryTable
              columns={headerData}
              rows={transactionData}
            /> */}
            <LatestSalesTable
              columns={headerData}
              rows={transactionData}
              stepIndex={1}
            />
          </div>
          <div>
            <div className={classes.BidsTitle}>BIDS</div>
            {BidRecordData.map((row, index) => (
              <BidRecord
                fromName={row.fromName}
                price={row.price}
                time={row.time}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contract;
