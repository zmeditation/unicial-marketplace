import { useEffect, useState } from "react";
import OnSaleTable from "./OnSaleTable/OnSaleTable";
import TablePagination from "../../Base/TablePagination";
import { headerData, onsaleData } from "./OnSaleTable/OnSaleTableData";
import { selectLoginAddress } from "./../../../store/auth/selectors";
import { useAppDispatch, useAppSelector } from "./../../../store/hooks";
import { getOnsaleListByOwner } from "../../../hooks/api";
import { showSpinner } from "../../../store/spinner";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { init } from "i18next";

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
// var count = onsaleData.length;
// var totalPage = Math.ceil(count / 2);

export default function OnSale() {
  const classes = useStyles();
  const [curPage, setCurPage] = useState<any>(1);
  const [totalPage, setTotalPage] = useState(0);
  const [onsaleData, seOnsaleData] = useState<any>();
  const loginAddress = useAppSelector(selectLoginAddress);
  const dispatch = useAppDispatch();

  const handlepgnum = (value: number) => {
    setCurPage(value);
  };

  const init = async () => {
    dispatch(showSpinner(true));
    await getOnsaleListByOwner(loginAddress).then((onSaleData: any) => {
      seOnsaleData(onSaleData);
      var count = onsaleData?.length;
      var totalPage = Math.ceil(count / 2);
      setTotalPage(totalPage);
    });
    dispatch(showSpinner(false));
  };

  useEffect(() => {
    init();
  }, []);

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
