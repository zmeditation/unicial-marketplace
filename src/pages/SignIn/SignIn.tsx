import React from "react";
import { SignInStyle } from "./SignInStyle";
import { ethers } from "ethers";

import ActionButton from "../../components/Base/ActionButton";
import starWallet_svg from "../../assets/svg/starWallet.svg";
import { CHAIN_INFO } from "../../config/constant";
import {
  SpaceRegistryAbi,
  SpaceRegistryAddress,
} from "../../config/contracts/SpaceRegistryContract";
import { parseBytes32String } from "ethers/lib/utils";

declare var window: any;

export default function SignIn() {
  const classes = SignInStyle();

  var loginAddress: string;
  var isAdmin: boolean;

  var spaceRegistryContract: any;
  const assignSpaceForTest = async (
    spaceRegistryContract: any,
    x: number,
    y: number
  ) => {
    console.log("x, y: ", x, y);
    let ownerOfSpace = await spaceRegistryContract.ownerOfSpace(x, y);
    console.log(
      `${(x.toString(), y.toString())} is assigned before assign`,
      ownerOfSpace
    );

    let assignSpaceTx = await spaceRegistryContract.assignNewRood(
      x,
      y,
      "0x8734CB972d36a740Cc983d5515e160C373A4a016"
    );

    await assignSpaceTx.wait();

    ownerOfSpace = await spaceRegistryContract.ownerOfSpace(x, y);
    console.log(
      `${(x.toString(), y.toString())} is assigned after assign`,
      ownerOfSpace
    );
  };

  const spaceRegistryAuthorized = async (
    signer: any,
    connectedAddress: string
  ) => {
    spaceRegistryContract = new ethers.Contract(
      SpaceRegistryAddress,
      SpaceRegistryAbi,
      signer
    );

    let proxyOwner = await spaceRegistryContract.proxyOwner();
    let isAuthorizedDeploy = await spaceRegistryContract.authorizedDeploy(
      connectedAddress
    );
    isAdmin = proxyOwner === connectedAddress || isAuthorizedDeploy;
    console.log("isAdmin", isAdmin);

    //assign (0, 0) for test
    await assignSpaceForTest(spaceRegistryContract, 0, 20);

    return isAdmin;
  };

  const getLoginAddress = async (signer: any, msgToSign: string) => {
    let signature = await signer.signMessage(msgToSign);

    // Make sure you arrayify the message if you want the bytes to be used as the message
    const recoveredAddress = ethers.utils.verifyMessage(msgToSign, signature);

    return recoveredAddress;
  };
  const handleSignIn = async () => {
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    var signer = provider.getSigner();

    var accounts = [];
    if (window.ethereum) {
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else {
      window.alert(
        "Metamask seem to be not installed. Please install metamask first and try again."
      );
    }

    if (accounts.length > 0) {
      // get current network id
      console.log("this is account lenth", accounts.length);
      const { chainId } = await provider.getNetwork();
      let znxChainId: number = parseInt(CHAIN_INFO.TESTNET.chainId, 16);

      // check current chain id is equal to Zilionixx Mainnet
      if (chainId === znxChainId) {
        loginAddress = await getLoginAddress(signer, "Hello World");
        isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
        window.alert("Recovered address: " + loginAddress);
      } else {
        let ethereum = window.ethereum;
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: CHAIN_INFO.TESTNET.chainId }],
          });

          // switch provider and signer to zilionixx network
          provider = new ethers.providers.Web3Provider(window.ethereum);
          signer = provider.getSigner();

          loginAddress = await getLoginAddress(signer, "Hello World");
          isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
          window.alert(
            "Switched chain done & Recovered address: " + loginAddress
          );
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: CHAIN_INFO.TESTNET.chainId,
                    chainName: CHAIN_INFO.TESTNET.chainName,
                    rpcUrls: CHAIN_INFO.TESTNET.rpcUrls /* ... */,
                  },
                ],
              });

              // switch provider and signer to zilionixx network
              provider = new ethers.providers.Web3Provider(window.ethereum);
              signer = provider.getSigner();

              loginAddress = await getLoginAddress(signer, "Hello World");
              isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
              window.alert(
                "Add chain done & Recovered address: " + loginAddress
              );
            } catch (addError) {
              // handle "add" error
              window.alert(
                "Can not add Zilionixx network. Please add Zilionixx network."
              );
            }
          }
          // handle other "switch" errors
        }
      }
    } else {
      window.alert("No address is connected to this site");
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.headerText}>Get Started</div>
          <div className={classes.starWalletIcon}>
            <img src={starWallet_svg} alt="wallet_img" />
          </div>
          <div className={classes.descriptionContainer}>
            You can use mobile browsers such as{" "}
            <a href="/signin" className={classes.browserLink}>
              Coinbase Wallet
            </a>{" "}
            or{" "}
            <a href="/signin" className={classes.browserLink}>
              imToken
            </a>
            .
          </div>
          <ActionButton
            color="red"
            className={classes.connectBtn}
            onClick={handleSignIn}
          >
            CONNECT
          </ActionButton>
        </div>
      </div>
    </>
  );
}
