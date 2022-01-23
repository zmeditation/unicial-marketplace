import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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
      display: "flex",
      justifyContent: "center",
      top: 64,
      minWidth: "200px",
      width: "100%",
      zIndex: 1,
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
    },
  })
);
