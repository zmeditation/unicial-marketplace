import { SignInStyle } from "./SignInStyle";
import { ethers } from "ethers";
import { nanoid } from "nanoid";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ActionButton from "../../components/Base/ActionButton";
import signinlogo from "../../assets/svg/signin_logo.svg";
import signinellipse1 from "../../assets/svg/signin_ellipse1.svg";
import signinellipse2 from "../../assets/svg/signin_ellipse2.svg";
import { CHAIN_INFO } from "../../config/constant";
import { setloginAddress } from "../../store/auth/actions";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

declare var window: any;
var provider: any;
var signer: any;

const generateSignature = () => {
  let currentTimestamp: string = Math.floor(
    new Date().getTime() / 1000
  ).toString();
  let rndString: string = nanoid();
  let signature: string =
    "Unicial: Verify your signin:\n\n" +
    "  - Current UTC timestamp: " +
    currentTimestamp +
    "\n" +
    "  - Signature: " +
    rndString;

  console.log("Signature string: " + signature);
  return signature;
};

export default function SignIn() {
  const classes = SignInStyle();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  var loginAddress: string;

  const getLoginAddress = async (signer: any, msgToSign: string) => {
    let signature = await signer.signMessage(msgToSign);

    // Make sure you arrayify the message if you want the bytes to be used as the message
    const recoveredAddress = ethers.utils.verifyMessage(msgToSign, signature);

    console.log("recoveredAddress", recoveredAddress);
    dispatch(setloginAddress(recoveredAddress));
    navigate("/auction");
    return recoveredAddress;
  };

  const handleSignIn = async () => {
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
      loginAddress = await getLoginAddress(signer, generateSignature());
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

        loginAddress = await getLoginAddress(signer, generateSignature());
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

            loginAddress = await getLoginAddress(signer, generateSignature());
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
          <img
            src={signinellipse1}
            alt="ellipse"
            className={classes.signinellipse1}
          ></img>
          <img
            src={signinellipse2}
            alt="ellipse"
            className={classes.signinellipse2}
          ></img>
          <div className={classes.starWalletIcon}>
            <img src={signinlogo} alt="wallet_img" />
          </div>
          <div className={classes.headerText}>Get Started.</div>
          <div className={classes.descriptionContainer}>
            You can use{" "}
            <a
              href="https://metamask.io/"
              target="_blank"
              className={classes.browserLink}
            >
              MetaMask
            </a>{" "}
            extension or your email account.
          </div>
          <ActionButton
            color="light"
            className={classes.connectBtn}
            onClick={handleSignIn}
          >
            Connect
            <CallMadeIcon className={classes.callmadeicon} />
          </ActionButton>
        </div>
      </div>
    </>
  );
}
