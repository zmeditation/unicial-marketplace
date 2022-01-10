import React from "react";
import { Box, Button } from "@material-ui/core";

import { HeaderStyle } from "./HeaderStyle";
import HeaderMobileMenu from "./component/HeaderMobileMenu/HeaderMobileMenu";
import HeaderSignInBar from "./component/HeaderSignInBar/HeaderSignInBar";
import { tabId } from "../../config/constant";

export default function Header() {
  const classes = HeaderStyle();
  const [head_index, setHeaderIndex] = React.useState(tabId.marketplace);
  const handleMarketPlace = () => {
    setHeaderIndex(tabId.marketplace);
  };

  const [isSignInclicked, setIsSignInclicked] = React.useState(0);
  const handleSignIn = () => {
    setIsSignInclicked(1);
  };

  var isSigned = 1;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div style={{ position: "relative" }}>
            <div className={classes.headermenuContainer}>
              <a href="/">
                <img src={"/logo.svg"} className={classes.logo} alt="symbol" />
              </a>

              <Button
                className={
                  head_index === tabId.marketplace
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
                  head_index === tabId.builder
                    ? classes.headerClickBtn
                    : classes.headerBtn
                }
                disableRipple
              >
                Builder
              </Button>
              <Button
                className={
                  head_index === tabId.docs
                    ? classes.headerClickBtn
                    : classes.headerBtn
                }
                disableRipple
              >
                Docs
              </Button>
              <Button
                className={
                  head_index === tabId.events
                    ? classes.headerClickBtn
                    : classes.headerBtn
                }
                disableRipple
              >
                Events
              </Button>
              <Button
                className={
                  head_index === tabId.dao
                    ? classes.headerClickBtn
                    : classes.headerBtn
                }
                disableRipple
              >
                DAO
              </Button>
              <Button
                className={
                  head_index === tabId.blog
                    ? classes.headerClickBtn
                    : classes.headerBtn
                }
                disableRipple
              >
                Blog
              </Button>
            </div>
          </div>
          <HeaderMobileMenu />
          <div
            className={
              isSigned === 0 ? classes.viewSignin : classes.unviewSignin
            }
          >
            <Box
              className={
                isSignInclicked === 0 ? classes.signnormal : classes.signclicked
              }
              onClick={handleSignIn}
            >
              Sign In
            </Box>
          </div>
          <div
            className={
              isSigned === 0
                ? classes.unviewHeaderSignInBar
                : classes.viewHeaderSignInBar
            }
          >
            <HeaderSignInBar />
          </div>
        </div>
      </div>
    </>
  );
}
