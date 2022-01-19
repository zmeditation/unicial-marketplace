import React from "react";
import {
  CollectibleSearchBarStyle,
  StyledFormControlLabel,
  StyledListPopover,
  StyledMenuItem,
} from "./CollectibleSearchBarStyle";
import filter_svg from "./../../../assets/svg/filter.svg";
import search_svg from "./../../../assets/svg/search.svg";
import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import filterDownArrowSvg from "../../../assets/svg/filterDownArrow.svg";

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

export default function CollectibleSearchBar() {
  const classes = CollectibleSearchBarStyle();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                  placeholder="Search 25 results..."
                />
              </div>
              {/* select start */}
              <div>
                <Box
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  // className={classes.listDropdown}
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
                      <Box className={classes.listLabel}>Cheapest</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleRecentlyListied}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>Recently listed</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleRecentlySold}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>Recently sold</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleNewest}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>Newest</Box>
                    </Box>
                  </StyledMenuItem>

                  <StyledMenuItem onClick={handleName}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>Name</Box>
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
              <div className={classes.openfilter}>
                <div className={classes.openfilterLabel}>FILTER</div>
                <img
                  src={filter_svg}
                  className={classes.filterIcon}
                  alt="symbol"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
