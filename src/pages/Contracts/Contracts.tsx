import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import LandMap from "../../components/LandMap";
import Title from "../../components/ContractInfo/Title";
import Owner from "../../components/ContractInfo/Owner";
import Highlight from "../../components/ContractInfo/Highlight";
import Bidbox from "../../components/ContractInfo/Bidbox";
import Buybox from "../../components/ContractInfo/Buybox";
import Parcels from "../../components/ContractInfo/Parcels";
import TobTab from "../../components/TopTab/TopTab";
import BidRecord from "../../components/ContractInfo/BidRecord";
import { headerData, transactionData } from "./ContractsData";
import { BidRecordData } from "./ContractsData";
import { useStyles } from "./ContractsStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import LatestSalesTable from "../../components/ContractInfo/LatestSalesTable/LatestSalesTable";
import { useTranslation } from "react-i18next";
import TablePagination from "../../components/Base/TablePagination";

const Contract = () => {
  const classes = useStyles();
  const { contractaddress, tokensId } = useParams();
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const { t } = useTranslation();

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
  //pagination reate
  const [curPage, setCurPage] = useState<any>(1);
  const handlepgnum = (value: number) => {
    setCurPage(value);
  };
  var count = transactionData.length;
  var totalPage = Math.ceil(count / 5);
  return (
    <>
      <TobTab />
      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div>
            <div className={classes.LandMapContent}>
              <LandMap height={400} width={width} initialX={1} initialY={1} />
            </div>
            <div className={classes.backbtnContainer}>
              <BackButton className={classes.backBtnPosition} />
              <></>
            </div>
          </div>

          <div className={classes.contractDescription}>
            <div className={classes.leftDescription}>
              <div className={classes.items}>
                <Title />
              </div>
              <div className={classes.divideLine}></div>
              <Owner />
              <div className={classes.divideLine}></div>
              <Highlight />
              <div className={classes.divideLine}></div>
            </div>
            <div className={classes.rightDescription}>
              <div className={classes.BidboxContainer}>
                <Bidbox />
              </div>
              <Buybox />
            </div>
          </div>
          <Parcels />

          <div className={classes.tableRoot}>
            <LatestSalesTable
              columns={headerData}
              rows={transactionData}
              curPage={curPage}
              stepIndex={0}
            />
            <div className={classes.paginationContainer}>
              <TablePagination
                handlepgnum={handlepgnum}
                totalPage={totalPage}
              />
            </div>
          </div>
          <div>
            <div className={classes.BidsTitle}>{t("Bids")}.</div>
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
