import {
  createStyles,
  withStyles,
  MenuItem,
  Popover,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const CollectibleFilterStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#3e4461",
      borderRadius: "16px",
      marginBottom: "32px",
      padding: "16px 16px 8px",
    },
    selectPart: {
      alignItems: "flex-start",
      flex: "1 1 auto",
      justifyContent: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "row nowrap",
    },
    collectionSelectContainer: {
      flex: "1 0 auto",
    },
    title: {
      marginBottom: "12px !important",
      fontWeight: 600,
      color: "#676370",
      fontSize: "13px",
      lineHeight: "18px",
    },
    //select round
    listDropdown: {
      width: "100%",
      height: "30px",
      transform: "translateY(-4px)",
      cursor: "pointer",
      position: "relative",
      display: "inline-block",
      outline: 0,
      textAlign: "center",
      //
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      //
      [theme.breakpoints.down(1025)]: {
        marginBottom: "18px",
      },
    },
    listRoot: {
      transform: "translateY(2px)",
      textTransform: "none",
      display: "inline-block",
      transition: "none",
    },
    listContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    listLabel: {
      fontSize: "14px",
      lineHeight: "20px",
      marginLeft: "8px",
      fontWeight: 400,
      fontStyle: "normal",
      color: "#96A1DB",
    },
    rarityPart: {
      flex: "1 1 auto",
      alignItems: "flex-start",
      position: "relative",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
    },
    rarityPartContainer: {
      flex: "1 0 auto",
    },
    options: {
      display: "flex",
      flexFlow: "wrap",
    },
    option: {
      padding: "5px 10px",
      backgroundColor: "#363e63",
      borderRadius: "16px",
      fontWeight: 600,
      cursor: "pointer",
      marginRight: "8px",
      marginBottom: "8px",
    },
  })
);

export const StyledCollectionPopover = withStyles({
  paper: {
    backgroundColor: "#171b30",
    marginBottom: "70px",
    borderRadius: "6px",
    position: "absolute",
    minWidth: "180px",
    top: "419px",
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
