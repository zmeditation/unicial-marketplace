import React from "react";
import { CollectibleFilterDialogStyle } from "./CollectibleFilterDialogStyle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilterTiltShiftIcon from "@material-ui/icons/FilterTiltShift";
import { Box, FormControlLabel, RadioGroup } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  collectionData,
  networkData,
} from "../../../config/Collectible/collectionData";
import {
  StyledCollectionPopover,
  StyledMenuItem,
} from "../CollectibleFilter/CollectibleFilterStyle";
import { StyledFormControlLabel } from "./../../TopTab/TopTabStyle";
import { PurpleSwitch } from "./../../TopTab/TopTab";
import StyledRadio from "../../Base/StyledRadio";
import Tag from "../../Base/Tag";
import { StyledListPopover } from "../CollectibleSearchBar/CollectibleSearchBarStyle";
import MobileCategoryBox from "../MobileCategoryBox/MobileCategoryBox";
import filterDownArrowSvg from "../../../assets/svg/filterDownArrow.svg";
import { useTranslation } from "react-i18next";
import ActionButton from "../../Base/ActionButton";
export default function CollectibleFilterDialog() {
  const classes = CollectibleFilterDialogStyle();
  const [open, setOpen] = React.useState(false);
  const {t, i18n} = useTranslation();

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  //dialog relate
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

  //smart wearables switch relate

  const [stateWearables, setStateWearables] = React.useState({
    checkedA: true,
  });

  const handleWearablesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStateWearables({
      ...stateWearables,
      [event.target.name]: event.target.checked,
    });
  };
  //on sale switch relate
  const [stateOnSale, setStateOnSale] = React.useState({
    checkedA: true,
  });

  const handleOnSaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateOnSale({
      ...stateOnSale,
      [event.target.name]: event.target.checked,
    });
  };

  //order by
  const [anchorOrderBy, setAnchorOrderBy] = React.useState<null | HTMLElement>(
    null
  );
  const handleOrderByOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorOrderBy(event.currentTarget);
  };
  const handleOrderByClose = () => {
    setAnchorOrderBy(null);
  };
  const [orderbyIndex, setorderbyIndex] = React.useState("Cheapest");
  const handleOrderByItem = (index: string) => {
    setorderbyIndex(index);
    handleOrderByClose();
  };

  return (
    <div className={classes.dialogRoot}>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <div
        color="primary"
        onClick={handleDialogOpen}
        className={classes.openfilter}
      >
        <div className={classes.openfilterLabel}>{t("FILTER")}</div>
        <div className={classes.filtericonContainer}>
          <FilterTiltShiftIcon />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
        className={classes.dialogContainer}
      >
        <DialogTitle id="form-dialog-title" className={classes.maintitle}>
         {t("Subscribe")}
        </DialogTitle>
        <DialogContent>
          <div className={classes.collectionSelectContainer}>
            <div className={classes.title}>{t("Collections")}</div>
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
                {collectionData.map((data, index) => (
                  <StyledMenuItem
                    onClick={() => handleCollectionItem(data.index)}
                    key={index}
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
          <div className={classes.collectionSelectContainer}>
            <div className={classes.title}>{t("Network")}</div>
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
                {networkData.map((data, index) => (
                  <StyledMenuItem
                    onClick={() => handleNetworkItem(data.index)}
                    key={index}
                  >
                    <Box className={classes.listContainer}>
                      <Box className={classes.listLabel}>{data.category}</Box>
                    </Box>
                  </StyledMenuItem>
                ))}
              </StyledCollectionPopover>
            </div>
            {/*network select end */}
          </div>
          {/* /smart wearables part/ */}
          <div>
            <StyledFormControlLabel
              control={
                <PurpleSwitch
                  checked={stateWearables.checkedA}
                  onChange={handleWearablesChange}
                  name="checkedA"
                />
              }
              label="SMART WEARABLES"
              className={classes.switch}
            />
          </div>
          {/* gender part */}
          <div className={classes.rarityPart}>
            <div className={classes.rarityPartContainer}>
              <div className={classes.title}>{t("GENDER")}</div>
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
              <div className={classes.title}>{t("RARITY")}</div>
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
          {/* orderby select start */}
          <div className={classes.orderbyContainer}>
            <div className={classes.orderbyTitle}>{t("Order By")}</div>
            <Box
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleOrderByOpen}
              className={classes.listDropdown}
            >
              <Box className={classes.listRoot}>
                <Box className={classes.listContainer}>
                  <Box className={classes.gradientlistLabel}>
                    {orderbyIndex}
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
              anchorEl={anchorOrderBy}
              keepMounted
              open={Boolean(anchorOrderBy)}
              onClose={handleOrderByClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <StyledMenuItem onClick={() => handleOrderByItem("Cheapest")}>
                <Box className={classes.listContainer}>
                  <Box className={classes.listLabel}>{t("Cheapest")}</Box>
                </Box>
              </StyledMenuItem>

              <StyledMenuItem
                onClick={() => handleOrderByItem("Recently listed")}
              >
                <Box className={classes.listContainer}>
                  <Box className={classes.listLabel}>{t("Recently listed")}</Box>
                </Box>
              </StyledMenuItem>

              <StyledMenuItem
                onClick={() => handleOrderByItem("Recently sold")}
              >
                <Box className={classes.listContainer}>
                  <Box className={classes.listLabel}>{t("Recently sold")}</Box>
                </Box>
              </StyledMenuItem>

              <StyledMenuItem onClick={() => handleOrderByItem("Newest")}>
                <Box className={classes.listContainer}>
                  <Box className={classes.listLabel}>{t("Newest")}</Box>
                </Box>
              </StyledMenuItem>

              <StyledMenuItem onClick={() => handleOrderByItem("Name")}>
                <Box className={classes.listContainer}>
                  <Box className={classes.listLabel}>{t("Name")}</Box>
                </Box>
              </StyledMenuItem>
            </StyledListPopover>
          </div>
          {/* / on sale part/ */}
          <div>
            <StyledFormControlLabel
              control={
                <PurpleSwitch
                  checked={stateOnSale.checkedA}
                  onChange={handleOnSaleChange}
                  name="checkedA"
                />
              }
              label="ON SALE"
              className={classes.switch}
            />
          </div>
          {/* mobile categorybox */}
          <div>
            <MobileCategoryBox />
          </div>
        </DialogContent>
        <DialogActions className={classes.actionBtnContainer}>
          <ActionButton color="light" className={classes.actionBtn}>
            {t("APPLY")}
          </ActionButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
