/** @format */

import { Theme, makeStyles } from "@material-ui/core/styles";
export const CollectiblesStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "calc(100vh - 246px)",
    maxWidth: "1064px",
    margin: "10px auto 60px auto",
    position: "relative",
    display: "flex",
    "& canvas, .react-tile-map ": {
      borderRadius: "15px",
    },
    [theme.breakpoints.down(1200)]: {
      maxWidth: "933px",
    },
    [theme.breakpoints.down(960)]: {
      maxWidth: "calc(100% - 32px) !important",
      margin: "0px 16px",
    },
    [theme.breakpoints.down(769)]: {
      maxWidth: "calc(100% - 32px) !important",
    },
  },
  leftPart: {
    width: "264px",
    marginRight: "20px",
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
  CollectibleFilterContainer: {
    [theme.breakpoints.down(768)]: {
      display: "none",
    },
  },
  rightPart: {
    width: "100%",
  },
  products: {
    display: "flex",
    justifyContent: "space-between",
  },
  product: {
    width: "32%",
  },
}));
