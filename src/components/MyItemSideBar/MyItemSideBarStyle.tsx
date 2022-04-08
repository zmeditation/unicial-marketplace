import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const MyItemSideBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    myItemsBlock: {
      width: "360px",
      height: "100vh",
    },
    myItemNavbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "62px",
      backgroundColor: "#FFFFFF0D",
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
