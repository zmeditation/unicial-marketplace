import { createStyles, Theme, withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";

export const HeaderSignInBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      //   [theme.breakpoints.down(769)]: {
      //     marginTop: "22px",
      //     marginBottom: "22px",
      //     display: "contents",
      //   },
    },
    container: {
      flex: "1 1 auto",
      justifyContent: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    notificationicon: {
      fill: "white",
      fontSize: "20px",
    },
    user_menu: {
      display: "flex",
      position: "relative",
      textAlign: "left",
      outline: "none",
    },
    account_wrapper: {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
    mana: {
      flex: "none",
      cursor: "pointer",
      display: "flex",
      margin: "0 20px 0 0",
      color: "white",
      fontSize: "13px",
      lineHeight: "18px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      textDecoration: "none",
    },
    symbol: {
      fontWeight: 700,
      color: "#ff2d55",
      fontStyle: "normal",
      paddingRight: "0.3em",
      transform: "translateY(-0.06em)",
      display: "flex",
      alignItems: "center",
      marginRight: "4px",
    },
    matic_icon: {
      width: "13px",
      height: "13px",
    },
    avatar_container: {
      backgroundColor: "#37343d",
      borderRadius: "100%",
      cursor: "pointer",
      //   width: "42px",
      //   height: "42px",
    },
    item_container: {
      display: "flex",
      alignItems: "center",
    },
    item_icon: {
      fontSize: "20px",
    },
    item_label: {
      fontSize: "14px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 500,
      color: "white",
    },
    account_info: {
      color: "white",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #24212933",
      padding: "12px 16px",
    },
    image_container: {
      marginRight: "10px",
      backgroundColor: "#37343d",
      borderRadius: "100%",
      overflow: "hidden",
      position: "relative",
      display: "inline-block",
      width: "32px",
      height: "32px",
    },
    image_label: {
      fontSize: "16px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 500,
      color: "white",
    },
  })
);

export const StyledRingButton = withStyles({
  root: {
    // backgroundColor: "#333842",
    borderRadius: "5px 0px 0px 5px",
    padding: "7px 11px",
    minWidth: "35px",
    marginRight: "7px",
    "&.Mui-disabled": {
      // backgroundColor: "#333842 !important",
      "& svg": {
        fill: "#ff2d55 !important",
      },
    },
  },
})(Button);
