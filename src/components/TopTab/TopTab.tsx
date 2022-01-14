import React from "react";
import { topTabIndex } from "../../config/constant";
import { TopTabStyle, StyledTopTabBtn } from "./TopTabStyle";
import { useLocation } from "react-router";

export default function TopTab() {
  const classes = TopTabStyle();
  const location = useLocation();

  const [toptab_index, setToptabIndex] = React.useState(1);
  const handleLand = () => {
    setToptabIndex(1);
  };

  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.tabsLeft}>
              <StyledTopTabBtn
                disableRipple
                onClick={handleLand}
                disabled={toptab_index === topTabIndex.land}
              >
                Auction
              </StyledTopTabBtn>
              {/* <StyledTopTabBtn
                disableRipple
                disabled={toptab_index === topTabIndex.collectibles}
              >
                Collectibles
              </StyledTopTabBtn>
              <StyledTopTabBtn
                disableRipple
                disabled={toptab_index === topTabIndex.partners}
              >
                Partners
              </StyledTopTabBtn>
              <StyledTopTabBtn
                disableRipple
                disabled={toptab_index === topTabIndex.myassets}
              >
                My Assets
              </StyledTopTabBtn>
              <StyledTopTabBtn
                disableRipple
                disabled={toptab_index === topTabIndex.mybids}
              >
                My Bids
              </StyledTopTabBtn> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
