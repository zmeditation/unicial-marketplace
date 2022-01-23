import { useStyles } from "./LatestSalesTableStyle";
import StageMarket from "../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";

import clsx from "clsx";

interface Props {
  columns?: any;
  rows: any;
  stepIndex?: number;
}

const LatestSalesTable = ({ columns, rows, stepIndex }: Props) => {
  const classes = useStyles();

  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow
      key={key}
      className={clsx({ [classes.targetRow]: stepIndex === key })}
    >
      <TableCell className={clsx(classes.tableCell, classes.imageCell)}>
        <div className={classes.avatarContainer}>
          <img src={row.fromImgSrc} className={classes.avatar} />
        </div>
        <div>{row.fromName}</div>
      </TableCell>
      <TableCell className={clsx(classes.tableCell, classes.imageCell)}>
        <div className={classes.avatarContainer}>
          <img src={row.toImgSrc} className={classes.avatar} />
        </div>
        <div>{row.fromName}</div>
      </TableCell>
      <TableCell className={clsx(classes.tableCell)}>{row.type}</TableCell>
      <TableCell className={clsx(classes.tableCell)}>{row.when}</TableCell>
      <TableCell className={clsx(classes.tableCell, classes.symbolCell)}>
        <i className={classes.symbol}>⏣</i>
        <div className={classes.price}>{row.price}</div>
      </TableCell>
    </TableRow>
  ));
  return (
    <>
      <div className={classes.title}>Latest Sales.</div>
      <StageMarket columns={columns} rows={tableRows} />
    </>
  );
};

export default LatestSalesTable;
