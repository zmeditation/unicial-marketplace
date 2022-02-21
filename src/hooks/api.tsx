import { ApiUrl } from "../config/constant";
import axios from "axios";
import {
  EstateProxyAddress,
  EstateRegistryAbi,
} from "../config/contracts/EstateRegitryContract";
// import utility functions
import { generateContractInstance, generateSigner } from "../common/contract";
import { SetStateAction } from "react";
import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../config/contracts/SpaceRegistryContract";

declare var window: any;
var signer: any;
var estateRegistryContract: any;
var parcelRegistryContract: any;

signer = generateSigner(window.ethereum);

export const getParcelsByOwner = async (owner: any) => {
  try {
    parcelRegistryContract = generateContractInstance(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );
    const balance = (await parcelRegistryContract.balanceOf(owner)).toNumber();
    let tokenPromises = [];
    let axisPromises = [];
    for (let i = 0; i < balance; i++) {
      let tokenPromise = parcelRegistryContract.tokenOfOwnerByIndex(owner, i);
      console.log("tokenPromise", tokenPromise);
      let axisPromise = parcelRegistryContract.decodeTokenId(tokenPromise);
      console.log("axisPromise", axisPromise);
      axisPromises.push(axisPromise);
      // tokenPromises.push(tokenPromise);
      // let tokenPromises = parcelRegistryContract.decodeTokenId();
    }

    // let ownedTokens = await Promise.all(tokenPromises);

    // for (let i = 0; i < ownedTokens.length; i++) {
    //   ownedTokens[i] = ownedTokens[i];
    // }
    // console.log("ownedTokens", ownedTokens);
    // console.log("ownedTokens", ownedTokens.toString());
    // return ownedTokens;
    let ownedTokens = await Promise.all(axisPromises);
    return ownedTokens;
  } catch (error: any) {
    return [];
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
      console.log("tokenPromise", tokenPromise);
      tokenPromises.push(tokenPromise);
    }
    let ownedTokens = await Promise.all(tokenPromises);
    for (let i = 0; i < ownedTokens.length; i++) {
      ownedTokens[i] = ownedTokens[i].toNumber();
    }
    // console.log("ownedTokens", ownedTokens);
    return ownedTokens;
  } catch (error: any) {
    return [];
  }
};
