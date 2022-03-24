import { useStyles } from "./OnSaleTableStyle";
import StageMarket from "../../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import ActionButton from "../../../Base/ActionButton";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface StagingTableProps {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
}

const OnSaleTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
}: StagingTableProps) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const tableRows =
    rows !== undefined ? (
      rows.slice((curPage - 1) * 2, curPage * 2).map((row: any, key: any) => (
        <TableRow
          key={key}
          className={clsx({ [classes.targetRow]: stepIndex === key })}
        >
          <TableCell className={clsx(classes.tableCell)}>{row.type}</TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.token_id}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            {row.sale_type}
          </TableCell>
          <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
            {<img src={normalshapeSvg} className={classes.normalshape} />}
            {<div>{row.sale_price}</div>}
          </TableCell>
          <TableCell className={clsx(classes.tableCell)}>
            <ActionButton color="dark" className={classes.actionBtn}>
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

export default OnSaleTable;
