//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    labelNav: {
      display: "flex",
      alignItems: "center",
      fontFamily: "Roboto",
      "& i": {
        margin: "0px 8px",
        color: "#848e9c",
        fontSize: "24px",
      },
    },
    arrowIcon: {
      "& svg": {
        margin: "0px 4px",
        color: "#848e9c",
        fontSize: "20px",
      },
    },
    sidebarNav: {
      minHeight: "calc(100vh - 64px)",
      display: "flex",
      justifyContent: "center",
      top: 64,
      boxShadow: "rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 8%) 0px 0px 4px",
      minWidth: "200px",
      width: "200px",
      zIndex: 1,
      [theme.breakpoints.down("md")]: {
        width: "180px",
        minWidth: "180px",
      },
      [theme.breakpoints.down(768)]: {
        display: "none",
      },
    },
    sidebarWrap: {
      width: "100%",
    },
    sidebarLink: {
      display: "flex",
      justifyContent: "space-between",
      borderLeft: "4px solid transparent",
      alignItems: "center",
      listStyle: "none",
      height: "48px",
      textDecoration: "none",
      fontSize: "14px",
      "&:hover": {
        background: "#f5f5f5",
        cursor: "pointer",
      },
    },
    activeSidebarLink: {
      display: "flex",
      justifyContent: "space-between",
      borderLeft: "4px solid #f0b90b",
      alignItems: "center",
      listStyle: "none",
      height: "48px",
      textDecoration: "none",
      fontSize: "14px",
      background: "#f5f5f5",
      "&:hover": {
        background: "#f5f5f5",
        cursor: "pointer",
      },
    },
    dropdownLink: {
      height: "48px",
      paddingLeft: "40px",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      borderLeft: "4px solid transparent",
      fontSize: "14px",
      "&:hover": {
        background: "#f5f5f5",
        cursor: "pointer",
      },
    },
    activeDropdownLink: {
      height: "48px",
      borderLeft: "4px solid #f0b90b",
      paddingLeft: "40px",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
      background: "#f5f5f5",
      "&:hover": {
        background: "#f5f5f5",
        cursor: "pointer",
      },
    },
  })
);
