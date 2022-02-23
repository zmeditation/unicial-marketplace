import { useStyles } from "./SendBidTableStyle";
import StageMarket from "../../../StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import ActionButton from "../../../Base/ActionButton";
import Tag from "../../../Base/Tag";
import { onePageCount } from "../../../../config/constant";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { addCommas, dateConvert } from "../../../../common/utils";
import { showMoreCount } from "../../../../config/constant";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { showAlert } from "../../../../store/alert";
import copy from "clipboard-copy";
import { BigNumber, ethers } from "ethers";
import {
  BidContractAddress,
  BidContractAbi,
} from "../../../../config/contracts/BidContract";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import { SpaceProxyAddress } from "../../../../config/contracts/SpaceRegistryContract";

declare var window: any;
var signer: any, bidContract: any;

interface StagingTableProps {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
  onRowClick(key: number): any;
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
  const dispatch = useAppDispatch();
  const [bidStatus, setBidStatus] = useState<any>({status: "",index: null})
  const [copyAddress, setcopyAddress] = useState<any>({
    status: false,
    index: null,
  });
  const [copyTokenId, setcopyTokenId] = useState<any>({
    status: false,
    index: null,
  });

  signer = generateSigner(window.ethereum);

  bidContract = generateContractInstance(
    BidContractAddress,
    BidContractAbi,
    signer
  );

  useEffect(()=> {

  },[rows])

  useEffect(() => {
    const timer = setTimeout(() => {
      setcopyAddress({ status: false, index: null });
      setcopyTokenId({ status: false, index: null });
    }, 400);
    return () => clearTimeout(timer);
  }, [copyAddress, copyTokenId]);

  const handleCopyAddress = (props: string, key: any) => {
    copy(props);
    setcopyAddress({ status: !copyAddress.status, index: key });
  };

  const handleCopyTokenId = (props: string, key: any) => {
    copy(props);
    setcopyTokenId({ status: !copyTokenId.status, index: key });
  };

  const handleCancelBid = async (key: any) => {
    let bidCancelOrder = await bidContract.cancelBid(
      rows[key].tokenAddress,
      BigNumber.from(rows[key].tokenId)
    );
    await bidCancelOrder.wait();
    dispatch(
      showAlert({
        message: "Bid cancel order cancel is successfully published.",
        severity: "success",
      })
    );
  };

  const tableRows =
    rows !== undefined ? (
      rows
        .slice((curPage - 1) * onePageCount, curPage * onePageCount)
        .map((row: any, key: any) => (
          <TableRow
            key={key}
            onClick={() => onRowClick(key)}
            className={clsx({ [classes.targetRow]: stepIndex === key })}>
            <TableCell
              className={clsx(classes.tableCell, classes.tokenAddress)}
              onClick={() => handleCopyAddress(row.tokenAddress, key)}>
              {row.tokenAddress.slice(0, showMoreCount)}... &nbsp;
              {row.tokenAddress.toLowerCase() === SpaceProxyAddress.toLowerCase() ? <span>(space)</span>: <span>(others)</span>} &nbsp;
              {copyAddress.status && copyAddress.index === key ? (
                <i className='fa fa-check-circle mr-1'></i>
              ) : (
                <span>
                  <i className='far fa-copy'></i>
                </span>
              )}
            </TableCell>
            <TableCell
              className={clsx(classes.tableCell, classes.tokenId)}
              onClick={() => handleCopyTokenId(row.tokenId, key)}>
              {row.tokenId.slice(0, showMoreCount)}... &nbsp;
              {copyTokenId.status && copyTokenId.index === key ? (
                <i className='fa fa-check-circle mr-1'></i>
              ) : (
                <span>
                  <i className='far fa-copy'></i>
                </span>
              )}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              {<img src={normalshapeSvg} className={classes.normalshape} />}
              {<div>{addCommas(ethers.utils.formatUnits(row.price, 18))}</div>}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {dateConvert(row.expiresAt)}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              {row.bidStatus === ""}
              <ActionButton
                color='dark'
                className={classes.actionBtn}
                onClick={() => handleCancelBid(key)}>
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
