import { useEffect, useState } from "react";
import { LandEstatesStyle } from "./LandEstatesStyle";
import { Grid } from "@material-ui/core";
import { useAppSelector } from "./../../../store/hooks";
import LandCard from "../LandCard/LandCard";
import ActionButton from "../../../components/Base/ActionButton";
import { getEstatesByOwner } from "../../../hooks/api";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";
// import utility functions

import { selectLoginAddress } from "./../../../store/auth/selectors";

export default function LandEstates() {
  const classes = LandEstatesStyle();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const loginAddress = useAppSelector(selectLoginAddress);
  const emptyTokens: any[] = [];
  const [ownEstates, setOwnEstates] = useState(emptyTokens);

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

  useEffect(() => {
    getEstatesByOwner(loginAddress).then((estates: any[]) => {
      setOwnEstates(estates);
    });
  }, []);

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
        {ownEstates?.map((tokenId: any, key: any) => {
          return (
            <Grid key={key} item xs={12} sm={6} md={4}>
              <LandCard
                locationbtnX={23}
                locationbtnY={12}
                landName="Plaza Area Sale"
                category="Zilionixx"
                onClick={() => handleNavigate(tokenId)}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
