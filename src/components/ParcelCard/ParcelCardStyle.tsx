/** @format */

import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";

export const ParcelCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      backgroundColor: "#282E4E",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
    },
    cardLabel: {
      fontSize: "18px",
      fontFamily: "Montserrat",
      width: "90px",
      margin: "auto",
    },
    cardDescription: {
      fontSize: "15px",
      color: "white",
      opacity: "60%",
      marginTop: "10px",
      fontFamily: "Lato",
    },
    location: {
      marginTop: "30px",
      margin: "auto",
    },
  })
);
