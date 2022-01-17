import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const HeaderSignInBtnStyle = makeStyles((theme: Theme) =>
  createStyles({
    signBtn: {
      width: "107px",
      height: "40px",
      border: "double 1px transparent",
      borderRadius: "100px",
      backgroundImage:
        "linear-gradient(#21263f, #21263f), radial-gradient(circle at top left, #7F64E2, #41A6EF)",
      backgroundClip: "content-box, border-box",
      backgroundOrigin: "border-box",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    signMiddle: {
      border: "1px solid #282e4e",
      height: "20px",
    },
    signIcon: {
      display: "flex",
      alignItems: "center",
    },
    signBtnContent: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      padding: "10px",
    },
  })
);
