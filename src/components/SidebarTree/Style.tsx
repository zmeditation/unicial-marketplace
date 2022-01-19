//material-ui
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
//style
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    labelNav: {
      display: "flex",
      alignItems: "center",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "40px",
      color: "white",
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
      width: "100%",
      zIndex: 1,
      // [theme.breakpoints.down("md")]: {
      //   width: "180px",
      //   minWidth: "180px",
      // },
      // [theme.breakpoints.down(768)]: {
      //   display: "none",
      // },
    },
    sidebarWrap: {
      width: "100%",
    },
    sidebarLink: {
      display: "flex",
      justifyContent: "space-between",
      borderLeft: "2px solid transparent",
      alignItems: "center",
      listStyle: "none",
      height: "36px",
      textDecoration: "none",
      fontSize: "14px",
      cursor: "pointer",
      padding: "0px 21px 0px 59px",
      // "&:hover": {
      //   background: "#f5f5f5",
      //   cursor: "pointer",
      // },
    },
    activeSidebarLink: {
      display: "flex",
      justifyContent: "space-between",
      borderLeft: "4px solid #7F64E2",
      alignItems: "center",
      listStyle: "none",
      height: "36px",
      textDecoration: "none",
      fontSize: "14px",
      background: "#f5f5f5",
      padding: "0px 21px 0px 59px",
      // "&:hover": {
      //   background: "#f5f5f5",
      //   cursor: "pointer",
      // },
    },
    dropdownLink: {
      fontSize: "16px",
      lineHeight: "40px",
      paddingLeft: "70px",
      textDecoration: "none",
      color: "#70708F",
      borderLeft: "2px solid transparent",
      display: "flex",
      alignItems: "center",
      // "&:hover": {
      //   background: "#f5f5f5",
      //   cursor: "pointer",
      // },
    },
    activeDropdownLink: {
      height: "40px",
      borderLeft: "4px solid #7F64E2",
      paddingLeft: "40px",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
      background: "#f5f5f5",
      // "&:hover": {
      //   background: "#f5f5f5",
      //   cursor: "pointer",
      // },
    },
  })
);
