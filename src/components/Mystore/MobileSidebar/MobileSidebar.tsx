import React from "react";
import { MobileSidebarStyle } from "./MobileSidebarStyle";
import { StyledTopTabBtn } from "../../TopTab/TopTabStyle";
import { useTranslation } from "react-i18next";
export default function MobileSidebar() {
  const classes = MobileSidebarStyle();
  const [menuIndex, setmenuIndex] = React.useState("Collections");
  const handlemenu = (index: string) => {
    setmenuIndex(index);
  };
  const {t, i18n} = useTranslation();
  return (
    <>
      <div className={classes.root}>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Collections")}
          disabled={menuIndex === "Collections"}
        >
          {t("Collections")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Land")}
          disabled={menuIndex === "Land"}
        >
          {t("Land")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Wearables")}
          disabled={menuIndex === "Wearables"}
        >
          {t("Wearables")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Names")}
          disabled={menuIndex === "Names"}
        >
          {t("Names")}
        </StyledTopTabBtn>
        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Sales")}
          disabled={menuIndex === "Sales"}
        >
          {t("Sales")}
        </StyledTopTabBtn>

        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Bids")}
          disabled={menuIndex === "Bids"}
        >
          {t("Bids")}
        </StyledTopTabBtn>

        <StyledTopTabBtn
          disableRipple
          onClick={() => handlemenu("Settings")}
          disabled={menuIndex === "Settings"}
        >
          {t("Settings")}
        </StyledTopTabBtn>
      </div>
    </>
  );
}
