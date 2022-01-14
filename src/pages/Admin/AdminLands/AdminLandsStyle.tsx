import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";

//accordion relate
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
//

export const AdminLandsStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    maxWidth: "1064px",
    margin: "40px auto",
    position: "relative",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      maxWidth: "933px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "723px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
    },
  },

  backBtnPosition: {
    position: "absolute",
  },

  LandMap: {
    maxWidth: "945px",
    display: "grid",
    margin: "0px auto",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "820px",
    },
    [theme.breakpoints.down(992)]: {
      maxWidth: "600px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
      marginTop: "60px",
    },
  },
  LandMapContent: {
    height: "400px",
    [theme.breakpoints.down(768)]: {
      margin: "0px calc( (100% - 400px) / 2)",
    },
  },
}));
