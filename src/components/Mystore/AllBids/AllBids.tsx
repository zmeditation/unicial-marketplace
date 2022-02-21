import { useEffect, useState } from "react";
import SendBidTable from "./SendBidTable/SendBidTable";
import ReciveBidTable from "./ReciveBidTable/ReciveBidTable";
import TablePagination from "../../Base/TablePagination";
import { headerData, ReciveData, onePageCount } from "./AllBidsData";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { AllBidsStyle } from "./AllBidsStyle";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/hooks";
import { getParcelsByOwner, getSendBidByOwner } from "../../../hooks/api";

export default function OnSale() {
  const classes = AllBidsStyle();
  const { t } = useTranslation();
  const loginAddress = useAppSelector(selectLoginAddress);
  const [reciveCurPage, setReciveCurPage] = useState<any>(1);
  const [sendCurPage, setSendCurPage] = useState<any>(1);
  const emptyTokens: any[] = [];
  const [allBidData, setAllBidData] = useState<any>(emptyTokens);
  const [selectSendRow, setSelectSendRow] = useState(0);
  const [reciveData, setReciveData] = useState<any>();
  var countRecive = reciveData?.length;
  var totalRecivePage = Math.ceil(countRecive / onePageCount);

  useEffect(() => {
    // getParcelsByOwner(loginAddress).then(
    //   (parcels: any[]) => {
    //     console.log("Parcel", parcels);
    //     console.log("Parcel length", parcels.length);
    //     console.log("Parcel 0", parcels[0]);
    //     setAllBidData(parcels);
    //   }
    // );
    getSendBidByOwner(loginAddress).then((recive: any[]) => {
      setAllBidData(recive);
    });
  }, []);

  const recivepgnum = (value: number) => {
    setReciveCurPage(value);
  };

  var countSend = allBidData?.length;
  var totalSendPage = Math.ceil(countSend / onePageCount);

  const sendpgnum = (value: number) => {
    setSendCurPage(value);
  };

  const handleSendRow = (key: number) => {
    setSelectSendRow(key);
  };

  return (
    <>
      <div className={classes.reciveBid}>
        <div className={classes.reciveTitle}>{t("BIDS RECEIVED")}</div>
        {ReciveData?.length === 0 || ReciveData === undefined ? (
          <div className={classes.emptyDisplay}>
            {t("You haven't received any bids yet")}...
          </div>
        ) : (
          <>
            <ReciveBidTable
              columns={headerData}
              rows={ReciveData}
              curPage={reciveCurPage}
              stepIndex={0}
            />
            <div className={classes.paginationContainer}>
              <TablePagination
                handlepgnum={recivepgnum}
                totalPage={totalRecivePage}
              />
            </div>
          </>
        )}
      </div>
      <div className={classes.sendBid}>
        <div className={classes.sendTitle}>{t("BIDS PLACED")}</div>
        {allBidData?.length === 0 || allBidData === undefined ? (
          <div className={classes.emptyDisplay}>
            {t("You haven't placed any bids yet")}...
          </div>
        ) : (
          <>
            <SendBidTable
              columns={headerData}
              rows={allBidData}
              curPage={sendCurPage}
              onRowClick={handleSendRow}
              stepIndex={selectSendRow}
            />
            <div className={classes.paginationContainer}>
              <TablePagination
                handlepgnum={sendpgnum}
                totalPage={totalSendPage}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
