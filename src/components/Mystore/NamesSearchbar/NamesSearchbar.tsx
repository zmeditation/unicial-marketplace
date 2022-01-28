import { CollectibleSearchBarStyle } from "./NamesSearchbarStyle";
import search_svg from "./../../../assets/svg/search.svg";
import NamesFilterDialog from "../NamesFilterDialog/NamesFilterDialog";
import { useTranslation } from "react-i18next";
import GeneralListDropdown from "../../Base/GeneralListDropdown/GeneralListDropdown";
import OnSaleSwitch from "../../Base/OnSaleSwitch";
import { ListdropdownData3 } from "../../../config/ListdropdownData/ListdropdownData";

export default function NamesSearchBar() {
  const classes = CollectibleSearchBarStyle();

  const { t, i18n } = useTranslation();

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
              <div className={classes.listDropdownContainer}>
                <GeneralListDropdown data={ListdropdownData3} />
              </div>
              {/* select end */}
              <div className={classes.OnSaleContainer}>
                <OnSaleSwitch />
              </div>
              <div className={classes.filterDialogbtn}>
                <NamesFilterDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
