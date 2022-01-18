import React from "react";
import {
  CollectibleFilterStyle,
  StyledCollectionPopover,
  StyledMenuItem,
} from "./CollectibleFilterStyle";
import {
  collectionData,
  networkData,
} from "../../../config/Collectible/collectionData";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function CollectibleFilter() {
  const classes = CollectibleFilterStyle();
  const [anchorCollection, setAnchorCollection] =
    React.useState<null | HTMLElement>(null);
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const handleCollectionClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorCollection(event.currentTarget);
  };
  const handleNetworkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };

  const handleCollectionClose = () => {
    setAnchorCollection(null);
  };

  const handleNetworkClose = () => {
    setAnchorNetwork(null);
  };

  const [collectionCategory, setcollectionCategory] =
    React.useState("ALL COLLECTIONS");
  const handleCollectionItem = (index: number) => {
    setcollectionCategory(collectionData[index].catatory);
    handleCollectionClose();
  };

  const [networkCategory, setnetworkCategory] = React.useState("ALL NETWORK");
  const handleNetworkItem = (index: number) => {
    setnetworkCategory(networkData[index].category);
    handleNetworkClose();
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.selectPart}>
          <div className={classes.collectionSelectContainer}>
            <div className={classes.title}>COLLECTION</div>
            {/* collection select start */}
            <div>
              <Box
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleCollectionClick}
                className={classes.listDropdown}
              >
                <Box className={classes.listRoot}>
                  <Box className={classes.listContainer}>
                    <Box className={classes.listLabel}>
                      {collectionCategory}
                    </Box>
                    <ExpandMoreIcon
                      style={{ color: "#96A1DB", marginLeft: "3px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <StyledCollectionPopover
                id="simple-menu"
                anchorEl={anchorCollection}
                keepMounted
                open={Boolean(anchorCollection)}
                onClose={handleCollectionClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {collectionData.map((data) => (
                  <StyledMenuItem
                    onClick={() => handleCollectionItem(data.index)}
                  >
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{data.catatory}</Box>
                    </Box>
                  </StyledMenuItem>
                ))}
              </StyledCollectionPopover>
            </div>
            {/*collection select end */}
          </div>
          {/* // */}
          <div
            className={classes.collectionSelectContainer}
            style={{ marginLeft: "30px" }}
          >
            <div className={classes.title}>NETWORK</div>
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
                    <Box className={classes.listLabel}> {networkCategory}</Box>
                    <ExpandMoreIcon
                      style={{ color: "#96A1DB", marginLeft: "3px" }}
                    />
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
                {networkData.map((data) => (
                  <StyledMenuItem onClick={() => handleNetworkItem(data.index)}>
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{data.category}</Box>
                    </Box>
                  </StyledMenuItem>
                ))}
              </StyledCollectionPopover>
            </div>
            {/*network select end */}
          </div>
        </div>
        {/* downPart Rarity & Genger */}
        <div className={classes.selectPart} style={{ marginTop: "12px" }}>
          {/* rarity part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>RARITY</div>
              <div className={classes.options}>
                <div className={classes.option}>COMMON</div>
                <div className={classes.option}>UNCOMMON</div>
                <div className={classes.option}>RARE</div>
                <div className={classes.option}>EPIC</div>
                <div className={classes.option}>LEGENDARY</div>
                <div className={classes.option}>MYTHIK</div>
                <div className={classes.option}>UNIQUE</div>
              </div>
            </div>
          </div>
          {/* gender part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>GENDER</div>
              <div className={classes.options}>
                <div className={classes.option}>MALE</div>
                <div className={classes.option}>FEMALE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
