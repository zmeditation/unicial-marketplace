import React from "react";
import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";

interface StyledTableleProps {
  columns?: any;
  rows: any;
  emptyTableRows?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "18px",
      textTransform: "uppercase",
      marginBottom: "16px",
      color: "#676370",
    },
    tableContainer: {
      "&.MuiTableContainer-root": {
        overflow: "auto hidden",
        border: "none",
        padding: "0px",
        marginBottom: "20px",
      },
      "& .MuiTableCell-root": {
        borderBottom: "none",
      },
    },
    tableContent: {
      "&.MuiTableHead-root": {
        width: "900px",
        minWidth: "100%",
        tableLayout: "auto",
      },
      "& .MuiTableRow-head": {
        backgroundColor: "red",
      },
      "& .MuiTableCell-stickyHeader": {
        backgroundColor: "#18141a",
      },
    },
    tableHeaderCell: {
      fontSize: "13px",
      lineHeight: "18px",
      fontWeight: 400,
      color: "#676370",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
      "&.MuiTableCell-root": {
        padding: "11px 0px",
        borderBottom: "solid 1px #242129",
      },
      [theme.breakpoints.down(769)]: {
        display: "none",
      },
    },
    tableCell: {
      fontSize: "15px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
      color: "white",
      fontWeight: 500,
      "&.MuiTableCell-root": {
        padding: "18px 0px",
        borderBottom: "solid 1px #242129",
      },
    },
    firstcellmargin: {
      display: "flex",
      marginRight: "40px",
      alignItems: "center",
    },
    secondcellmargin: {
      marginRight: "20px",
    },
    imageContainer: {
      width: "18px",
      height: "18px",
      backgroundColor: "#37343d",
      borderRadius: "100%",
      marginRight: "5px",
    },
    fromIamge: {
      width: "100%",
      height: "100%",
      marginRight: "5px",
    },
    symbol: {
      fontSize: "normal",
      paddingRight: "0.3em",
      transform: "translateY(-0.06em)",
      color: "#ff2d55",
    },
    whenCell: {
      fontSize: "15px",
      color: "#676370",
      fontWeight: 400,
      textAlign: "right",
    },
  })
);

function StageMarket({ columns, rows, emptyTableRows }: StyledTableleProps) {
  const classes = useStyles();

  const tableColumns = columns?.map((column: any, key: any) => (
    <TableCell key={column} className={classes.tableHeaderCell}>
      {column}
    </TableCell>
  ));

  const tableRows = rows?.map((row: any, key: any) => (
    <TableRow key={key}>
      <TableCell className={clsx(classes.tableCell)}>{row.stage}</TableCell>

      <TableCell className={clsx(classes.tableCell)}>{row.time}</TableCell>

      <TableCell className={clsx(classes.tableCell)}>{row.price}</TableCell>

      <TableCell className={clsx(classes.tableCell)}></TableCell>
    </TableRow>
  ));
  return (
    <>
      <div className={classes.title}>Staging</div>
      <TableContainer className={classes.tableContainer}>
        <Table
          stickyHeader
          aria-label="simple table"
          className={classes.tableContent}
        >
          <TableHead>
            <TableRow>{tableColumns}</TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StageMarket;
