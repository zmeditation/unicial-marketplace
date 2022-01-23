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

export default function MystoreSearchBar() {
  const classes = MystoreSearchBarStyle();
  const { t, i18n} = useTranslation();

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
                <Box
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
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
                  <StyledMenuItem onClick={handleCheapest}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{t("Cheapest")}</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleRecentlyListied}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{t("Recently listed")}</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleRecentlySold}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{t("Recently sold")}</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleNewest}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{t("Newest")}</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleName}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{t("Name")}</Box>
                    </Box>
                  </StyledMenuItem>
                </StyledListPopover>
              </div>
              {/* select end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
