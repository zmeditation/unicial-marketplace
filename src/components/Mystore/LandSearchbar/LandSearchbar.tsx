/** @format */

import React from "react";
import {
  CollectibleSearchBarStyle,
  StyledFormControlLabel,
  StyledListPopover,
  StyledMenuItem,
} from "./LandSearchbarStyle";
import search_svg from "./../../../assets/svg/search.svg";
import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";
import filterDownArrowSvg from "../../../assets/svg/filterDownArrow.svg";
import NamesFilterDialog from "../NamesFilterDialog/NamesFilterDialog";
import { useTranslation } from "react-i18next";
import {
  StyledLocationButton,
  StyledTableButton,
} from "../../TopTab/TopTabStyle";
import { searchbarBtn } from "../../../config/constant";
import book_svg from "../../../assets/svg/book.svg";
import location_svg from "../../../assets/svg/location.svg";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";
import SearchInputFilter from "../../Base/SearchInputFilter";
import LandFilterBtns from "../../Base/LandFilterBtns";
import { ListdropdownData3 } from "../../../config/ListdropdownData/ListdropdownData";
import OnSaleSwitch from "../../Base/OnSaleSwitch";
const PurpleSwitch = withStyles({
  root: {
    height: "36px",
    width: "55px",
  },
  switchBase: {
    color: "#FF7C4C",
    "&$checked": {
      color: "#333B67",
    },
    "&$checked + $track": {
      backgroundColor: "#333B67",
    },
    "&.Mui-checked:hover": {
      backgroundColor: "unset",
    },
    "&.MuiIconButton-root:hover": {
      backgroundColor: "unset",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function LandSearchbar() {
  const classes = CollectibleSearchBarStyle();

  const [state, setState] = React.useState({
    checkedA: true,
  });
  const { t, i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [listIndex, setlistIndex] = React.useState("Cheapest");

  const handleItem = (index: string) => {
    setlistIndex(index);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //
  const [filter_index, setFilterIndex] = React.useState(1);
  const handletable = () => {
    setFilterIndex(1);
  };
  const handlelocation = () => {
    setFilterIndex(2);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nftfillter}>
            <div className={classes.topbar}>
              <div>
                <SearchInputFilter />
              </div>
              {/* select start */}
              <div className={classes.listdropdownContainer}>
                <GeneralListDropdown data={ListdropdownData3} />
              </div>
              {/* select end */}
              <div className={classes.OnSaleSwitchContainer}>
                <OnSaleSwitch letter="ON SALE" />
              </div>
              <div className={classes.filterContainer}>
                <NamesFilterDialog />
              </div>

              {/* --table & location button-- */}
              <div className={classes.fiterBtns}>
                <LandFilterBtns />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
