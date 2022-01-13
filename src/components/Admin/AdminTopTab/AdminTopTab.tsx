import React from "react";
import { adminTopTabIndex } from "../../../config/adminConstant";
import { AdminTopTabStyle, StyledTopTabBtn } from "./AdminTopTabStyle";
import { useLocation } from "react-router";

export default function TopTab() {
  const classes = AdminTopTabStyle();
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
                disabled={toptab_index === adminTopTabIndex.land}
              >
                Land
              </StyledTopTabBtn>
              <StyledTopTabBtn
                disableRipple
                disabled={toptab_index === adminTopTabIndex.estate}
              >
                Estate
              </StyledTopTabBtn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
