import React from "react";
import { TopTabStyle, StyledTopTabBtn } from "./TopTabStyle";
import { useLocation } from "react-router";

export default function TopTab() {
  const classes = TopTabStyle();
  const location = useLocation();

  console.log(location.pathname);

  const [toptab_index, setToptabIndex] = React.useState(1);
  const handleLand = () => {
    setToptabIndex(1);
  };
  const handleCollectibles = () => {
    setToptabIndex(2);
  };
  const handlePartners = () => {
    setToptabIndex(3);
  };
  const handleMyAssets = () => {
    setToptabIndex(4);
  };
  const handleMyBids = () => {
    setToptabIndex(5);
  };

  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.tabs_left}>
              <StyledTopTabBtn
                onClick={handleLand}
                disabled={toptab_index === 1}
              >
                Land
              </StyledTopTabBtn>
              <StyledTopTabBtn
                onClick={handleCollectibles}
                disabled={toptab_index === 2}
              >
                Collectibles
              </StyledTopTabBtn>
              <StyledTopTabBtn
                onClick={handlePartners}
                disabled={toptab_index === 3}
              >
                Partners
              </StyledTopTabBtn>
              <StyledTopTabBtn
                onClick={handleMyAssets}
                disabled={toptab_index === 4}
              >
                My Assets
              </StyledTopTabBtn>
              <StyledTopTabBtn
                onClick={handleMyBids}
                disabled={toptab_index === 5}
              >
                My Bids
              </StyledTopTabBtn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
