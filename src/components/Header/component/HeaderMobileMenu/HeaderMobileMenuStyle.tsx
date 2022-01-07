import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import Accordion from "@material-ui/core/Accordion";
export const HeaderMobileMenuStyle = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
    collapse: {
      width: "100%",
      backgroundColor: "black",
    },
  })
);
