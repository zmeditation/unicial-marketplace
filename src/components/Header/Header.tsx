import React from "react";
import { Button } from "@material-ui/core";

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

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div style={{ position: "relative" }}>
            <div className={classes.headermenu_container}>
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
          {/* <Button className={classes.signBtn} >
            SIGN IN
          </Button> */}
          <div>
            <HeaderSignInBar />
          </div>
        </div>
      </div>
    </>
  );
}
