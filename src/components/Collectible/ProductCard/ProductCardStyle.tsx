/** @format */

import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";

export const ProductCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: "250px",
      borderRadius: "15px",
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      padding: "20px 8px 20px 8px",
      margin: "10px",
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
      minWidth: "180px",
      height: "185px",
      backgroundImage: "linear-gradient(67.71deg, #39B8FD 0%, #AD2DFE 98.37%)",
      borderRadius: "15px",
      marginTop: "20px",
      marginBottom: "17px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      maxWidth: "180px",
      maxHeight: "180px",
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
