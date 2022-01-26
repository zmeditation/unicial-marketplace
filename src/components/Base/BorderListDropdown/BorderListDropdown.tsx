import React from "react";
import { Box } from "@material-ui/core";
import {
  BorderListDropdownStyle,
  StyledCollectionPopover,
  StyledMenuItem,
} from "./BorderListDropdownStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function BorderListDropdown(props: any) {
  const classes = BorderListDropdownStyle();
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleNetworkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };
  const handleNetworkClose = () => {
    setAnchorNetwork(null);
  };
  const [networkCategory, setnetworkCategory] = React.useState("All Network");

  const handleNetworkItem = (index: number) => {
    setnetworkCategory(props.data[index].category);
    handleNetworkClose();
  };
  return (
    <>
      {/* network select start */}
      <div>
        <Box
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleNetworkClick}
          className={classes.listDropdown}
        >
          <Box className={classes.listRoot}>
            <Box className={classes.listContainer}>
              <Box className={classes.mainlistLabel}>{networkCategory}</Box>
              <ExpandMoreIcon style={{ color: "#96A1DB", marginLeft: "3px" }} />
            </Box>
          </Box>
        </Box>
        <StyledCollectionPopover
          id="simple-menu"
          anchorEl={anchorNetwork}
          keepMounted
          open={Boolean(anchorNetwork)}
          onClose={handleNetworkClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {props.data.map((item: any, index: any) => (
            <StyledMenuItem
              onClick={() => handleNetworkItem(item.index)}
              key={index}
            >
              <Box className={classes.listContainer}>
                <Box className={classes.listLabel}>{item.category}</Box>
              </Box>
            </StyledMenuItem>
          ))}
        </StyledCollectionPopover>
      </div>
    </>
  );
}
