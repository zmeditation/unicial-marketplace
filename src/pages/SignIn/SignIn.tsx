import { SignInStyle } from "./SignInStyle";
import ActionButton from "../../components/Base/ActionButton";
import starWallet_svg from "../../assets/svg/starWallet.svg";

export default function SignIn() {
  const classes = SignInStyle();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.headerText}>Get Started</div>
          <div className={classes.starWalletIcon}>
            <img src={starWallet_svg} />
          </div>
          <div className={classes.descriptionContainer}>
            You can use mobile browsers such as{" "}
            <a href="#" className={classes.browserLink}>
              Coinbase Wallet
            </a>{" "}
            or{" "}
            <a href="#" className={classes.browserLink}>
              imToken
            </a>
            .
          </div>
          <ActionButton color="red" className={classes.connectBtn}>
            CONNECT
          </ActionButton>
        </div>
      </div>
    </>
  );
}
