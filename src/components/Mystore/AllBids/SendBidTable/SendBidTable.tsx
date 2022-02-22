import { useStyles } from "./SendBidTableStyle";
import StageMarket from "../../../StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import ActionButton from "../../../Base/ActionButton";
import { onePageCount } from "../../../../config/constant";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { ethers } from "ethers";
import { addCommas, dateConvert } from "../../../../common/utils";
import { showMoreCount } from "../../../../config/constant";

interface StagingTableProps {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
  onRowClick(key: number) : any;
}

const SendBidTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
  onRowClick,
}: StagingTableProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

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
              {row.tokenAddress.slice(0, showMoreCount)}...
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.tokenId.slice(0, showMoreCount)}...
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              {<img src={normalshapeSvg} className={classes.normalshape} />}
              {<div>{addCommas(ethers.utils.formatUnits(row.price, 18))}</div>}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {dateConvert(row.expiresAt)}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              <ActionButton color='dark' className={classes.actionBtn}>
                {t("Cancel")}
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

export default SendBidTable;
