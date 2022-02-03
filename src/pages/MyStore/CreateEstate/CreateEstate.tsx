/** @format */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import CallMadeIcon from "@material-ui/icons/CallMade";

import ActionButton from "../../../components/Base/ActionButton";
import TokenImg from "../../../assets/img/1.png";
import NeedSignIn from "../../../components/NoSign/NeedSignIn";
import { useStyles, StyledInput } from "./CreateEstateStyle";
import { BackButton } from "../../../components/BackButton/BackButton";
import { Grid } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/hooks";
import { selectestates } from "../../../store/selectedestates/selectors";

const CreateEstate = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const estates = useAppSelector(selectestates);

  var isSignIn = 1;

  const handleChange = () => {};

  return (
    <div className={classes.root}>
      {isSignIn === 1 ? (
        <div className={classes.container_root}>
          <BackButton className={classes.backButton} />

          <div className={classes.bidCard}>
            <div className={classes.leftCard}>
              <div className={classes.imgContent}>
                <img
                  src={TokenImg}
                  className={classes.tokenImg}
                  alt='token'></img>
              </div>
            </div>
            <div className={classes.rightCard}>
              <div className={classes.title}>{t("Create Estate")}</div>
              <div className={classes.subtitle}>
                {t("Set a name and description for your estate")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>{t("Name")}</div>
                      <FormControl>
                        <StyledInput
                          placeholder={t("Decentraland")}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>
                        {t("Description")}
                      </div>
                      <FormControl>
                        <StyledInput
                          placeholder={t("This is an estate")}
                          onChange={handleChange}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
                <p>&nbsp;</p>
              </div>
              {/* buttons */}
              <div className={classes.buttons}>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={() => navigate("/account/estate/create")}>
                  {t("CANCEL")}
                </ActionButton>
                <ActionButton color='light' className={classes.bidchange}>
                  {t("SUBMIT")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NeedSignIn />
      )}
    </div>
  );
};

export default CreateEstate;
