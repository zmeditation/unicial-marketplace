import React, { useEffect } from "react";
import { topTabIndex, searchbarIndex } from "../../config/constant";
import {
  TopTabStyle,
  StyledTopTabBtn,
  StyledFormControlLabel,
  StyledTableButton,
  StyledLocationButton,
} from "./TopTabStyle";
import LandSearchbar from "../Mystore/LandSearchbar/LandSearchbar";
import CollectibleSearchBar from "../Collectible/CollectibleSearchBar/CollectibleSearchBar";
import MystoreSearchBar from "../Mystore/MystoreSearchBar/MystoreSearchBar";
import NamesSearchBar from "../Mystore/NamesSearchbar/NamesSearchbar";
import { searchbarBtn } from "../../config/constant";
import { useLocation, useNavigate } from "react-router";
import { withStyles } from "@material-ui/styles";
import { Switch } from "@material-ui/core";
import book_svg from "../../assets/svg/book.svg";
import location_svg from "../../assets/svg/location.svg";
import { useTranslation } from "react-i18next";

export const PurpleSwitch = withStyles({
  root: {
    height: "36px",
    width: "55px",
  },
  switchBase: {
    color: "#FF7C4C",
    "&$checked": {
      color: "#333B67",
    },
    "&$checked + $track": {
      backgroundColor: "#333B67",
    },
  },
  checked: {},
  track: {},
})(Switch);
export default function TopTab() {
  const classes = TopTabStyle();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [toptab_index, setToptabIndex] = React.useState(1);
  const [searchbar_index, setSearchbarIndex] = React.useState(1);

  const handleLand = (url: string) => {
    navigate(url);
  };
  const query = new URLSearchParams(location.search);
  const category = query.get("section");
  console.log("here is TopTab", category);
  useEffect(() => {
    console.log("path name=", location.pathname);
    if (location.pathname.includes("/lands")) {
      setToptabIndex(topTabIndex.land);
      setSearchbarIndex(searchbarIndex.land);
    } else if (location.pathname.includes("/auction")) {
      setToptabIndex(topTabIndex.auction);
      setSearchbarIndex(searchbarIndex.auction);
    } else if (location.pathname.includes("/browse")) {
      setToptabIndex(topTabIndex.collectibles);
      setSearchbarIndex(searchbarIndex.collections);
    } else if (location.pathname.includes("/account")) {
      setToptabIndex(topTabIndex.mystore);
      switch (category) {
        case "collections":
          setSearchbarIndex(searchbarIndex.collections);
          break;
        case "land":
          setSearchbarIndex(searchbarIndex.land);
          break;
        case "parcels":
          setSearchbarIndex(searchbarIndex.parcels);
          break;
        case "estate":
          setSearchbarIndex(searchbarIndex.estate);
          break;

        case "wearables":
          setSearchbarIndex(searchbarIndex.wearables);

          console.log("oh yes", searchbar_index);
          break;
        case "ens":
          setSearchbarIndex(searchbarIndex.ens);
          break;
        case "on_sale":
          setSearchbarIndex(searchbarIndex.on_sale);
          break;
        case "sales":
          setSearchbarIndex(searchbarIndex.sales);
          break;
      }
    }
  }, [searchbar_index, location]);

  //on sale
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [filter_index, setFilterIndex] = React.useState(1);
  const handletable = () => {
    setFilterIndex(1);
  };
  const handlelocation = () => {
    setFilterIndex(2);
  };
  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.nftfilter}>
              <div className={classes.topbar}>
                <div className={classes.tabsLeft}>
                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handleLand("/lands")}
                    disabled={toptab_index === topTabIndex.land}
                  >
                    {t("Lands")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    disableRipple
                    onClick={() =>
                      handleLand(
                        "/browse?section=wearables&vendor=decentraland&page=1&sortBy=recently_listed&onlyOnSale=true"
                      )
                    }
                    disabled={toptab_index === topTabIndex.collectibles}
                  >
                    {t("Collectibles")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handleLand("/account")}
                    disabled={toptab_index === topTabIndex.mystore}
                  >
                    {t("My Store")}
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handleLand("/auction")}
                    disabled={toptab_index === topTabIndex.auction}
                  >
                    {t("Auction")}
                  </StyledTopTabBtn>
                </div>

                {toptab_index === 1 ? (
                  /* //Land */
                  <div style={{ display: "flex" }}>
                    <StyledFormControlLabel
                      control={
                        <PurpleSwitch
                          checked={state.checkedA}
                          onChange={handleChange}
                          name="checkedA"
                        />
                      }
                      label="ON SALE"
                      className={classes.switch}
                    />
                    <div style={{ marginLeft: "20px" }}>
                      <StyledTableButton
                        disabled={filter_index === searchbarBtn.tableBtn}
                        onClick={handletable}
                      >
                        <img src={book_svg} />
                      </StyledTableButton>

                      <StyledLocationButton
                        disabled={filter_index === searchbarBtn.locationBtn}
                        onClick={handlelocation}
                      >
                        <img src={location_svg} />
                      </StyledLocationButton>
                    </div>
                  </div>
                ) : toptab_index === 2 ? (
                  <CollectibleSearchBar />
                ) : searchbar_index === 0 ? (
                  <></>
                ) : searchbar_index === 1 ? (
                  <MystoreSearchBar />
                ) : searchbar_index === 2 ? (
                  //  Collctibles
                  <CollectibleSearchBar />
                ) : searchbar_index === 3 ? (
                  //My store MystoreSearchBar
                  // <MystoreSearchBar />
                  <LandSearchbar />
                ) : searchbar_index === 4 ? (
                  <NamesSearchBar />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
