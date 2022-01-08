import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import Accordion from "@material-ui/core/Accordion";
export const HeaderMobileMenuStyle = makeStyles((theme: Theme) =>
  createStyles({
    header_mobilemenu: {
      display: "none",

      [theme.breakpoints.down(768)]: {
        display: "block",
        position: "absolute",
        width: "80%",
        top: "-1px",
        left: "-4px",
        zIndex: 5,
      },
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
    collapse: {
      width: "100%",
      backgroundColor: "#242129",
      "&:hover": {
        backgroundColor: "#322e37",
      },
    },
  })
);
