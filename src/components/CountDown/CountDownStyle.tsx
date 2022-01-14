import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  countdownItem: {
    width: "70px",
    padding: "10px 0px",
    position: "relative",
  },
  timeItem: {
    color: "#fff",
    fontSize: "36px",
    lineHeight: "53px",
    fontWeight: 800,
    position: "relative",
    textAlign: "center",
  },
  semicon: {
    fontSize: "36px",
    lineHeight: "53px",
    padding: "10px",
    width: "20px",
    fontWeight: 700,
  },
  daysDesc: {
    fontSize: "1rem",
    position: "absolute",
    top: "55px",
    left: "20px",
  },
  hoursDesc: {
    fontSize: "1rem",
    position: "absolute",
    top: "55px",
    left: "15px",
  },
  minutesDesc: {
    fontSize: "1rem",
    position: "absolute",
    top: "55px",
    left: "8px",
  },
  secondsDesc: {
    fontSize: "1rem",
    position: "absolute",
    top: "55px",
    left: "8px",
  },
}));
