/** @format */
import { useState, useEffect } from "react";
import { CreateEstatesStyle } from "./CreateEstatesStyles";
import { Grid } from "@material-ui/core";
import LandCard from "../../../components/Mystore/LandCard/LandCard";
import LandMap from "../../../components/Admin/LandMap";
import TobTab from "../../../components/TopTab/TopTab";
// import ActionButton from "../../../components/Base/ActionButton";
import { useTranslation } from "react-i18next";
export default function CreateEstates() {
  const classes = CreateEstatesStyle();
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
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.cardTitle}></div>
          <div className={classes.cardSelect}></div>
          <div className={classes.cards}>
            <Grid container spacing={1}>
              <Grid item xs={4} sm={4} md={4}>
                <div className={classes.card}>
                  <div className={classes.cardLabel}></div>
                  <div className={classes.cardDescription}></div>

                  <div className={classes.cardPrice}></div>
                </div>
              </Grid>
              <Grid item xs={4} sm={4} md={4}></Grid>
              <Grid item xs={4} sm={4} md={4}></Grid>
            </Grid>
            <div className={classes.btns}></div>
          </div>
        </div>
      </div>
    </>
  );
}
