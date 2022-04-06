/** @format */

import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import GeneralListDropdown from "../../../components/Base/GeneralListDropdown/GeneralListDropdown";
import NameCard from "../../../components/Base/NameCard/NameCard";
import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import { ShowMoreLessBtn } from "../../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { NamesData, someShowMore } from "../../../config/constant";
import {
  scenePoolList1,
  scenePoolList2,
} from "../../../config/ListdropdownData/ListdropdownData";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./ScenePoolsStyles";

export default function ScenePools() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [showStatus, setShowStatus] = useState(false);
  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>
        <div className={classes.topPart}>
          <div className={classes.topFirst}>
            <div className={classes.backIcon} onClick={() => {}}>
              <i className='fas fa-angle-left'></i>
            </div>
            <span className={classes.scenePoolTitle}>Scene Pool</span>
          </div>
          <div className={classes.topSecond}>
            <GeneralListDropdown
              data={scenePoolList1}
              className={classes.dropDown}
            />
            <GeneralListDropdown data={scenePoolList2} />
          </div>
        </div>
        {NamesData !== undefined && NamesData.length !== 0 ? (
          <>
            <Grid container spacing={3}>
              {NamesData.slice(
                0,
                !showStatus ? someShowMore : NamesData.length
              ).map((item: any, key: any) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={key}>
                    <NameCard mainName={item.mainName} price={item.price} />
                  </Grid>
                );
              })}
            </Grid>
            <div
              className={
                NamesData.length < someShowMore
                  ? classes.displayNone
                  : classes.showmoreContent
              }>
              <ShowMoreLessBtn
                letter={showStatus ? "Show Less" : "Show All"}
                onClick={handleShowBtn}
              />
            </div>
          </>
        ) : (
          <div className={classes.createContent}>
            <span className={classes.contentLetter}>
              {t("It looks like that you don't have any Scenes")}.
              <br />
              <span
                className={classes.importantLink}
                onClick={() => navigate("/builder/builder_claim-name")}>
                {t("Click here")}
              </span>{" "}
              {t("to get Started")}.
            </span>
          </div>
        )}
      </div>
    </>
  );
}
