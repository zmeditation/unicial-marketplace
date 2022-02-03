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
      marginLeft: "13px",
      fontSize: "18px",
      fontFamily: "Montserrat",
      width: "90px",
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
      marginLeft: "18px",
    },
  })
);
