import React, { useState, useEffect } from "react";
import { useStyles } from "./CountDownStyle";
import CountTexture from "../../assets/svg/count_texture.svg";

const CountDown = () => {
  const classes = useStyles();

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date("2022-12-30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      return setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className={classes.root}>
        <img
          src={CountTexture}
          className={classes.countTexture1}
          alt="texture"
        ></img>
        <img
          src={CountTexture}
          className={classes.countTexture2}
          alt="texture"
        ></img>
        <div className={classes.countdownItem}>
          <div className={classes.timeDesc}>Days</div>
          <div className={classes.timeItem}>
            {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
          </div>
        </div>
        <span className={classes.semicon}></span>
        <div className={classes.countdownItem}>
          <div className={classes.timeDesc}>Hours</div>
          <div className={classes.timeItem}>
            {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
          </div>
        </div>
        <span className={classes.semicon}></span>
        <div className={classes.countdownItem}>
          <div className={classes.timeDesc}>Minutes</div>
          <div className={classes.timeItem}>
            {timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}
          </div>
        </div>
        <span className={classes.semicon}></span>
        <div className={classes.countdownItem}>
          <div className={classes.timeDesc}>Seconds</div>
          <div className={classes.timeItem}>
            {timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
