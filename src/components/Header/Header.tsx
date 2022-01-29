import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import { HeaderStyle } from "./HeaderStyle";
import HeaderMobileMenu from "./component/HeaderMobileMenu/HeaderMobileMenu";
import HeaderSignInBar from "./component/HeaderSignInBar/HeaderSignInBar";
import { headerId } from "../../config/constant";
import HeaderSignInBtn from "./component/HeaderSignInBtn/HeaderSignInBtn";
import { useAppSelector } from "../../store/hooks";
import { selectLoginAddress } from "../../store/auth/selectors";
import { useTranslation, withTranslation, Trans } from "react-i18next";

export default function Header() {
  const classes = HeaderStyle();
  const navigate = useNavigate();
  const location = useLocation();
  const [headIndex, setHeaderIndex] = useState(headerId.marketplace);
  const loginAddress = useAppSelector(selectLoginAddress);
  const { t, i18n } = useTranslation();

  const handleSignIn = () => {
    navigate(`/signin`);
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
              <span className={classes.headerLink}>Marketplace</span>
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
