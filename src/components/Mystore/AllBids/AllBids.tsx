import { useState } from "react";
import SendBidTable from "./SendBidTable/SendBidTable";
import ReciveBidTable from "./ReciveBidTable/ReciveBidTable";
import TablePagination from "../../Base/TablePagination";
import {
  headerData,
  onsaleData,
  ReciveHeaderData,
  ReciveData,
  onePageCount,
} from "./AllBidsData";
import { AllBidsStyle } from "./AllBidsStyle";
import { useTranslation } from "react-i18next";

var count = onsaleData.length;
var totalPage = Math.ceil(count / onePageCount);

export default function OnSale() {
  const classes = AllBidsStyle();
  const { t } = useTranslation();
  const [reciveCurPage, setReciveCurPage] = useState<any>(1);
  const [sendCurPage, setSendCurPage] = useState<any>(1);

  const recivepgnum = (value: number) => {
    setReciveCurPage(value);
  };
  const sendpgnum = (value: number) => {
    setSendCurPage(value);
  };

  return (
    <>
      <div className={classes.reciveBid}>
        <div className={classes.reciveTitle}>{t("BIDS RECEIVED")}</div>
        <ReciveBidTable
          columns={ReciveHeaderData}
          rows={ReciveData}
          curPage={reciveCurPage}
          stepIndex={0}
        />
        <div className={classes.paginationContainer}>
          <TablePagination handlepgnum={recivepgnum} totalPage={totalPage} />
        </div>
      </div>
      <div className={classes.sendBid}>
        <div className={classes.sendTitle}>{t("BIDS PLACED")}</div>
        <SendBidTable
          columns={headerData}
          rows={onsaleData}
          curPage={sendCurPage}
          stepIndex={0}
        />
        <div className={classes.paginationContainer}>
          <TablePagination handlepgnum={sendpgnum} totalPage={totalPage} />
        </div>
      </div>
    </>
  );
}
