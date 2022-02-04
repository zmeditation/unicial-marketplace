/** @format */
import { useEffect, useState } from "react";
import { LandEstatesStyle } from "./LandEstatesStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import ActionButton from "../../../components/Base/ActionButton";
import { getEstatesByOwner } from "../../../hooks/api";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
export default function LandEstates() {
  const classes = LandEstatesStyle();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [ownEstates, setOwnEstates] = useState([]);

  const handleCreateClick = () => {
    navigate("/account/estate/create");
  };

  const handleNavigate = (url: string) => {
    navigate(
      `/contracts/0xCf7c8979AFF022Aa478ee4D7BA538cd01FDB7DC0/tokens/${url}/parcel_detail`
    );
  };

  useEffect(() => {
    getEstatesByOwner("0x8734CB972d36a740Cc983d5515e160C373A4a016").then(
      (estates) => {
        setOwnEstates(estates);
      }
    );
  }, []);
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
        {ownEstates?.map((item: any, key: any) => {
          return (
            <Grid key={key} item xs={12} sm={6} md={4}>
              <LandCard
                locationbtnX={23}
                locationbtnY={12}
                landName='Plaza Area Sale'
                category='Ethereum'
                price={3999}
                onClick={() => handleNavigate(item.estateId)}
              />
            </Grid>
          );
        })}
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
