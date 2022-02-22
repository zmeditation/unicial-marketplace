import { useStyles } from "./ReciveBidTableStyle";
import StageMarket from "../../../StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import ActionButton from "../../../Base/ActionButton";
import { useTranslation } from "react-i18next";
import { onePageCount } from "../../../../config/constant"; 
import clsx from "clsx";
import { showMoreCount } from "../../../../config/constant";
import { addCommas, dateConvert } from "../../../../common/utils";
import { ethers } from "ethers";

interface StagingTableProps {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
  onRowClick(key: number): any;
}

const ReciveBidTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
  onRowClick,
}: StagingTableProps) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const tableRows =
    rows !== undefined ? (
      rows
        .slice((curPage - 1) * onePageCount, curPage * onePageCount)
        .map((row: any, key: any) => (
          <TableRow
            key={key}
            onClick={() => onRowClick(key)}
            className={clsx({ [classes.targetRow]: stepIndex === key })}>
            <TableCell className={clsx(classes.tableCell)}>
              {row[0].slice(0, showMoreCount)}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row[1].slice(0, showMoreCount)}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              {<img src={normalshapeSvg} className={classes.normalshape} />}
              {<div>{addCommas(ethers.utils.formatUnits(row[2], 18))}</div>}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {dateConvert(row[3])}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              <ActionButton color='light' className={classes.actionBtn}>
                {t("Accept")}
              </ActionButton>
            </TableCell>
          </TableRow>
        ))
    ) : (
      <></>
    );
  return (
    <>
      <StageMarket columns={columns} rows={tableRows} />
    </>
  );
};

export default ReciveBidTable;
