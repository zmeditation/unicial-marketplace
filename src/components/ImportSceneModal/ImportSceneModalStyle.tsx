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
    padding: "30px",
    position: "fixed",
    width: "650px",
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
  btnRoot: {
    display: "flex",
    width: "100%",
  },
  nextBtn: {
    minWidth: "160px",
    width: "100%",
    marginTop: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
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
  description: {
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Lato",
    fontSize: "20px",
    lineHeight: "19px",
    color: "#FFFFFF",
    opacity: "0.7",
  },
  fileImport:{},
  marginLeft: {
    marginLeft: "20px",
  },
  widthFull: {
    width: "100%",
  },
}));
