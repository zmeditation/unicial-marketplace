import React, { useState, useEffect } from "react";
import { useStyles } from "./CountDownStyle";

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
        <div className={classes.countdownItem}>
          <div className={classes.timeItem}>
            {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
          </div>
          <div className={classes.daysDesc}>Days</div>
        </div>
        <span className={classes.semicon}>:</span>
        <div className={classes.countdownItem}>
          <div className={classes.timeItem}>
            {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
          </div>
          <div className={classes.hoursDesc}>Hours</div>
        </div>
        <span className={classes.semicon}>:</span>
        <div className={classes.countdownItem}>
          <div className={classes.timeItem}>
            {timeLeft.minutes < 10 ? "0" + timeLeft.minutes : timeLeft.minutes}
          </div>
          <div className={classes.minutesDesc}>Minutes</div>
        </div>
        <span className={classes.semicon}>:</span>
        <div className={classes.countdownItem}>
          <div className={classes.timeItem}>
            {timeLeft.seconds < 10 ? "0" + timeLeft.seconds : timeLeft.seconds}
          </div>
          <div className={classes.secondsDesc}>Seconds</div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
