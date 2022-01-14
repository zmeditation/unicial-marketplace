import React, { useEffect } from "react";
import { topTabIndex } from "../../config/constant";
import { TopTabStyle, StyledTopTabBtn } from "./TopTabStyle";
import { useLocation, useNavigate } from "react-router";

export default function TopTab() {
  const classes = TopTabStyle();
  const location = useLocation();
  const navigate = useNavigate();
  const [toptab_index, setToptabIndex] = React.useState(1);

  const handleLand = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    if (location.pathname.includes("/lands")) {
      setToptabIndex(topTabIndex.land);
    } else if (location.pathname.includes("/auction")) {
      setToptabIndex(topTabIndex.auction);
    }
  }, [location.pathname]);
  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.tabsLeft}>
              <StyledTopTabBtn
                disableRipple
                onClick={() => handleLand("/lands")}
                disabled={toptab_index === topTabIndex.land}
              >
                Lands
              </StyledTopTabBtn>
              <StyledTopTabBtn
                disableRipple
                onClick={() => handleLand("/auction")}
                disabled={toptab_index === topTabIndex.auction}
              >
                Auction
              </StyledTopTabBtn>
              {/* <StyledTopTabBtn
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
