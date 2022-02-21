/** @format */

import { useState } from "react";
import SendBidTable from "./SendBidTable/SendBidTable";
import ReciveBidTable from "./ReciveBidTable/ReciveBidTable";
import TablePagination from "../../Base/TablePagination";
import {
  headerData,
  onsaleData,
  ReciveHeaderData,
  ReciveData,
} from "./AllBidsData";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
      // "& .MuiPaginationItem-root": {
      //   color: "white",
      // },

      // "& .MuiPaginationItem-page.Mui-selected": {
      //   backgroundColor: "#e5080814",
      // },
    },
    reciveBid: {
      minHeight: "150px",
      paddingBottom: "20px",
    },
    reciveTitle: {
      marginBottom: "30px",
    },
    sendBid: {
      borderTop: "solid 1px #373f66",
      minHeight: "150px",
      paddingTop: "50px",
    },
    sendTitle: {
      marginBottom: "30px",
    },
  })
);
var count = onsaleData.length;
var totalPage = Math.ceil(count / 5);

export default function OnSale() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const [curPage, setCurPage] = useState<any>(1);
  const handlepgnum = (value: number) => {
    setCurPage(value);
  };
  return (
    <>
      <div className={classes.reciveBid}>
        <div className={classes.reciveTitle}>BIDS RECEIVED</div>
        <ReciveBidTable
          columns={ReciveHeaderData}
          rows={ReciveData}
          curPage={curPage}
          stepIndex={0}
        />
        <div className={classes.paginationContainer}>
          <TablePagination handlepgnum={handlepgnum} totalPage={totalPage} />
        </div>
      </div>
      <div className={classes.sendBid}>
        <div className={classes.sendTitle}>BIDS PLACED</div>
        <SendBidTable
          columns={headerData}
          rows={onsaleData}
          curPage={curPage}
          stepIndex={0}
        />
        <div className={classes.paginationContainer}>
          <TablePagination handlepgnum={handlepgnum} totalPage={totalPage} />
        </div>
      </div>
    </>
  );
}
