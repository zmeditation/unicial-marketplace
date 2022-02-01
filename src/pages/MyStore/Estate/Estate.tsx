/** @format */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { EstateStyle } from "./EstateStyles";
import { Grid } from "@material-ui/core";
import LandCard from "../../../components/Mystore/LandCard/LandCard";
import CreateEstateMap from "../../../components/CreateEstateMap";
import ParcelCard from "../../../components/ParcelCard/ParcelCard";

import TobTab from "../../../components/TopTab/TopTab";
import ActionButton from "../../../components/Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { BackButton } from "../../../components/BackButton/BackButton";

import { useTranslation } from "react-i18next";
export default function Estates() {
  const classes = EstateStyle();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(1064);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(933);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(723);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
    }
  };

  const handleContinue = () => {
    navigate("/account/estate/createestate");
  };
  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <TobTab />

      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <CreateEstateMap
              height={400}
              width={width}
              initialX={1}
              initialY={1}
            />
          </div>
        </div>
        <BackButton className={classes.backButton} />

        <div className={classes.cardContainer}>
          <div className={classes.cardTitle}>
            {t("Select the parcels on the map for your new Estate")}
          </div>
          <div className={classes.cardSelect}>{t("Selected parcels")}</div>
          <div className={classes.cards}>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} md={4}>
                <ParcelCard
                  cardlabel='Parcel'
                  carddescription='Acquired at August 2nd, 2018'
                  axisX={-44}
                  axisY={-147}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <ParcelCard
                  cardlabel='Parcel'
                  carddescription='Acquired at August 2nd, 2018'
                  axisX={-44}
                  axisY={-147}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <ParcelCard
                  cardlabel='Parcel'
                  carddescription='Acquired at August 2nd, 2018'
                  axisX={-44}
                  axisY={-147}
                />
              </Grid>
            </Grid>
            <div className={classes.btns}>
              <div className={classes.buttons}>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={() => navigate("/account?section=estates")}>
                  {t("CANCEL")}
                </ActionButton>
                <ActionButton
                  color='light'
                  className={classes.bidchange}
                  onClick={handleContinue}>
                  {t("CONTINUE")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
