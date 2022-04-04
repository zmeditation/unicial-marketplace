import { Theme, makeStyles } from "@material-ui/core/styles";

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
    padding: "30px 35px",
    position: "fixed",
    width: "620px",
    height: "354px",
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
    backgroundColor: "#4a4f66",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    width: "35px",
    height: "35px",
    "& i": {
      fontWeight: 100,
    },
  },
  title: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "50px",
    color: "#FFFFFF",
  },
  mainContainer: {
    padding: "0px 50px",
  },
  descContainer: {
    color: "#96A1DB",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: "30px",
  },
  name: {
    color: "#96A1DB",
    opacity: "50%",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14.4px",
    textAlign: "left",
    marginBottom: "8px",
    marginTop: "23px",
  },
  widthFull: {
    width: "100%",
  },
  createBtnRoot: {
    width: "100%",
    marginTop: "10px",
    height: "54px",
  },
  createBtnContainer: {
    borderRadius: "9px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundImage: "linear-gradient(to right, #FF7C4C 0%, #FFB03A 100%)",
    color: "white",
    fontFamily: "Lato",
    fontSize: "17px",
    lineHeight: "20..4px",
  },
}));
