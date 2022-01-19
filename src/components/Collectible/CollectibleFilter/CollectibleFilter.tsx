import React from "react";
import {
  CollectibleFilterStyle,
  StyledCollectionPopover,
  StyledMenuItem,
} from "./CollectibleFilterStyle";
import Tag from "../../Base/Tag";
import StyledRadio from "../../Base/StyledRadio";
import {
  collectionData,
  networkData,
} from "../../../config/Collectible/collectionData";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import closeSvg from "../../../assets/svg/close.svg";

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
    React.useState("All Collections");
  const handleCollectionItem = (index: number) => {
    setcollectionCategory(collectionData[index].catatory);
    handleCollectionClose();
  };

  const [networkCategory, setnetworkCategory] = React.useState("All Network");
  const handleNetworkItem = (index: number) => {
    setnetworkCategory(networkData[index].category);
    handleNetworkClose();
  };

  //radio relate
  const [value, setValue] = React.useState("Male");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.selectPart}>
          <div className={classes.collectionSelectContainer}>
            <div className={classes.title}>Collections</div>
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
                    <Box className={classes.mainlistLabel}>
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
            <div className={classes.title}>Network</div>
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
                    <Box className={classes.mainlistLabel}>
                      {networkCategory}
                    </Box>
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
          {/* gender part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>GENDER</div>
              {/* radio realte */}
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleRadioChange}
                className={classes.genderRadioContainer}
              >
                <FormControlLabel
                  value="Male"
                  control={<StyledRadio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<StyledRadio />}
                  label="Female"
                />
              </RadioGroup>
            </div>
          </div>
          {/* rarity part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>RARITY</div>
              <div className={classes.options}>
                <Tag color="CommonColor" letter="COMMON" />
                <Tag color="RareColor" letter="RARE" />
                <Tag color="EpicColor" letter="EPIC" />
                <Tag color="LegendaryColor" letter="LEGENDARY" />
                <Tag color="DefaultColor" letter="MYTHIC" />
                <Tag color="DefaultColor" letter="UNIQUE" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.clearFilterContainer}>
            <div className={classes.clearFilterLabel}>Clear Filter</div>
            <img src={closeSvg} />
          </div>
        </div>
      </div>
    </>
  );
}
