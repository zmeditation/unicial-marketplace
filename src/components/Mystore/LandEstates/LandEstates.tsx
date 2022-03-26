import { useEffect, useState } from "react";
import { LandEstatesStyle } from "./LandEstatesStyle";
import { Grid } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "./../../../store/hooks";
import LandCard from "../LandCard/LandCard";
import ActionButton from "../../../components/Base/ActionButton";
import { getEstatesByOwner } from "../../../hooks/api";
import { useTranslation } from "react-i18next";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";
import { useLocation, useNavigate } from "react-router";
import { selectLoginAddress } from "./../../../store/auth/selectors";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import { category, showMoreCount } from "../../../config/constant";
import { showSpinner } from "../../../store/spinner";
import { saleEstates } from "../../../store/saleestates/selectors";
import { ethers } from "ethers";

export default function LandEstates() {
  const classes = LandEstatesStyle();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const loginAddress = useAppSelector(selectLoginAddress);
  const emptyTokens: any[] = [];
  const [ownEstates, setOwnEstates] = useState(emptyTokens);
  const [showStatus, setShowStatus] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const estatesOnSale: any = useAppSelector(saleEstates);

  const handleCreateClick = () => {
    navigate("/account/estate/create");
  };

  const handleSettingManager = () => {
    navigate("/account/estate/setting_manager");
  };

  const handleNavigate = (tokenId: string) => {
    navigate(
      `/contracts/${EstateProxyAddress}/tokens/${tokenId}/estate_detail`
    );
  };
  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };

  const initSet = async () => {
    dispatch(showSpinner(true));
    await getEstatesByOwner(loginAddress).then((estates) => {
      if (
        query.get("onlyOnSale") === null ||
        query.get("onlyOnSale") === "false"
      ) {
        setOwnEstates(estates);
      } else {
        setOwnEstates(estates.filter((e?: any) => estatesOnSale[e]));
      }
    });
    dispatch(showSpinner(false));
  };

  useEffect(() => {
    initSet();
  }, [query.get("onlyOnSale"), estatesOnSale]);

  return (
    <>
      <div className={classes.createBtnContainer}>
        <ActionButton
          color="light"
          className={classes.createBtn}
          onClick={handleSettingManager}
        >
          {t("Setting Manager")}
        </ActionButton>
        <ActionButton
          color="light"
          className={classes.createBtn}
          onClick={handleCreateClick}
        >
          {t("Create Estates")}
        </ActionButton>
      </div>
      <Grid container spacing={2}>
        {ownEstates
          ?.slice(0, !showStatus ? showMoreCount : ownEstates.length)
          .map((tokenId: any, key: any) => {
            let priceEstate = "null";
            if (estatesOnSale[tokenId]) {
              priceEstate = ethers.utils.formatUnits(
                estatesOnSale[tokenId]?.priceInWei.toString(),
                18
              );
            }

            return (
              <Grid key={key} item xs={12} sm={6} md={4}>
                <LandCard
                  type={category.estates}
                  tokenid={tokenId}
                  price={parseInt(priceEstate)}
                  categoryName="Zilionixx"
                  onClick={() => handleNavigate(tokenId)}
                />
              </Grid>
            );
          })}
      </Grid>
      <div
        className={
          ownEstates.length < showMoreCount
            ? classes.displayNone
            : classes.showmoreContent
        }
      >
        <ShowMoreLessBtn
          letter={showStatus ? "Show Less" : "Show All"}
          onClick={handleShowBtn}
        />
      </div>
    </>
  );
}
