import { Theme, makeStyles } from "@material-ui/core/styles";
export const CollectiblesStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    maxWidth: "1064px",
    margin: "40px auto",
    position: "relative",
    display: "flex",
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
  leftPart: {
    width: "264px",
    marginRight: "20px",
  },
  rightPart: {
    width: "100%",
  },
  products: {
    display: "findByLabelText",
  },
}));
