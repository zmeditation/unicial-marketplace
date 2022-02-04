/** @format */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import ActionButton from "../../../components/Base/ActionButton";
import TokenImg from "../../../assets/img/1.png";
import NeedSignIn from "../../NeedSignIn";
import { useStyles, StyledInput } from "./EstateTransferStyle";
import { BackButton } from "../../../components/BackButton/BackButton";
import settingicon from "../../assets/svg/bidpage_settingicon.svg";
import raiseicon from "../../../assets/svg/bid_raiseicon.svg";
import calendar_icon from "../../assets/svg/calendar_icon.svg";
import { Grid } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { useTranslation } from "react-i18next";

const ParcelTransfer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2022-01-02")
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

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
              <div className={classes.title}>{t("Transfer Estate")}</div>
              <div className={classes.subtitle}>
                {t("Your are not the owner of Roads.")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>
                        {t("RECEPIENT ADDRESS")}
                      </div>
                      <FormControl>
                        <StyledInput
                          placeholder='0x'
                          onChange={handleChange}
                          startAdornment={
                            <InputAdornment position='start'>
                              {/* <img src={settingicon} /> */}
                            </InputAdornment>
                          }
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
                  onClick={() => navigate(-1)}>
                  {t("Cancel")}
                </ActionButton>
                <ActionButton
                  disabled
                  color='light'
                  className={classes.bidchange}>
                  {t("Transfer")} &nbsp;
                  <img src={raiseicon} />
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

export default ParcelTransfer;
