import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import productImg from "../../assets/svg/texture.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "92px",
      backgroundColor: "#282E4E",
      borderRadius: "15px",
      padding: "16px 100px 16px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&:hover": {
        transform: "translateY(-2px)",
        cursor: "pointer",
      },
      [theme.breakpoints.down(726)]: {
        height: "auto",
      },
    },
    productContainer: {
      width: "81px",
      height: "68px",
      display: "flex",
      flexDirection: "column",

      [theme.breakpoints.down(726)]: {
        width: "140px",
        height: "150px",
      },
    },
    yellowPart: {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      width: "100%",
      height: "20%",
      backgroundColor: "#DFB140",
    },
    imgContainer: {
      width: "100%",
      height: "80%",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },
    infoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "calc(100% - 132px )",
      [theme.breakpoints.down(726)]: {
        display: "block",
        width: "calc(100% - 190px)",
      },
    },
    itemContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down(726)]: {
        marginBottom: "15px",
      },
    },
    whiteColor: {
      color: "white",
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
    },
    greyColor: {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19.2px",
      color: "#96A1DB",
    },
    yellowColor: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      background: "linear-gradient(to right, #FF7C4C 10%, #FFB03A 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    img: {
      width: "100%",
      height: "100%",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
    },
  })
);

export default function CollectionItemInfoRow() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.productContainer}>
          <div className={classes.yellowPart}></div>
          <div className={classes.imgContainer}>
            <img src={productImg} className={classes.img} />
          </div>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.itemContainer}>
            <div className={classes.whiteColor}>OrionNFT</div>
            <div className={classes.greyColor}>Wearable</div>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.whiteColor}>Eyes</div>
            <div className={classes.greyColor}>Category</div>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.whiteColor}>Unique</div>
            <div className={classes.greyColor}>Rarity</div>
          </div>
          <div className={classes.itemContainer}>
            <div className={classes.yellowColor}>Set Price</div>
            <div className={classes.greyColor}>price</div>
          </div>
        </div>
      </div>
    </>
  );
}
