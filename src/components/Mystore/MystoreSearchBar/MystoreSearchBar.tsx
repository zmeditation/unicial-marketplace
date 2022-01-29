import React from "react";
import {
  MystoreSearchBarStyle,
  StyledListPopover,
  StyledMenuItem,
} from "./MystoreSearchBarStyle";
import search_svg from "./../../../assets/svg/search.svg";
import { Box } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import filterDownArrowSvg from "../../../assets/svg/filterDownArrow.svg";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";
import { ListdropdownData2 } from "../../../config/ListdropdownData/ListdropdownData";

export default function MystoreSearchBar() {
  const classes = MystoreSearchBarStyle();
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [listIndex, setlistIndex] = React.useState("Cheapest");

  const handleCheapest = () => {
    setlistIndex("Cheapest");
    handleClose();
  };
  const handleRecentlyListied = () => {
    setlistIndex("Recently listed");
    handleClose();
  };
  const handleRecentlySold = () => {
    setlistIndex("Recently sold");
    handleClose();
  };
  const handleNewest = () => {
    setlistIndex("Newest");
    handleClose();
  };
  const handleName = () => {
    setlistIndex("Newest");
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nftfillter}>
            <div className={classes.topbar}>
              <div className={classes.textfilter}>
                <img
                  src={search_svg}
                  className={classes.searchIcon}
                  alt="symbol"
                />
                <input
                  className={classes.searchinput}
                  placeholder="Search 0 items..."
                />
              </div>
              {/* select start */}
              <div>
                <GeneralListDropdown data={ListdropdownData2} />
              </div>
              {/* select end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
