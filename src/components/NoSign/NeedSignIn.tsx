import { makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  descriptionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: "14px",
    color: "#676370",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',
  },
  link: {
    color: "#ff2d55",
    textDecoration: "none",
  },
}));

export default function NeedSignIn() {
  const classes = useStyles();
  const {t, i18n} = useTranslation();
  return (
    <div className={classes.descriptionContainer}>
      <p className={classes.text}>
        {t("You need to")}{" "}
        <a href="/signin" className={classes.link}>
          {t("Sign In")}
        </a>{" "}
        {t("to access this page")}
      </p>
    </div>
  );
}
