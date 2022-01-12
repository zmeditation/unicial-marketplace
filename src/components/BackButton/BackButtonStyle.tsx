import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  backBtn: {
    borderRadius: "25px",
    border: "1px solid #6763709c",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    marginBottom: "10vh",
    cursor: "pointer",
    "&:hover": {
      borderColor: "white",
    },
    [theme.breakpoints.down(769)]: {
      top: "-40px",
    },
  },
  backIcon: {
    width: "15px",
    height: "15px",
    color: "white",
    marginLeft: "10px",
  },
}));
