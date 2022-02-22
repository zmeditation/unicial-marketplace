import React from "react";
import { Box } from "@material-ui/core";
import {
  GeneralListDropdownStyle,
  StyledListPopover,
  StyledMenuItem,
} from "./GeneralListDropdownStyle";
import filterDownArrowSvg from "../../../assets/svg/filterDownArrow.svg";
import clsx from "clsx";
export default function GeneralListDropdown(props: any) {
  const classes = GeneralListDropdownStyle();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [itemContent, setitemContent] = React.useState(props.data[0].content);

  const handleItem = (index: number) => {
    // alert(index + props.data[index - 1].content);
    setitemContent(props.data[index - 1].content);
    handleClose();
  };
  return (
    <>
      <Box
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpen}
      >
        <Box className={classes.listRoot}>
          <Box className={classes.listContainer}>
            <Box className={classes.gradientlistLabel}>{itemContent}</Box>
            <img src={filterDownArrowSvg} className={classes.filterDownArrow} />
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
      </StyledListPopover>
    </>
  );
}
