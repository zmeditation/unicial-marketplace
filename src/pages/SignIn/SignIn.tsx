import { SignInStyle } from "./SignInStyle";
import { ethers } from "ethers";

import ActionButton from "../../components/Base/ActionButton";
import starWallet_svg from "../../assets/svg/starWallet.svg";
import { CHAIN_INFO } from "../../config/constant";
import { setloginAddress } from "../../store/auth/actions";
import { useAppDispatch } from "../../store/hooks";

declare var window: any;
var provider: any;
var signer: any;

export default function SignIn() {
  const classes = SignInStyle();
  const dispatch = useAppDispatch();

  var loginAddress: string;

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
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
    } else {
      window.alert(
        "Metamask seem to be not installed. Please install metamask first and try again."
      );
    }

    // get current network id
    const { chainId } = await provider.getNetwork();
    let znxChainId: number = parseInt(CHAIN_INFO.TESTNET.chainId, 16);

    // check current chain id is equal to Zilionixx Mainnet
    if (chainId === znxChainId) {
      loginAddress = await getLoginAddress(signer, "Hello World");
      // isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
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
        // isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
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
            // isAdmin = await spaceRegistryAuthorized(signer, loginAddress);
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
