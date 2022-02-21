import { useEffect, useState } from "react";
import SendBidTable from "./SendBidTable/SendBidTable";
import ReciveBidTable from "./ReciveBidTable/ReciveBidTable";
import TablePagination from "../../Base/TablePagination";
import {
  headerData,
  onsaleData,
  ReciveData,
  onePageCount,
} from "./AllBidsData";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { AllBidsStyle } from "./AllBidsStyle";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/hooks";
// import { getParcelsByOwner, getReciveBidByOwner } from "../../../hooks/api";

var count = onsaleData.length;
var totalPage = Math.ceil(count / onePageCount);

export default function OnSale() {
  const classes = AllBidsStyle();
  const { t } = useTranslation();
  const loginAddress = useAppSelector(selectLoginAddress)
  const [reciveCurPage, setReciveCurPage] = useState<any>(1);
  const [sendCurPage, setSendCurPage] = useState<any>(1);
  const emptyTokens: any[] = [];
  const [allBidData, setAllBidData] = useState<any>(emptyTokens);
  const [reciveData, setReciveData] = useState<any>();

  // useEffect(() => {
  //   getParcelsByOwner(loginAddress).then(
  //     (parcels: any[]) => {
  //       console.log("Parcel", parcels);
  //       console.log("Parcel length", parcels.length);
  //       console.log("Parcel 0", parcels[0]);
  //       setAllBidData(parcels);
  //     }
  //   );
  //   console.log(loginAddress)
  //   getReciveBidByOwner(loginAddress).then(
  //     (recive: any[]) => {
  //       console.log("recive: ", recive);
  //       setReciveData(recive);
  //     }
  //   )
  // }, []);

  console.log(allBidData)
  console.log("recivedata: ",reciveData)

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
          columns={headerData}
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
