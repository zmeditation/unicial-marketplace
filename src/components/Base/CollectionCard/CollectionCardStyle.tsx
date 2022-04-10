import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const CollectionCardStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: "15px",
      backgroundColor: "#282E4E",
      boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
      padding: "9px 9px 21px",
      overflow: "hidden",
      minWidth: "200px",
      marginBottom: "20px",
      "&:hover": {
        transform: "translateY(-2px)",
        cursor: "pointer",
        "& $moreIcon": {
          display: "block",
        },
      },
    },
    yellowTop: {
      width: "100%",
      height: "51px",
      borderTopRightRadius: "14px",
      borderTopLeftRadius: "14px",
      backgroundColor: "#DFB140",
      display: "flex",
      justifyContent: "right",
      alignItems: "center",
    },
    imageContainer: {
      width: "100%",
      backgroundColor: "#21263F",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      marginBottom: "12px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "relative",
    },
    moreIcon: {
      marginRight: "10px",
      display: "none",
    },
    image: {
      [theme.breakpoints.up(1200)]: {
        maxWidth: "150px",
        maxHeight: "150px",
      },
      [theme.breakpoints.down(1200)]: {
        width: "100%",
        alignSelf: "self-end",
      },
      [theme.breakpoints.down(960)]: {
        width: "100%",
        alignSelf: "self-end",
      },
    },
    nameContainer: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      color: "white",
      marginBottom: "10.8px",
      marginLeft: "3px",
      textAlign: "left",
    },
    descContainer: {
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "16.8px",
      color: "#96A1DB",
      display: "flex",
      marginLeft: "3px",
    },
    divide: {
      width: "1px",
      height: "15px",
      borderRight: "1px solid #96A1DB",
      margin: "1px 5px 0px",
    },
  })
);
