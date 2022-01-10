import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import LandMap from "../components/LandMap";
import clsx from "clsx";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Title from "../components/ContractInfo/Title";
import Description from "../components/ContractInfo/Description";
import Owner from "../components/ContractInfo/Owner";
import Highlight from "../components/ContractInfo/Highlight";
import Bidbox from "../components/ContractInfo/Bidbox";
import Buybox from "../components/ContractInfo/Buybox";
import Parcels from "../components/ContractInfo/Parcels";
import TobTab from "../components/TopTab/TopTab";
import StyledTable from "../components/ContractInfo/StyledTable";
//import table realted data
import { headerData, BidsData } from "../config/tabletestData";
import { TableCell, TableRow } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    maxWidth: "1064px",
    margin: "40px auto",
    position: "relative",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      maxWidth: "933px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "723px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
    },
  },
  LandMap: {
    maxWidth: "945px",
    display: "grid",
    margin: "0px auto",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "820px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "600px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
      marginTop: "60px",
    },
  },
  backBtn: {
    top: "5px",
    position: "absolute",
    borderRadius: "25px",
    border: "1px solid #6763709c",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      borderColor: "white",
    },
    [theme.breakpoints.down(769)]: {
      top: "-40px",
    },
  },
  backIcon: {
    width: "15px",
    height: "15px",
    color: "white",
    marginLeft: "10px",
  },
  contractDescription: {
    marginTop: "35px",
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  leftDescription: {
    flex: "1 1",
    marginRight: "48px",
    [theme.breakpoints.down(769)]: {
      width: "100%",
    },
  },
  rightDescription: {
    minWidth: "320px",
    [theme.breakpoints.down(769)]: {
      width: "100%",
      marginTop: "20px",
    },
  },
  items: {
    marginBottom: "40px",
  },
  tableRoot: {
    // width: "820px ",
    width: "100%",
    "& .MuiTableContainer-root": {
      width: "auto",
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
      padding: "0px 16px",
      // borderBottm: "none",
    },
  },
  tableCell: {
    fontSize: "17px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    color: "white",
    fontWeight: 500,
    "&.MuiTableCell-root": {
      padding: "12px 16px",
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
  thirdcellmargin: {},
  symbol: {
    fontSize: "normal",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    color: "#ff2d55",
  },
  fromIamge: {
    width: "18px !important",
    height: "18px !important",
    marginRight: "5px",
    borderRadius: "3px",
  },
}));

const Contract = () => {
  const classes = useStyles();
  const { contractaddress, tokensId } = useParams();
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(945);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(820);
    } else if (window.innerWidth <= 992 && window.innerWidth > 770) {
      setWidth(600);
    } else if (window.innerWidth <= 770 && window.innerWidth >= 500) {
      setWidth(420);
    } else {
      setWidth(300);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // table realted
  const rowsPerPage = 10;
  const [page, setPage] = React.useState(0);

  const tableColumns = headerData.map((column: any, key: any) => (
    <TableCell key={column} className={classes.tableHeaderCell}>
      {column}
    </TableCell>
  ));

  const tableRows = (
    rowsPerPage > 0
      ? BidsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : BidsData
  ).map((row: any, key: any) => (
    <TableRow key={key}>
      <TableCell component="th" scope="row" className={clsx(classes.tableCell)}>
        <div className={classes.firstcellmargin}>
          <img
            src={row.imgSrc}
            className={classes.fromIamge}
            alt="fromimage!"
          />
          {row.from}
        </div>
      </TableCell>
      <TableCell className={clsx(classes.tableCell, classes.secondcellmargin)}>
        <i className={classes.symbol}>⏣</i>
        {row.price}
      </TableCell>
      <TableCell className={clsx(classes.tableCell, classes.thirdcellmargin)}>
        {row.timeleft}
      </TableCell>
    </TableRow>
  ));
  return (
    <>
      <TobTab />
      <div className={classes.root}>
        <span className={classes.backBtn} onClick={() => navigate(-1)}>
          <ArrowBackIosIcon className={classes.backIcon} />
        </span>
        <div className={classes.LandMap}>
          <div style={{ height: "400px" }}>
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <div className={classes.contractDescription}>
            <div className={classes.leftDescription}>
              <div className={classes.items}>
                <Title />
              </div>
              <div className={classes.items}>
                <Description />
              </div>
              <Owner />
              <Highlight />
            </div>
            <div className={classes.rightDescription}>
              <Bidbox />
              <Buybox />
            </div>
          </div>
          {/* /// */}
          <div className={classes.tableRoot}>
            <StyledTable columns={tableColumns} rows={tableRows} />
          </div>

          <Parcels />
        </div>
      </div>
    </>
  );
};

export default Contract;
