import { useStyles } from "./ReceiveBidTableStyle";
import StageMarket from "../../../StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import ActionButton from "../../../Base/ActionButton";
import { onePageCount } from "../../../../config/constant";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { BigNumber, ethers } from "ethers";
import { addCommas, dateConvert } from "../../../../common/utils";
import { showMoreCount } from "../../../../config/constant";
import { useEffect, useState } from "react";
import copy from "clipboard-copy";
import { showAlert } from "../../../../store/alert";

import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../../../config/contracts/SpaceRegistryContract";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import { BidContractAddress } from "../../../../config/contracts/BidContract";

declare var window: any;
var signer: any, spaceRegistryContract: any;

interface StagingTableProps {
  columns?: any;
  rows: any;
  curPage: number;
  stepIndex?: number;
  onRowClick(key: number): any;
}

const ReceiveBidTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
  onRowClick,
}: StagingTableProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const loginAddress = useAppSelector(selectLoginAddress);
  const [copyAddress, setcopyAddress] = useState<any>({
    status: false,
    index: null,
  });
  const [copyTokenId, setcopyTokenId] = useState<any>({
    status: false,
    index: null,
  });

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

  const handleAcceptBid = async (key: number) => {
    signer = generateSigner(window.ethereum);
    spaceRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );

    let receiveTx = await spaceRegistryContract[
      "safeTransferFrom(address,address,uint256,bytes)"
    ](loginAddress, BidContractAddress , BigNumber.from(rows.tokenId[key]), "");

    await receiveTx.wait();
    dispatch(
      showAlert({
        message: "Recieved order is successfully published.",
        severity: "success",
      })
    );
  };

  const tableRows =
    rows !== undefined ? (
      rows.data
        .slice((curPage - 1) * onePageCount, curPage * onePageCount)
        .map((row: any, key: any) => (
          <TableRow
            key={key}
            onClick={() => onRowClick(key)}
            className={clsx({ [classes.targetRow]: stepIndex === key })}>
            <TableCell
              className={clsx(classes.tableCell, classes.tokenAddress)}
              onClick={() => handleCopyAddress(row[0], key)}>
              {row[0].slice(0, showMoreCount)}... &nbsp;
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
              onClick={() => handleCopyTokenId(row[1], key)}>
              {row[1].slice(0, showMoreCount)}... &nbsp;
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
              {<div>{addCommas(ethers.utils.formatUnits(row[2], 18))}</div>}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {dateConvert(row[3])}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              <ActionButton
                color='light'
                className={classes.actionBtn}
                onClick={() => handleAcceptBid(key)}>
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

export default ReceiveBidTable;
