import {
  CollectionCardStyle,
  StyledDeletePopover,
  StyledDeleteItem,
} from "./CollectionCardStyle";
import PussyhairPng from "../../../assets/img/Pussyhair.png";
import moreIcon from "../../../assets/svg/more.png";
import DeletemoreIcon from "./../../Base/DeletemoreIcon";
import { Box } from "@material-ui/core";

import React from "react";
import clsx from "clsx";
interface CollctionCardProps {
  name: string;
  count: number;
  onClick?: any;
  OpenDeleteModal?: any;
}

export default function CollctionCard({
  name,
  count,
  onClick,
  OpenDeleteModal,
}: CollctionCardProps) {
  const classes = CollectionCardStyle();
  //    ellipse icon relate
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorNetwork(null);
  };
  const handleItem = () => {
    OpenDeleteModal();
    handleClose();
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <div aria-controls="simple-menu" aria-haspopup="true">
            <Box className={clsx(classes.moreIcon)} onClick={handleOpen}>
              <i className="fas fa-ellipsis-h"></i>
            </Box>

            <StyledDeletePopover
              id="simple-menu"
              anchorEl={anchorNetwork}
              keepMounted
              open={Boolean(anchorNetwork)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <StyledDeleteItem
                disableRipple
                onClick={() => handleItem()}
                className={classes.menuItem}
              >
                <Box className={classes.listContainer}>
                  <Box className={clsx(classes.listLabel)}>Delete</Box>
                </Box>
              </StyledDeleteItem>
            </StyledDeletePopover>
          </div>
          <img src={PussyhairPng} className={classes.image} onClick={onClick} />
        </div>
        <div className={classes.nameContainer}>{name}</div>
        <div className={classes.descContainer}>
          <span>Collection</span>
          <span className={classes.divide}></span>
          <span>{count} &nbsp; items</span>
        </div>
      </div>
    </>
  );
}
