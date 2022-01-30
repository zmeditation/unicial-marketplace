/** @format */

import { LandEstatesStyle } from "./LandEstatesStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import ActionButton from "../../../components/Base/ActionButton";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
export default function LandEstates() {
  const classes = LandEstatesStyle();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/account/estate/create");
  };
  return (
    <>
      <div className={classes.createBtnContainer}>
        <ActionButton
          color='light'
          className={classes.createBtn}
          onClick={handleCreateClick}>
          {t("Create Estates")}
        </ActionButton>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName='Plaza Area Sale'
            category='Ethereum'
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName='Plaza Area Sale'
            category='Ethereum'
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName='Plaza Area Sale'
            category='Ethereum'
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName='Plaza Area Sale'
            category='Ethereum'
            price={3999}
          />
        </Grid>
      </Grid>
    </>
  );
}
