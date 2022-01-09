import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
export const HeaderMobileMenuStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      color: "white",
      position: "relative",
      "& .MuiTypography-root": {
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
        fontWeight: 700,
        color: "#ffffff",
        cursor: "pointer",
      },
    },
    active: {
      padding: "15px 70px",
      backgroundColor: "#67637033",
      "& .MuiTypography-root": {
        fontSize: "13px",
      },
    },
    unactive: {
      padding: "15px 70px",
      "& .MuiTypography-root": {
        fontWeight: 100,
        fontSize: "13px",
      },
    },
    logo: {
      cursor: "pointer",
      width: "36px",
      height: "36px",
      marginTop: "2px",
    },
    firstItem: {
      flex: "none",
      marginLeft: "20px",
      display: "flex",
      "& .MuiTypography-root": {
        fontSize: "13px",
      },
      "& svg": {
        marginTop: "3px",
      },
    },
    headerMobilemenu: {
      display: "none",

      [theme.breakpoints.down(768)]: {
        display: "block",
        width: "80%",
        zIndex: 5,
      },
    },
    collapse: {
      width: "100vw",
      backgroundColor: "#242129",
      position: "absolute",
      left: "-16px",
    },
    headerlistItem: {
      padding: "0px",
    },
  })
);
