import { ethers } from "ethers";

declare var window: any;
var provider: any;

export const getProvider = () => {
  provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  return provider;
};
