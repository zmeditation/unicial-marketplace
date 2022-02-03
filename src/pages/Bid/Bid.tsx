/** @format */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import CallMadeIcon from "@material-ui/icons/CallMade";

import ActionButton from "../../components/Base/ActionButton";
import TokenImg from "../../assets/img/1.png";
import NeedSignIn from "..//NeedSignIn";
import { useStyles, StyledInput } from "./BidStyle";
import { BackButton } from "../../components/BackButton/BackButton";
import settingicon from "../../assets/svg/bidpage_settingicon.svg";
import raiseicon from "../../assets/svg/bid_raiseicon.svg";
import calendar_icon from "../../assets/svg/calendar_icon.svg";
import { Grid } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { useTranslation } from "react-i18next";

const Bid = () => {
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
              <div className={classes.title}>{t("Place a Bid")}</div>
              <div className={classes.subtitle}>
                {t("Set a price and expiration date for your bid on")}{" "}
                <span>{t("Genesis Plaza")}</span>.
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <Grid container>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>
                        {t("PRICE")}
                      </div>
                      <FormControl>
                        <StyledInput
                          placeholder='0'
                          onChange={handleChange}
                          startAdornment={
                            <InputAdornment position='start'>
                              <img src={settingicon} />
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid md={6} sm={6} xs={6} item>
                      <div className={classes.subheader_label}>
                        {t("EXPIRATION DATE")}
                      </div>
                      <FormControl>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            className={classes.datePicker}
                            format='MM/dd/yyyy'
                            margin='normal'
                            id='date-picker-dialog'
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                            keyboardIcon={<img src={calendar_icon} />}
                          />
                        </MuiPickersUtilsProvider>
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
                <ActionButton color='light' className={classes.bidchange}>
                  {t("Bid")}
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

export default Bid;
