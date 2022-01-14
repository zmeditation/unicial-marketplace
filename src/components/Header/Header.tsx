import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Box, Button } from "@material-ui/core";
import { HeaderStyle } from "./HeaderStyle";
import HeaderMobileMenu from "./component/HeaderMobileMenu/HeaderMobileMenu";
import HeaderSignInBar from "./component/HeaderSignInBar/HeaderSignInBar";
import { headerId } from "../../config/constant";

export default function Header() {
  const classes = HeaderStyle();
  const navigate = useNavigate();
  const location = useLocation();

  let headerIndexId;
  if (location.pathname.includes("/admin")) {
    headerIndexId = headerId.admin;
  } else {
    headerIndexId = headerId.marketplace;
  }
  const [headIndex, setHeaderIndex] = useState(headerIndexId);
  const [isSignInclicked, setIsSignInclicked] = useState(0);
  const handleSignIn = () => {
    setIsSignInclicked(1);
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
  var isSigned = 0;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div style={{ position: "relative" }}>
            <div className={classes.headermenuContainer}>
              <Link to="/">
                <img src={"/logo.svg"} className={classes.logo} alt="symbol" />
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
                Marketplace
              </Button>
              <Button
                className={
                  headIndex === headerId.admin
                    ? classes.headerClickBtn
                    : classes.headerBtn
                }
                disableRipple
                onClick={handleAdmin}
              >
                Admin
              </Button>
            </div>
          </div>
          <HeaderMobileMenu />
          {isSigned === 0 ? (
            <Box
              className={
                location.pathname === "/signin"
                  ? classes.signclicked
                  : classes.signnormal
              }
              onClick={handleSignIn}
            >
              Sign In
            </Box>
          ) : (
            <HeaderSignInBar />
          )}
        </div>
      </div>
    </>
  );
}
