import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const PropertySideBarStyle = makeStyles((theme: Theme) =>
  createStyles({
    myItemsBlock: {
      width: "360px",
      height: "100vh",
    },
    propertyNavbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "62px",
      backgroundColor: "#3a3f59",
      textAlign: "center",
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
