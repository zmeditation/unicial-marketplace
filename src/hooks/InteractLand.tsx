import { ethers } from "ethers";
import { CHAIN_INFO } from "./../config/constant";
import { getProvider } from "./Common";
import {
  SpaceRegistryAbi,
  SpaceProxyAddress,
} from "../config/contracts/SpaceRegistryContract";

declare var window: any;
var provider: any;
var signer: any;
var loginAddress: string;

var landContract;

export const createEstateWithMetaData = async (
  axisX_array: any,
  axisY_array: any,
  beneficiaryAddress: any,
  metaData: any
) => {
  provider = getProvider();
  signer = provider.getSigner();
  landContract = new ethers.Contract(
    SpaceProxyAddress,
    SpaceRegistryAbi,
    signer
  );

  const createEstateWithMetaDataTx =
    await landContract.createEstateWithMetadata(
      axisX_array,
      axisY_array,
      beneficiaryAddress,
      metaData
    );
  await createEstateWithMetaDataTx.wait;
};
