import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { HeaderStyle } from "./HeaderStyle";
import HeaderMobileMenu from "./component/HeaderMobileMenu/HeaderMobileMenu";
import HeaderSignInBar from "./component/HeaderSignInBar/HeaderSignInBar";
import { headerId } from "../../config/constant";
import HeaderSignInBtn from "./component/HeaderSignInBtn/HeaderSignInBtn";
import { useAppSelector } from "../../store/hooks";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useTranslation } from "react-i18next";

declare var window: any;

export default function Header() {
  const classes = HeaderStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const [headIndex, setHeaderIndex] = useState(headerId.marketplace);
  const loginAddress = useAppSelector(selectLoginAddress);
  const { t } = useTranslation();

  const handleSignIn = () => {
    if (window.ethereum !== undefined) {
      navigate(`/signin`);
    } else {
      window.open(
        "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
        "_blank"
      );
    }
  };

  const handleMarketPlace = () => {
    setHeaderIndex(headerId.marketplace);
    navigate("/");
  };

  const handleAdmin = () => {
    setHeaderIndex(headerId.admin);
    navigate("/admin/lands");
  };

  useEffect(() => {
    if (location.pathname.includes("/admin")) {
      setHeaderIndex(headerId.admin);
    } else {
      setHeaderIndex(headerId.marketplace);
    }
  }, [location.pathname]);

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
              className={
                headIndex === headerId.marketplace
                  ? classes.headerClickBtn
                  : classes.headerBtn
              }
              disableRipple
              onClick={handleMarketPlace}
            >
              <span></span>
              <span className={classes.headerLink}>{t("Marketplace")}</span>
              <span className={"active-border"}></span>
            </Button>
            {/* <Button
                className={
                  headIndex === headerId.admin
                    ? classes.headerClickBtn
                    : classes.headerBtn
                }
                disableRipple
                onClick={handleAdmin}
              >
                ADMIN
              </Button> */}
          </div>
          <HeaderMobileMenu />
          {window.ethereum && loginAddress ? (
            <HeaderSignInBar />
          ) : (
            <HeaderSignInBtn onClick={handleSignIn} />
          )}
        </div>
      </div>
    </>
  );
}
