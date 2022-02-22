import { useEffect, useState } from "react";
import SendBidTable from "./SendBidTable/SendBidTable";
import ReciveBidTable from "./ReciveBidTable/ReciveBidTable";
import TablePagination from "../../Base/TablePagination";
import { headerData, onePageCount } from "../../../config/constant";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { AllBidsStyle } from "./AllBidsStyle";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/hooks";
import {
  getParcelsByOwnerAstokenId,
  getSendBidByOwner,
} from "../../../hooks/api";
import {
  BidContractAddress,
  BidContractAbi,
} from "../../../config/contracts/BidContract";
import {
  generateContractInstance,
  generateSigner,
} from "../../../common/contract";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";

declare var window: any;
var signer: any, bidContract: any;

export default function AllBids() {
  const classes = AllBidsStyle();
  const { t } = useTranslation();
  const loginAddress = useAppSelector(selectLoginAddress);
  const [reciveCurPage, setReciveCurPage] = useState<any>(1);
  const [sendCurPage, setSendCurPage] = useState<any>(1);
  const emptyTokens: any[] = [];
  const [sendBidData, setSendBidData] = useState<any>(emptyTokens);
  const [reciveBidData, setReciveBidData] = useState<any>();

  const [selectSendRow, setSelectSendRow] = useState(0);
  const [selectReciveRow, setSelectReciveRow] = useState(0);

  signer = generateSigner(window.ethereum);

  bidContract = generateContractInstance(
    BidContractAddress,
    BidContractAbi,
    signer
  );

  useEffect(() => {
    getParcelsByOwnerAstokenId(loginAddress).then((parcels: any[]) => {
      getAllBids(parcels);
    });
    getSendBidByOwner(loginAddress).then((send: any[]) => {
      setSendBidData(send);
    });
  }, []);

  const getAllBids = async (parcels: any) => {
    let parcelsLength = parcels?.length;
    let bidPromises = [];

    for (let i = 0; i < parcelsLength; i++) {
      let bidsCount = (
        await bidContract.bidCounterByToken(
          SpaceProxyAddress,
          parcels[i].toString()
        )
      ).toNumber();

      for (let j = 0; j < bidsCount; j++) {
        bidPromises.push(
          bidContract.getBidByToken(SpaceProxyAddress, parcels[i].toString(), j)
        );
      }
    }
    let bids = await Promise.all(bidPromises);
    setReciveBidData(bids);
  };

  //-----------------------recive bid list function -----------------------------

  var countRecive = reciveBidData?.length;
  var totalRecivePage = Math.ceil(countRecive / onePageCount);

  const recivepgnum = (value: number) => {
    setReciveCurPage(value);
  };

  const handleReciveRow = (key: number) => {
    setSelectReciveRow(key);
  };

  //------------------------send bid list function-------------------

  var countSend = sendBidData?.length;
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
        {reciveBidData?.length === 0 || reciveBidData === undefined ? (
          <div className={classes.emptyDisplay}>
            {t("You haven't received any bids yet")}...
          </div>
        ) : (
          <>
            <ReciveBidTable
              columns={headerData}
              rows={reciveBidData}
              curPage={reciveCurPage}
              onRowClick={handleReciveRow}
              stepIndex={selectReciveRow}
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
        {sendBidData?.length === 0 || sendBidData === undefined ? (
          <div className={classes.emptyDisplay}>
            {t("You haven't placed any bids yet")}...
          </div>
        ) : (
          <>
            <SendBidTable
              columns={headerData}
              rows={sendBidData}
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
