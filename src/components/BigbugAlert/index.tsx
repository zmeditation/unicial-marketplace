import { makeStyles, Theme } from "@material-ui/core/styles";
import { useAppSelector } from "../../store/hooks";
import ActionButton from "../Base/ActionButton";
import { bigbugAlertStatus } from "../../store/bigbugalert/selectors";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  loaderWrapper: {
    position: "fixed",
    zIndex: 99998,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  bigbugRoot: {
    padding: "30px",
    position: "fixed",
    flexDirection: "column",
    width: "407px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 99999,
    [theme.breakpoints.down(769)]: {
      minWidth: "calc(100% - 32px) !important",
    },
  },
  bigbugLabel: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0.02em",
    color: "white",
    fontFamily: "Montserrat",
  },
  bigbugDescription: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "17px",
    color: "#96A1DB",
    fontFamily: "Lato",
    marginTop: "20px",
  },
  mainnet: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "17px",
    lineHeight: "17px",
    color: "#FFFFFF",
    fontFamily: "Lato",
    marginTop: "20px",
  },
  bidchange: {
    minWidth: "160px",
    width: "100%",
    marginTop: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
}));



export default function BigbugAlert() {
  const classes = useStyles();
  const showBigbug = useAppSelector(bigbugAlertStatus);
  const { t } = useTranslation();

  

  return (
    <>
      <div className={showBigbug === true ? classes.loaderWrapper: classes.displayNone}>
        <div className={classes.bigbugRoot}>
          <div className={classes.bigbugLabel}>{t("Wrong Network")} !</div>
          <div className={classes.bigbugDescription}>
            {t("You need to be connected to")}{" "}
            <span className={classes.mainnet}>{t("Zilionixx Mainnet")}</span>
            &nbsp; &nbsp;
            {t("to use this app, please switch your network to continue")}.
          </div>
          <ActionButton color='light' className={classes.bidchange}>
            {t("SWITCH TO Zilionixx MAINNET")}
          </ActionButton>
        </div>
      </div>
    </>
  );
}
