/** @format */
import React, { useState, useEffect } from "react";
import check from "../../assets/svg/notification_check.svg";
import error from "../../assets/svg/notification_error.svg";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  notificationRoot: {
    position: "absolute",
    top: "123px",
    right: "224px",
    flexDirection: "column",
  },
  notificationContainer: {
    marginTop: "10px",
    width: "407px",
    height: "60px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "7px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    zIndex: 99999,
  },
  notificationPicture: {
    width: "44px",
    height: "44px",
    left: "1206px",
    top: "175px",
    background: "linear-gradient(57.2deg, #29C98F 20.25%, #66D8AF 82.22%)",
    transform: "rotate(-180deg)",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationPicture_error: {
    width: "44px",
    height: "44px",
    left: "1206px",
    top: "175px",
    background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
    transform: "rotate(-180deg)",
    borderRadius: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pictureCenter: {
    border: "1px solid #21263F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    color: "#000000",
    transform: "rotate(-180deg)",
  },
  notificationText: {
    marginLeft: "15px",
    marginRight: "70px",
  },
  notificationTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#29C98F",
  },
  notificationTitle_error: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "22px",
    color: "#FF7C4C",
  },
  notificationDescription: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    opacity: 0.5,
    color: "#96A1DB",
  },
  closeIcon: {
    color: "#96A1DB",
    width: "15px",
    height: "15px",
    cursor: "pointer",
  },
}));

interface StyledNotificationProps {
  type: string;
  description?: string;
  handleClose?: any;
  showAlert?: boolean;
}

export default function Notifications({
  type,
  description,
  handleClose,
  showAlert,
}: StyledNotificationProps) {
  const classes = useStyles();

  const handleCloseClick = () => {
    handleClose();
  };
  return (
    <>
      <div
        className={
          showAlert === true ? classes.notificationRoot : classes.displayNone
        }>
        {type === "success" ? (
          <div className={classes.notificationContainer}>
            <div className={classes.notificationPicture}>
              <img src={check} className={classes.checkIcon} />
            </div>
            <div className={classes.notificationText}>
              <div className={classes.notificationTitle}>Success</div>
              <div className={classes.notificationDescription}>
                {description}
              </div>
            </div>
            <CloseIcon className={classes.closeIcon} />
          </div>
        ) : (
          <div className={classes.notificationContainer}>
            <div className={classes.notificationPicture_error}>
              <img src={error} className={classes.checkIcon} />
            </div>
            <div className={classes.notificationText}>
              <div className={classes.notificationTitle_error}>Error</div>
              <div className={classes.notificationDescription}>
                {description}
              </div>
            </div>
            <CloseIcon
              className={classes.closeIcon}
              onClick={handleCloseClick}
            />
          </div>
        )}
      </div>
    </>
  );
}
