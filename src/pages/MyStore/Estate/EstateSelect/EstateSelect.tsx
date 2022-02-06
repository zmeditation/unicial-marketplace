/** @format */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { EstateStyle } from "./EstateSelectStyles";
import { Grid } from "@material-ui/core";
import CreateEstateMap from "../../../../components/CreateEstateMap";
import ParcelCard from "../../../../components/ParcelCard/ParcelCard";

import TobTab from "../../../../components/TopTab/TopTab";
import ActionButton from "../../../../components/Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { BackButton } from "../../../../components/BackButton/BackButton";

import { selectestates } from "../../../../store/selectedestates/selectors";
import { getestates } from "../../../../store/selectedestates";
import { showAlert } from "../../../../store/alert";

import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
export default function EstatesSelect() {
  const classes = EstateStyle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const estates = useAppSelector(selectestates);
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);
  const [result, setResult] = useState(true);

  const getCoords = (x: number | string, y: number | string) => `${x},${y}`;

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
    let status = true;
    for (let i = 0; i < estates.length; i++) {
      var x: number = +estates[i].substring(0, estates[i].indexOf(","));
      var y: number = +estates[i].substring(estates[i].indexOf(",") + 1);

      const leftIndex = estates.indexOf(getCoords(x - 1, y));
      const topIndex = estates.indexOf(getCoords(x, y - 1));
      const rightIndex = estates.indexOf(getCoords(x + 1, y));
      const bottomIndex = estates.indexOf(getCoords(x, y + 1));

      if (leftIndex < 0 && topIndex < 0 && rightIndex < 0 && bottomIndex < 0) {
        status = false;
      }
    }

    if (estates.length === 1) {
      status = true;
    }

    status === true
      ? navigate("/account/estate/createestate")
      : dispatch(
          showAlert({
            message: "You have to select correct parcels!",
            severity: "error",
          })
        );
  };

  const handleClear = () => {
    dispatch(getestates([]));
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
        <div className={classes.btnPart}>
          <BackButton className={classes.backButton} />
          <ActionButton
            color='light'
            className={classes.clearBtn}
            onClick={handleClear}>
            {t("Clear")}
            <CallMadeIcon fontSize='small' />
          </ActionButton>
        </div>

        <div className={classes.cardContainer}>
          <div className={classes.cardTitle}>
            {t("Select the parcels on the map for your new Estate")}
          </div>
          <div className={classes.cardSelect}>{t("Selected parcels")}</div>
          <div className={classes.cards}>
            <Grid container spacing={2}>
              {estates.map((items: any, key: any) => {
                return (
                  <Grid key={key} item xs={6} sm={4} md={2}>
                    <ParcelCard
                      cardlabel='Parcel'
                      carddescription='Acquired at August 2nd, 2018'
                      location={items}
                    />
                  </Grid>
                );
              })}
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
