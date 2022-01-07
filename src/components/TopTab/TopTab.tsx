import React from "react";
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
            <div className={classes.tabs_left}>
              <StyledTopTabBtn
                disableRipple
                onClick={handleLand}
                disabled={toptab_index === 1}
              >
                Land
              </StyledTopTabBtn>
              <StyledTopTabBtn disableRipple disabled={toptab_index === 2}>
                Collectibles
              </StyledTopTabBtn>
              <StyledTopTabBtn disableRipple disabled={toptab_index === 3}>
                Partners
              </StyledTopTabBtn>
              <StyledTopTabBtn disableRipple disabled={toptab_index === 4}>
                My Assets
              </StyledTopTabBtn>
              <StyledTopTabBtn disableRipple disabled={toptab_index === 5}>
                My Bids
              </StyledTopTabBtn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
