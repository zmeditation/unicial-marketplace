import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const MyItemSideBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    myItemsBlock: {
      width: "451px",
      height: "100vh",
    },
    myItemNavbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "62px",
      backgroundColor: "#3a3f59",
    },
    NavbarTitle: {
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "50px",
    },
  })
);
