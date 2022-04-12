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
    padding: "30px 35px",
    position: "fixed",
    width: "935px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 99999,
    [theme.breakpoints.down(975)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
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
    margin: "30px 0px 0px",
    backgroundColor: "#141b31",
    height: "435px",
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
    width: "80px",
    height: "80px",
    marginBottom: "55px",
  },
  uploadIcon: {
    width: "100%",
    height: "100%",
  },
  dragInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  normalLetter: {
    color: "#96A1DB",
    fontSize: "18px",
    fontFamily: "Lato",
    lineHeight: "29px",
  },
  browserContainer: {},
  colorLetter: {
    fontSize: "18px",
    fontFamily: "Lato",
    lineHeight: "29px",
    cursor: "pointer",
    color: "#fb895a",
  },
  fileInput: {
    display: "none",
  },
  importantFunctionLink: {
    textAlign: "center",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    color: "#fb895a",
    position: "relative",
  },
  fileImport: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "pointer ",
  },
  editModalRoot: {
    maxHeight: "720px",
    overflow: "auto",
    padding: "30px 35px",
    position: "fixed",
    width: "773px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 99999,
    [theme.breakpoints.down(773)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
    },
  },
  editMainContainer: {
    margin: "30px 0px 0px",
    backgroundColor: "#141b31",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    padding: "25px 25px",
    [theme.breakpoints.down(570)]: {
      display: "block",
    },
  },
  photoInfoContainer: {
    width: "148px",
    height: "244px",
    borderRadius: "5px",
    marginRight: "49px",
  },
  photoContainer: {
    position: "relative",
    width: "148px",
    height: "124px",
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  },
  camera: {
    color: "white",
    width: "23px",
    heigth: "21px",
    bottom: "12px",
    right: "12px",
    position: "absolute",
    "& input": {
      position: "absolute",
      width: "24px",
    },
  },
  photoDetailInfoContainer: {
    background: "#282E4E",
    padding: "17px 12px 23px 12px",
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  },
  triangleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#96A1DB",
  },
  triangleicon: {
    marginRight: "7px",
  },
  editFormContainer: {
    width: "calc(100% - 195px)",
    padding: "30px 0px 0px",
    [theme.breakpoints.down(570)]: {
      width: "100%",
    },
  },
  titleLetter: {
    color: "#96A1DB",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14.4px",
    opacity: "50%",
    textAlign: "left",
    marginBottom: "8px",
  },
  genderContainer: {
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    [theme.breakpoints.down(725)]: {
      display: "block",
    },
  },
  genderBtnContainer: {
    height: "44px",
    width: "111px",
    marginRight: "12px",
    [theme.breakpoints.down(725)]: {
      width: "140px",
      marginBottom: "20px",
    },
  },
  nameInput: {
    width: "100%",
    marginBottom: "25px",
  },
  inputSelectContainer: {
    marginBottom: "25px",
  },
  queBtnContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
  },
  yesBtn: {
    marginRight: "20px",
  },
  pickupStatus: {
    color: "#8795e0",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14.4px",
    opacity: "50%",
    textAlign: "left",
    marginBottom: "8px",
  },
  // ***
  NoneDisplay: {
    display: "none",
  },
  questionPartContainer: {},
  pickItemPartContainer: {
    marginBottom: "20px",
  },
  InputsPartContainer: {},

  // ****
}));
