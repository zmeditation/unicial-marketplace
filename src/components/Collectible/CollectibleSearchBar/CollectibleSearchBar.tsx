import React from "react";
import {
  CollectibleSearchBarStyle,
  StyledFormControlLabel,
} from "./CollectibleSearchBarStyle";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";
import search_svg from "./../../../assets/svg/search.svg";
import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
import CollectibleFilterDialog from "../CollectibleFilterDialog/CollectibleFilterDialog";
import { useTranslation } from "react-i18next";
import { ListdropdownData1 } from "../../../config/ListdropdownData/ListdropdownData";
import OnSaleSwitch from "../../Base/OnSaleSwitch";

export default function CollectibleSearchBar() {
  const classes = CollectibleSearchBarStyle();
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
                  placeholder="Search 25 results..."
                />
              </div>
              {/* select start */}
              <div className={classes.listdropdownContainer}>
                <GeneralListDropdown data={ListdropdownData1} />
              </div>
              {/* select end */}
              <div className={classes.OnSaleSwitchContainer}>
                <OnSaleSwitch />
              </div>
              <div className={classes.filterDialogbtn}>
                <CollectibleFilterDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
