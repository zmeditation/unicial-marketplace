/** @format */
import React, { useState, useEffect } from "react";
import { SemipolarSpinner } from "react-epic-spinners";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showSpinner } from "../../store/spinner";

import { spinnerStatus } from "../../store/spinner/selectors";

const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  notificationRoot: {
    position: "fixed",
    top: "50%",
    right: "50%",
    flexDirection: "column",
    zIndex: 99999,
  },
  spinner: {
    "&.liNMpo .ring:nth-child(1)": {
      display: "none",
    },
    "&.liNMpo .ring:nth-child(2)": {
      display: "none",
    },
    "&.liNMpo .ring:nth-child(5)": {
      borderRadius: "50%",
      position: "absolute",
      border: "calc(65px * 0.05) solid transparent",
      borderColor: "#29C98F",
    },
    "&.liNMpo .ring:nth-child(4)": {
      borderRadius: "50%",
      position: "absolute",
      border: "calc(65px * 0.05) solid transparent",
      borderTopColor: "#FF7C4C",
      borderLeftColor: "#FFB03A",
      borderRightColor: "#FFB03A",
    },
    "&.liNMpo .ring:nth-child(3)": {
      borderRadius: "50%",
      position: "absolute",
      border: "calc(65px * 0.05) solid transparent",
      borderTopColor: "#41A6EF",
      borderLeftColor: "#7F64E2",
      borderRightColor: "#7F64E2",
    },
  },
}));

export default function Spinner() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const spinner = useAppSelector(spinnerStatus);

  const [openSpinner, setOpenSpinner] = React.useState(false);

  React.useEffect(() => {
    if (spinner == true) {
      setOpenSpinner(true);
    }
  }, [spinner]);

  useEffect(() => {
    let timeId = setTimeout(() => {
      dispatch(showSpinner(false));
      setOpenSpinner(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, [spinner]);

  return (
    <>
      <div
        className={
          openSpinner === true ? classes.notificationRoot : classes.displayNone
        }>
        <SemipolarSpinner color='red' className={classes.spinner} size={100} />
      </div>
    </>
  );
}
