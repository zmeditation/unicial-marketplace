import React from "react";
import { Box } from "@material-ui/core";
import {
  BorderListDropdownStyle,
  StyledCollectionPopover,
  StyledMenuItem,
} from "./BorderListDropdownStyle";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

export default function BorderListDropdown(props: any) {
  const classes = BorderListDropdownStyle();
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorNetwork(null);
  };
  const [itemContent, setitemContent] = React.useState(props.data[1].content);

  const handleItem = (index: number) => {
    // alert(index + props.data[index - 1].content);
    setitemContent(props.data[index - 1].content);
    handleClose();
  };
  return (
    <>
      {/* network select start */}
      <Box
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        className={classes.listDropdown}
      >
        <Box className={classes.listRoot}>
          <Box className={classes.listContainer}>
            <Box className={classes.mainlistLabel}>{itemContent}</Box>
            <ExpandMoreIcon style={{ color: "#96A1DB", marginLeft: "3px" }} />
          </Box>
        </Box>
      </Box>
      <StyledCollectionPopover
        id="simple-menu"
        anchorEl={anchorNetwork}
        keepMounted
        open={Boolean(anchorNetwork)}
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
        {props.data.map((item: any, index: any) => (
          <StyledMenuItem onClick={() => handleItem(item.index)} key={index}>
            <Box className={classes.listContainer}>
              <Box
                className={clsx(classes.listLabel, {
                  [classes.activeLabel]: itemContent === item.content,
                })}
              >
                {item.content}
              </Box>
            </Box>
          </StyledMenuItem>
        ))}
      </StyledCollectionPopover>
    </>
  );
}
