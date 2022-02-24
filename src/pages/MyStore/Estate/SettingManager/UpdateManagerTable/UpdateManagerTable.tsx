import { useStyles } from "./UpdateManagerTableStyle";
import StageMarket from "../../../../../components/StageMarket/StageMarket";
import { TableRow, TableCell } from "@material-ui/core";
import normalshapeSvg from "../../../../assets/svg/normalshape.svg";
import ActionButton from "../../../../../components/Base/ActionButton";
import Tag from "../../../../../components/Base/Tag";
import { onePageCount, CHAIN_INFO } from "../../../../../config/constant";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { addCommas, dateConvert } from "../../../../../common/utils";
import { showMoreCount } from "../../../../../config/constant";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { showAlert } from "../../../../../store/alert";
import { BigNumber, ethers } from "ethers";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../../common/contract";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../../../../../config/contracts/EstateRegitryContract";

import { selectLoginAddress } from ".././../../../../store/auth/selectors";
declare var window: any;
var signer: any, estateRegistryContractwithSigner: any;

interface StagingTableProps {
  columns?: any;
  rows?: any;
  curPage: number;
  stepIndex?: number;
  onRowClick(key: number): any;
}

const UpdateManagerTable = ({
  columns,
  rows,
  curPage,
  stepIndex,
  onRowClick,
}: StagingTableProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  //   useEffect(() => {}, [rows]);

  signer = generateSigner(window.ethereum);

  const loginAddress = useAppSelector(selectLoginAddress);

  const handleCancel = async (loginAddress: string, managerAddress: string) => {
    estateRegistryContractwithSigner = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    let cancelManagerTx =
      await estateRegistryContractwithSigner.setUpdateManager(
        loginAddress,
        managerAddress,
        false
      );
    await cancelManagerTx.wait();
    dispatch(
      showAlert({
        message: "Successfully canceled.",
        severity: "success",
      })
    );
  };
  const handleAccept = async (loginAddress: string, managerAddress: string) => {
    estateRegistryContractwithSigner = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    let acceptManagerTx =
      await estateRegistryContractwithSigner.setUpdateManager(
        loginAddress,
        managerAddress,
        true
      );
    await acceptManagerTx.wait();
    dispatch(
      showAlert({
        message: "Successfully accepted as a manager.",
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
            className={clsx({ [classes.targetRow]: stepIndex === key })}
          >
            <TableCell className={clsx(classes.tableCell, classes.tokenId)}>
              {row.args[1].slice(0, showMoreCount)}
            </TableCell>
            <TableCell className={clsx(classes.tableCell)}>
              {row.args[3] === false ? "unset" : "seted"}
            </TableCell>
            <TableCell className={clsx(classes.tableCell, classes.priceCell)}>
              {row.args[3] === true ? (
                <ActionButton
                  color="dark"
                  className={classes.actionBtn}
                  onClick={() => handleCancel(row.args[0], row.args[1])}
                >
                  {t("Cancel")}
                </ActionButton>
              ) : (
                <ActionButton
                  color="light"
                  className={classes.actionBtn}
                  onClick={() => handleAccept(row.args[0], row.args[1])}
                >
                  {t("Accept")}
                </ActionButton>
              )}
            </TableCell>
          </TableRow>
        ))
    ) : (
      <></>
    );
  return (
    <>
      <StageMarket columns={columns} parcelRows={tableRows} />
    </>
  );
};

export default UpdateManagerTable;
