import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  descriptionRoot: {
    height: "calc(100vh - 124px)",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
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
  return (
    <div className={classes.descriptionRoot}>
      <div className={classes.descriptionContainer}>
        <p className={classes.text}>
          You need to{" "}
          <a href="/signin" className={classes.link}>
            Sign In
          </a>{" "}
          to access this page
        </p>
      </div>
    </div>
  );
}
