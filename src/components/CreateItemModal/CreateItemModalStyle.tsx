import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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
  modalRoot: {
    padding: "30px",
    position: "fixed",
    width: "678px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 99999,
    [theme.breakpoints.down(769)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
    cursor: "pointer",
    "& i": {
      fontSize: "22px",
      fontWeight: 100,
    },
  },
  title: {
    marginBottom: "20px",
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
  mainContainer: {
    margin: "28px 0px",
    backgroundColor: "#141b31",
    height: "500px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 75px",
  },
  dragPartContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  uploadImgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#282E4E",
    width: "64px",
    height: "64px",
    marginBottom: "32px",
  },
  uploadIcon: {
    width: "80%",
    height: "80%",
  },
  dragInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  normalLetter: {
    color: "white",
    fontSize: "17px",
  },
  browserContainer: {},
  colorLetter: {
    color: "red",
    fontSize: "17px",
    cursor: "pointer",
  },
  fileInput: {
    display: "none",
  },
}));
