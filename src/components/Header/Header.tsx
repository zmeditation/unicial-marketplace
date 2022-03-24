import { useNavigate, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { HeaderStyle } from "./HeaderStyle";
import HeaderMobileMenu from "./component/HeaderMobileMenu/HeaderMobileMenu";
import HeaderSignInBar from "./component/HeaderSignInBar/HeaderSignInBar";
import HeaderSignInBtn from "./component/HeaderSignInBtn/HeaderSignInBtn";
import { useAppSelector } from "../../store/hooks";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useTranslation } from "react-i18next";

export default function Header() {
  const classes = HeaderStyle();
  const navigate = useNavigate();
  const loginAddress = useAppSelector(selectLoginAddress);
  const { t } = useTranslation();

  const handleSignIn = () => {
    navigate(`/signin`);
  };

  const handleRoute = (route: string) => {
    window.open(route);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.headermenuContainer}>
            <Link to="/" className={classes.logoContent}>
              <img src={"/logo.svg"} className={classes.logo} alt="symbol" />
              <span className={classes.logoName}>{t("UNICIAL")}</span>
            </Link>
            <Button
              className={classes.headerBtn}
              disableRipple
              onClick={() => handleRoute("https://unicial.org")}
            >
              <span></span>
              <span className={classes.headerLink}>{t("Home")}</span>
              <span className={"active-border"}></span>
            </Button>
            <Button
              className={classes.headerClickBtn}
              disableRipple
              onClick={() => navigate("/")}
            >
              <span></span>
              <span className={classes.headerLink}>{t("Marketplace")}</span>
              <span className={"active-border"}></span>
            </Button>
            <Button
              className={classes.headerBtn}
              disableRipple
              onClick={() => handleRoute("https://doc.unicial.org")}
            >
              <span></span>
              <span className={classes.headerLink}>{t("Documents")}</span>
              <span className={"active-border"}></span>
            </Button>
            <Button
              className={classes.headerBtn}
              disableRipple
              onClick={() => handleRoute("https://blog.unicial.org")}
            >
              <span></span>
              <span className={classes.headerLink}>{t("Blog")}</span>
              <span className={"active-border"}></span>
            </Button>
          </div>
          <HeaderMobileMenu />
          {loginAddress ? (
            <HeaderSignInBar />
          ) : (
            <HeaderSignInBtn onClick={handleSignIn} />
          )}
        </div>
      </div>
    </>
  );
}
