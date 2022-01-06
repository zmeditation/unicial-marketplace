import { createStyles, Hidden, Theme, withWidth } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

export const FooterStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "0px",
      display: "flex",
      flexFlow: "row nowrap",

      alignItems: "center",
      width: "100%",
      maxWidth: "100% !important",
      height: "56px",

      backgroundColor: "#18141a",
      fontFamily:
        'system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    },
    cotainer: {
      display: "flex",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      justifyContent: "space-between",
      alignItems: "center",
    },
    mainfooter: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      height: "20px",
    },
    links: {
      fontFamily:
        'system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      fontSize: "14px",
    },
    link: {
      color: "#676370",
      fontWeight: 400,
      marginLeft: "16px",
      marginBottom: "8px",
      textDecoration: "none",
    },
    secondary_footer: {
      display: "flex",
      //   height: "56px",
    },
    social_links: {
      marginRight: "24px",
      marginTop: "2px",
    },
    social_icon: {
      display: "inline-block",
      width: "18px",
      height: "17px",
      color: "#676370",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      backgroundClip: "content-box",
      cursor: "pointer",
    },
    copyright: {
      color: "#676370",
      fontSize: "14px",
      fontFamily:
        'system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      lineHeight: "1.4285em",
    },
    language_dropdown: {
      transform: "translateY(-4px)",
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      outline: 0,
      textAlign: "left",
    },
    flag_lanRoot: {
      transform: "translateY(4px)",
      textTransform: "none",
      display: "inline-block",
      transition: "none",
    },
    flag_lanContainer: {
      display: "flex",
      alignItems: "center",
    },
    flag_icon: {
      width: "16px",
      height: "16px",
    },
    language_label: {
      fontSize: "14px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 500,
      color: "white",
    },
  })
);

export const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#676370",
    marginTop: "13px",
    borderRadius: "6px",
    position: "absolute",
  },
})(Menu);

export const StyledMenuItem = withStyles({
  root: {
    color: "white",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    minWidth: "210px",
    padding: "10px 16px",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
      backgroundColor: "#24212933",
    },
  },
})(MenuItem);
