import { useState } from "react";
import OnSaleTable from "./OnSaleTable/OnSaleTable";
import TablePagination from "../../Base/TablePagination";
import { headerData, onsaleData } from "./OnSaleTable/OnSaleTableData";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

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
  })
);
var count = onsaleData.length;
var totalPage = Math.ceil(count / 2);

export default function OnSale() {
  const classes = useStyles();
  const [curPage, setCurPage] = useState<any>(1);
  const handlepgnum = (value: number) => {
    setCurPage(value);
  };
  return (
    <>
      <OnSaleTable
        columns={headerData}
        rows={onsaleData}
        curPage={curPage}
        stepIndex={0}
      />
      <div className={classes.paginationContainer}>
        <TablePagination handlepgnum={handlepgnum} totalPage={totalPage} />
      </div>
    </>
  );
}
