import { SignInStyle } from "./SignInStyle";
import { ethers } from "ethers";

import ActionButton from "../../components/Base/ActionButton";
import starWallet_svg from "../../assets/svg/starWallet.svg";
import { CHAIN_INFO } from "../../config/constant";
import {
  SpaceRegistryAbi,
  SpaceRegistryAddress,
  SpaceProxyAddress,
  SpaceProxyAbi,
} from "../../config/contracts/SpaceRegistryContract";
import { SpaceAuctionAddress } from "../../config/contracts/SpaceAuctionContract";
import { setloginAddress } from "../../store/auth/actions";
import { useAppDispatch } from "../../store/hooks";

declare var window: any;
var provider: any;
var signer: any;

export default function SignIn() {
  const classes = SignInStyle();
  const dispatch = useAppDispatch();

  var loginAddress: string;
  var isAdmin: boolean;
  var spaceProxyContract: any, spaceRegistryContract: any;

  const addSpaceAuctionContractAsAdmin = async (
    spaceProxyContract: any,
    SpaceAuctionAddress: string
  ) => {
    console.log("SpaceAuctionAddress: ", SpaceAuctionAddress);
    let authorizedDeployStatus = await spaceProxyContract.authorizedDeploy(
      SpaceAuctionAddress
    );

    let proxyOwner = await spaceProxyContract.proxyOwner();
    console.log("proxyOwner: ", proxyOwner);

    console.log(
      "authorizedDeployStatus for ",
      SpaceAuctionAddress,
      "is",
      authorizedDeployStatus
    );
    if (!authorizedDeployStatus) {
      console.log("To be Authorized Address: ", SpaceAuctionAddress);

      spaceProxyContract = new ethers.Contract(
        SpaceProxyAddress,
        SpaceRegistryAbi,
        signer
      );

      let authorizeSpaceAuctionTx = await spaceProxyContract.authorizeDeploy(
        SpaceAuctionAddress
      );

      console.log("authorizeSpaceAuctionTx");
      console.log(authorizeSpaceAuctionTx);
      await authorizeSpaceAuctionTx.wait();

      console.log(
        "SpaceAuctionAddress" +
          SpaceAuctionAddress +
          "is successfully authorized as Space token deployer"
      );
    } else {
      console.log(
        "SpaceAuctionAddress" +
          SpaceAuctionAddress +
          "is already authorized as Space token deployer"
      );
    }
  };

  const assignSpaceForTest = async (
    spaceProxyContract: any,
    x: number,
    y: number
  ) => {
    console.log("x, y: ", x, y);
    let ownerOfSpace = await spaceProxyContract.ownerOfSpace(x, y);
    console.log(
      `${(x.toString(), y.toString())} is assigned before assign`,
      ownerOfSpace
    );

    let assignSpaceTx = await spaceProxyContract.assignNewRood(
      x,
      y,
      "0x8734CB972d36a740Cc983d5515e160C373A4a016"
    );

    await assignSpaceTx.wait();

    ownerOfSpace = await spaceProxyContract.ownerOfSpace(x, y);
    console.log(
      `${(x.toString(), y.toString())} is assigned after assign`,
      ownerOfSpace
    );
  };

  const spaceRegistryAuthorized = async (
    signer: any,
    connectedAddress: string
  ) => {
    spaceProxyContract = new ethers.Contract(
      SpaceProxyAddress,
      SpaceProxyAbi,
      signer
    );

    spaceRegistryContract = new ethers.Contract(
      SpaceProxyAddress,
      SpaceRegistryAbi,
      signer
    );

    let spaceBalance = await spaceRegistryContract.balanceOf(connectedAddress);
    console.log("Space balance of " + connectedAddress + "is: " + spaceBalance);

    let proxyOwner = await spaceProxyContract.proxyOwner();
    let currentContract = await spaceProxyContract.currentContract();
    let isAuthorizedDeploy = await spaceProxyContract.authorizedDeploy(
      SpaceAuctionAddress
    );

    // console.log("isAuthorizedDeploy", isAuthorizedDeploy);
    // console.log("signer in spaceRegistryAuthorized");

    console.log("currentContract", currentContract);

    console.log(signer);
    if (!isAuthorizedDeploy) {
      //add auction contract as a authorizedDeployer
      await addSpaceAuctionContractAsAdmin(
        spaceProxyContract,
        SpaceAuctionAddress
      );
    }

    isAdmin = proxyOwner === connectedAddress || isAuthorizedDeploy;
    console.log("isAdmin", isAdmin);

    //assign (0, 0) for test
    // await assignSpaceForTest(spaceProxyContract, 0, 20);

    return isAdmin;
  };

  const getLoginAddress = async (signer: any, msgToSign: string) => {
    let signature = await signer.signMessage(msgToSign);

    // Make sure you arrayify the message if you want the bytes to be used as the message
    const recoveredAddress = ethers.utils.verifyMessage(msgToSign, signature);
    console.log("recoveredAddress", recoveredAddress);
    dispatch(setloginAddress(recoveredAddress));
    return recoveredAddress;
  };

  const handleSignIn = async () => {
    var accounts = [];
    console.log(window);
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();

      console.log("signer in handleSignIn");
      console.log(await signer.getAddress());
    } else {
      window.alert(
        "Metamask seem to be not installed. Please install metamask first and try again."
      );
    }

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
            window.alert("Add chain done & Recovered address: " + loginAddress);
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
