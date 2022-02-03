import { useStyles } from "./OnSaleTableStyle";
import StageMarket from "../../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import clsx from "clsx";

interface StagingTableProps {
  columns?: any;
  rows: any;
  stepIndex?: number;
}

const OnSaleTable = ({ columns, rows, stepIndex }: StagingTableProps) => {
  const classes = useStyles();

  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow
      key={key}
      className={clsx({ [classes.targetRow]: stepIndex === key })}
    >
      <TableCell className={clsx(classes.tableCell)}>{row.type}</TableCell>
      <TableCell className={clsx(classes.tableCell)}>{row.token_id}</TableCell>
      <TableCell className={clsx(classes.tableCell)}>{row.sale_type}</TableCell>
      <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
        {<img src={normalshapeSvg} className={classes.normalshape} />}
        {<div>{row.sale_price}</div>}
      </TableCell>
      <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
        {row.action}
      </TableCell>
    </TableRow>
  ));
  return (
    <>
      <StageMarket columns={columns} rows={tableRows} />
    </>
  );
};

export default OnSaleTable;
