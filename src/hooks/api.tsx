import { ApiUrl } from "../config/constant";
import axios from "axios";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../config/contracts/EstateRegitryContract";
// import utility functions
import { generateContractInstance, generateSigner } from "../common/contract";
import { SetStateAction } from "react";

declare var window: any;
var signer: any, estateRegistryContract: any;

signer = generateSigner(window.ethereum);

export const getParcelsByOwner = async (owner: any) => {
  try {
    const response = await axios.get(`${ApiUrl}/api/v1/parcel/owner/${owner}`);
    return response.data.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const getEstatesByOwner = async (owner: any) => {
  try {
    estateRegistryContract = generateContractInstance(
      EstateProxyAddress,
      EstateRegistryAbi,
      signer
    );
    const balance = (await estateRegistryContract.balanceOf(owner)).toNumber();
    console.log("balance.toNumber()", balance);
    let tokenPromises = [];
    for (let i = 0; i < balance; i++) {
      let tokenPromise = estateRegistryContract.tokenOfOwnerByIndex(owner, i);
      tokenPromises.push(tokenPromise);
    }
    let ownedTokens = await Promise.all(tokenPromises);
    for (let i = 0; i < ownedTokens.length; i++) {
      ownedTokens[i] = ownedTokens[i].toNumber();
    }
    console.log("ownedTokens", ownedTokens);
    return ownedTokens;
  } catch (error: any) {
    return [];
  }
};
