import React from "react";
import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from "@material-ui/core";
import { isEmptyObject } from "../../common/utils";

interface StyledTableleProps {
  columns: React.ReactNode;
  rows: React.ReactNode;
  emptyTableRows?: React.ReactNode;
}

function StyledTable({ columns, rows, emptyTableRows }: StyledTableleProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      tableContainer: {
        "&.MuiTableContainer-root": {
          overflow: "auto hidden",
          borderRadius: "10px",
          backgroundColor: "#242129",
          padding: "24px",
          marginBottom: "20px",
          //   width: "100% !important",
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
          backgroundColor: "#242129",
        },
      },
    })
  );

  const classes = useStyles();
  return (
    <TableContainer className={classes.tableContainer}>
      <Table
        stickyHeader
        aria-label="simple table"
        className={classes.tableContent}
      >
        <TableHead>
          <TableRow>{columns}</TableRow>
        </TableHead>
        <TableBody>{!isEmptyObject(rows) ? rows : emptyTableRows}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default StyledTable;
