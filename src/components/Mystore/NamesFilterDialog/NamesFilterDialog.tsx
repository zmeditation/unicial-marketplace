import React from "react";
import { CollectibleFilterDialogStyle } from "./NamesFilterDialogStyle";
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
} from "../../Collectible/CollectibleFilter/CollectibleFilterStyle";
import { StyledFormControlLabel } from "./../../TopTab/TopTabStyle";
import { PurpleSwitch } from "./../../TopTab/TopTab";
import StyledRadio from "../../Base/StyledRadio";
import Tag from "../../Base/Tag";
import { StyledListPopover } from "../../Collectible/CollectibleSearchBar/CollectibleSearchBarStyle";
import MobileCategoryBox from "../../Collectible/MobileCategoryBox/MobileCategoryBox";
import filterDownArrowSvg from "../../../assets/svg/filterDownArrow.svg";
import { useTranslation } from "react-i18next";
import ActionButton from "../../Base/ActionButton";
import CategoryWearables from "../../CategoryWearables/CategoryWearables";
import { WearablesData, LandData } from "./../../CategoryWearables/SidebarData";
import AssetsBox from "../../Mystore/AssetsBox/AssetsBox";
import { namesOrderByData } from "../../../config/Mystore/orderbyData";
import BorderListDropdown from "../../Base/BorderListDropdown/BorderListDropdown";
export default function CollectibleFilterDialog() {
  const classes = CollectibleFilterDialogStyle();
  const [open, setOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

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
          {t("Filter")}
        </DialogTitle>
        <DialogContent>
          {/* orderby select start */}
          <div className={classes.orderbyContainer}>
            <div className={classes.orderbyTitle}>{t("Order By")}</div>
            <BorderListDropdown data={namesOrderByData} />
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
          {/* <div>
            <AssetsBox />
          </div> */}
        </DialogContent>
        <DialogActions className={classes.actionBtnContainer}>
          <ActionButton
            color="light"
            className={classes.actionBtn}
            onClick={handleDialogClose}
          >
            {t("APPLY")}
          </ActionButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
