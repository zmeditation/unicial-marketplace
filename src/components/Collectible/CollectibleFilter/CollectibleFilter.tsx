/** @format */

import React, { useState, useEffect } from "react";
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
  filterListData,
} from "../../../config/Collectible/collectionData";
import { collectiblesTagsColor } from "../../../config/constant";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import closeSvg from "../../../assets/svg/close.svg";
import { useTranslation } from "react-i18next";

export default function CollectibleFilter() {
  const classes = CollectibleFilterStyle();
  const [selectedArray, setSelectedArray] = useState([""]);
  const [showClearFilterBtn, setShowClearFilterBtn] = useState(false);

  const { t, i18n } = useTranslation();
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

  const handleClickTag = (e: number) => {
    let newSelectedTile: string[] = [];
    const selectedIndex = selectedArray.indexOf(filterListData[e].category);
    if (selectedIndex === -1) {
      newSelectedTile = newSelectedTile.concat(
        selectedArray,
        filterListData[e].category
      );
    } else if (selectedIndex === 0) {
      newSelectedTile = newSelectedTile.concat(selectedArray.slice(1));
    } else if (selectedIndex === selectedArray.length - 1) {
      newSelectedTile = newSelectedTile.concat(selectedArray.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTile = newSelectedTile.concat(
        selectedArray.slice(0, selectedIndex),
        selectedArray.slice(selectedIndex + 1)
      );
    }
    setSelectedArray(newSelectedTile);
  };

  const handleClickClear = () => {
    setSelectedArray([""]);
  };

  useEffect(() => {
    selectedArray.length !== 1
      ? setShowClearFilterBtn(true)
      : setShowClearFilterBtn(false);
  }, [selectedArray]);

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
            <div className={classes.title}>{t("Collections")}</div>
            {/* collection select start */}
            <div>
              <Box
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleCollectionClick}
                className={classes.listDropdown}>
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
                id='simple-menu'
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
                }}>
                {collectionData.map((data, index) => (
                  <StyledMenuItem
                    onClick={() => handleCollectionItem(data.index)}
                    key={index}>
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
            style={{ marginLeft: "30px" }}>
            <div className={classes.title}>{t("Network")}</div>
            {/* network select start */}
            <div>
              <Box
                aria-controls='simple-menu'
                aria-haspopup='true'
                onClick={handleNetworkClick}
                className={classes.listDropdown}>
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
                id='simple-menu'
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
                }}>
                {networkData.map((data, index) => (
                  <StyledMenuItem
                    onClick={() => handleNetworkItem(data.index)}
                    key={index}>
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
              <div className={classes.title}>{t("GENDER")}</div>
              {/* radio realte */}
              <RadioGroup
                aria-label='gender'
                name='gender1'
                value={value}
                onChange={handleRadioChange}
                className={classes.genderRadioContainer}>
                <FormControlLabel
                  value='Male'
                  control={<StyledRadio />}
                  label='Male'
                />
                <FormControlLabel
                  value='Female'
                  control={<StyledRadio />}
                  label='Female'
                />
              </RadioGroup>
            </div>
          </div>
          {/* rarity part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>{t("RARITY")}</div>
              <div className={classes.options}>
                {filterListData?.map((data, index) => {
                  return selectedArray.indexOf(data.category) >= 0 ? (
                    <Tag
                      key={index}
                      color='EpicColor'
                      letter={data.category}
                      onClick={() => handleClickTag(index)}
                    />
                  ) : (
                    <Tag
                      key={index}
                      color='DefaultColor'
                      letter={data.category}
                      onClick={() => handleClickTag(index)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div
            className={
              showClearFilterBtn === true
                ? classes.clearFilterContainer
                : classes.clearFilterContainerNone
            }>
            <div
              className={classes.clearFilterLabel}
              onClick={handleClickClear}>
              {t("Clear Filter")}
            </div>
            <img src={closeSvg} className={classes.closeicon} />
          </div>
        </div>
      </div>
    </>
  );
}
