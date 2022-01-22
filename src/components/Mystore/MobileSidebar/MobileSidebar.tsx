import React from "react";
import { MobileSidebarStyle } from "./MobileSidebarStyle";
import { StyledTopTabBtn } from "../../TopTab/TopTabStyle";
export default function MobileSidebar() {
  const classes = MobileSidebarStyle();
  const [menuIndex, setmenuIndex] = React.useState("Collections");
  const handlemenu = (index: string) => {
    setmenuIndex(index);
  };
  return (
    <>
      <div className={classes.root}>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Collections")}
          disabled={menuIndex === "Collections"}
        >
          Collections
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Land")}
          disabled={menuIndex === "Land"}
        >
          Land
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Wearables")}
          disabled={menuIndex === "Wearables"}
        >
          Wearables
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Names")}
          disabled={menuIndex === "Names"}
        >
          Names
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Sales")}
          disabled={menuIndex === "Sales"}
        >
          Sales
        </StyledTopTabBtn>

        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Bids")}
          disabled={menuIndex === "Bids"}
        >
          Bids
        </StyledTopTabBtn>

        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Settings")}
          disabled={menuIndex === "Settings"}
        >
          Settings
        </StyledTopTabBtn>
      </div>
    </>
  );
}
