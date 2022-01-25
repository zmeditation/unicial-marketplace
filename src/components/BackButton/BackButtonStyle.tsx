import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  backBtn: {
    // position: "absolute",
    // bottom: "-50px",
    display: "flex",
    background: "linear-gradient(to right, #7F64E2 20%, #41A6EF 80%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-2px)",
    },
  },
  revertIcon: {
    transform: "rotate(-45deg)",
    marginRight: "10px",
    background: "linear-gradient(#7F64E2 20%, #41A6EF 80%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
