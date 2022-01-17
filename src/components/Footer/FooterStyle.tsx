import { createStyles, Popover, Theme } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

export const FooterStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "38px",
      width: "100%",
      backgroundColor: "#21263F",
    },
    container: {
      flexFlow: "row nowrap",
      alignItems: "center",
      maxWidth: "100% !important",
      height: "56px",
      fontFamily:
        'system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      // display: "flex",
      width: "1064px",
      marginLeft: "auto !important",
      marginRight: "auto !important",
      justifyContent: "space-between",
      [theme.breakpoints.down(1204)]: {
        height: "auto",
        marginBottom: "48px",
      },
      [theme.breakpoints.down(1201)]: {
        flexFlow: "column nowrap",
        marginBottom: "12px",
      },
      [theme.breakpoints.down(1200)]: {
        flexFlow: "column nowrap",
        marginBottom: "12px",
        width: "933px",
      },
      [theme.breakpoints.down(992)]: {
        width: "723px",
      },
      [theme.breakpoints.down(769)]: {
        margin: "48px 16px 0px 16px !important",
        paddingBottom: "80px",
      },
      [theme.breakpoints.down(768)]: {
        width: "auto !important",
      },
    },
    mainfooter: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      marginBottom: "5px",
      [theme.breakpoints.down(1201)]: {
        marginBottom: "12px",
      },
      [theme.breakpoints.down(1025)]: {
        marginBottom: "48px",
      },
    },
    links: {
      fontFamily:
        'system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "center",
      marginTop: "2px",
    },
    link: {
      fontSize: "14px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "16.8px",
      color: "white",

      marginRight: "16px",
      marginBottom: "8px",
      textDecoration: "none",
    },
    secondaryFooter: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px",
      [theme.breakpoints.down(1025)]: {
        flexFlow: "column",
        alignItems: "center",
      },
    },
    socialLinks: {
      // marginRight: "24px",
      marginTop: "2px",
      [theme.breakpoints.down(1025)]: {
        marginBottom: "12px",
        marginRight: "0px",
      },
    },
    socialIcon: {
      width: "21px",
      height: "21px",
      display: "inline-block",
      color: "#96A1DB",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      backgroundClip: "content-box",
      cursor: "pointer",
    },
    joySvg: {
      width: "18px",
      height: "14px",
    },
    robotSvg: {
      width: "19px",
      height: "17px",
    },
    githubSvg: {
      width: "13px",
      height: "17px",
    },
    dovSvg: {
      width: "16px",
      height: "14px",
    },
    copyright: {
      color: "#96A1DB",
      fontSize: "14px",
      fontFamily:
        'system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      lineHeight: "1.7em",
    },
    languageDropdown: {
      width: "87px",
      height: "30px",
      transform: "translateY(-4px)",
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      outline: 0,
      textAlign: "center",
      //
      borderRadius: "100px",
      border: "1px solid",
      borderImageSlice: 2,
      borderWidth: "1px",
      borderImageSource: "linear-gradient( #7F64E2, #41A6EF)",
      //
      [theme.breakpoints.down(1025)]: {
        marginBottom: "18px",
      },
    },
    flagLanRoot: {
      transform: "translateY(4px)",
      textTransform: "none",
      display: "inline-block",
      transition: "none",
    },
    flagLanContainer: {
      display: "flex",
      alignItems: "center",
    },
    flagIcon: {
      width: "16px",
      height: "16px",
    },
    languageLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
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

export const StyledLanguagePopover = withStyles({
  paper: {
    backgroundColor: "#676370",
    marginBottom: "70px",
    borderRadius: "6px",
    position: "absolute",
    minWidth: "180px",
  },
})(Popover);

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
