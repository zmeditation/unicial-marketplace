import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./BuilderNamesStyles";

export default function BuilderNames() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>  
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 {t("RESULTS")}</div>
          <div className={classes.functionBtn}>
            <div
              className={classes.functionIcon}
              onClick={() => navigate("/builder/builder_claim-name")}>
              <i className='far fa-plus'></i>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
}
