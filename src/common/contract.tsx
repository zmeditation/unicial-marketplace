import { ethers } from "ethers";

export const generateContractInstance = (
  contractAddress: string,
  contractAbi: any,
  signer: any
) => {
  let contract = new ethers.Contract(contractAddress, contractAbi, signer);
  return contract;
};

export const generateSigner = (ethereum: any) => {
  var provider = new ethers.providers.Web3Provider(ethereum);
  var signer = provider.getSigner();
  return signer;
};
