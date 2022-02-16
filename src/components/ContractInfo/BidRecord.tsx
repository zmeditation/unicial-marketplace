import { Theme, makeStyles } from "@material-ui/core/styles";
import fromImg from "../../assets/img/1.png";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flex: "1 0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 41px",
    margin: "13px 0px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#282E4E",
    borderRadius: "15px",
    [theme.breakpoints.down(769)]: {
      paddingTop: "25px",
    },
  },
  container: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down(769)]: {
      display: "block",
    },
  },
  fromPart: {
    width: "30%",
    display: "block",
    marginRight: "24px",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      width: "80%",
      marginBottom: "15px",
    },
  },
  pricePart: {
    marginLeft: "48px",
    width: "20%",
    marginRight: "24px",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      width: "100%",
      marginBottom: "15px",
    },
  },
  timePart: {
    marginLeft: "48px",
    width: "20%",
    flexFlow: "column nowrap",
    maxWidth: "100%",
    [theme.breakpoints.down(769)]: {
      marginLeft: "0px",
      width: "100%",
      marginBottom: "15px",
    },
  },
  title: {
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: 400,
    color: "#96A1DB",
    opacity: "50%",
    marginBottom: "10px",
  },

  fromIamge: {
    marginRight: "6px",
    borderRadius: "3px",
    width: "20px",
    height: "20px",
  },
  content: {
    fontSize: "16px",
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    marginTop: "4px",
    fontWeight: 400,
  },
  symbol: {
    fontSize: "20px",
    paddingRight: "0.3em",
    transform: "translateY(-0.06em)",
    background: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginTop: "0.5px",
  },
}));

interface data {
  fromName: string;
  price: string;
  time: string;
}
const addCommas = (nStr: any) => {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};

const BidRecord = ({ fromName, price, time }: data) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      {
        <div className={classes.container}>
          <div className={classes.fromPart}>
            <div className={classes.title}>{t("From")}</div>
            <div className={classes.content}>
              <img
                src={fromImg}
                className={classes.fromIamge}
                alt='fromimage!'
              />
              {fromName}
            </div>
          </div>

          <div className={classes.pricePart}>
            <div className={classes.title}>{t("Price")}</div>
            <div className={classes.content}>
              <i className={classes.symbol}>⏣</i>
              {addCommas(price)}
            </div>
          </div>

          <div className={classes.timePart}>
            <div className={classes.title}>{t("Time Left")}</div>
            <div className={classes.content}>
              {time} 
              {/* {t("days")} */}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default BidRecord;
