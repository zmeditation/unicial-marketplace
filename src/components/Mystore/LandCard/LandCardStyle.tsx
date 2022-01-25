import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

export const LandCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: "360px",
      height: "424px",
      borderRadius: "15px",
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      padding: "30px 12px",
      marginBottom: "10px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    iconContainer: {
      display: "flex",
      width: "50px",
      justifyContent: "space-between",
    },

    icon: {
      width: "20px",
      height: "20px",
    },
    imageContainer: {
      width: "100%",
      height: "249px",
      //   backgroundImage: "linear-gradient(67.71deg, #39B8FD 0%, #AD2DFE 98.37%)",
      borderRadius: "15px",
      marginTop: "23px",
      marginBottom: "17px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    image: {
      // width: "80%",
      // maxWidth: "80%",
      width: "100%",
      height: "100%",
      borderRadius: "15px",
    },
    productName: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0,02em",
      color: "white",
      marginBottom: "10px",
    },
    bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    category: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#96A1DB",
    },
    priceContainer: {
      display: "flex",
      width: "70px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "30px",
      letterSpacing: "0.02em",
      color: "white",
    },
  })
);
