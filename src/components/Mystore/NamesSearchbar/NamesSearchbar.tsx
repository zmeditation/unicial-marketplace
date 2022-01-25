import React from "react";
import {
  CollectibleSearchBarStyle,
  StyledFormControlLabel,
  StyledListPopover,
  StyledMenuItem,
} from "./NamesSearchbarStyle";
import search_svg from "./../../../assets/svg/search.svg";
import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";
import filterDownArrowSvg from "../../../assets/svg/filterDownArrow.svg";
import NamesFilterDialog from "../NamesFilterDialog/NamesFilterDialog";
import { useTranslation } from "react-i18next";
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
  },
  checked: {},
  track: {},
})(Switch);

export default function NamesSearchBar() {
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
              <div>
                <Box
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  className={classes.listDropdown}
                >
                  <Box className={classes.listRoot}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.gradientlistLabel}>
                        {listIndex}
                      </Box>
                      <img
                        src={filterDownArrowSvg}
                        className={classes.filterDownArrow}
                      />
                    </Box>
                  </Box>
                </Box>
                <StyledListPopover
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <StyledMenuItem onClick={() => handleItem("Recently sold")}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>
                        {t("Recently sold")}
                      </Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={() => handleItem("Newest")}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{t("Newest")}</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={() => handleItem("Name")}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{t("Name")}</Box>
                    </Box>
                  </StyledMenuItem>
                </StyledListPopover>
              </div>
              {/* select end */}
              <div className={classes.topbarFilter}>
                <StyledFormControlLabel
                  control={
                    <PurpleSwitch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="ON SALE"
                  className={classes.switch}
                />
              </div>
              <NamesFilterDialog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
