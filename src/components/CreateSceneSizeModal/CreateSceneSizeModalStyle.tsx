import { Theme, makeStyles, withStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

export const StyledInput = withStyles((theme) => ({
  root: {
    display: "flex",
    height: "44px",
    alignContent: "center",
    padding: "10px",
    border: "1px solid #373F66",
    borderRadius: "100px",
    alignItems: "center",
    color: "white",
    width: "100%",
    "&:before": {
      border: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      border: "none",
    },
    "&:after": {
      border: "none",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "10px",
      fontWeight: "normal",
      fontSize: "16px",
      color: "#FFFFFF",
      fontFamily: "Lato",
      fontStyle: "Regular",
      lineHeight: "19px",
      align: "Left",
      verticalAlign: "Top",
    },
    "& ::placeholder": {
      opacity: 1 /* Firefox */,
      fontFamily: "Lato",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#70708F",
    },
  },
}))(Input);

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
    padding: "22px 35px 60px 35px",
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
  backIcon: {
    position: "absolute",
    top: "20px",
    left: "30px",
    cursor: "pointer",
    borderRadius: "100px",
    minWidth: "40px",
    width: "40px",
    height: "40px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    background: "#444858",
    "& i": {
      fontSize: "21px",
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
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "50px",
    color: "#FFFFFF",
  },
  description: {
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Lato",
    fontSize: "18px",
    lineHeight: "29px",
    color: "#96A1DB",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  },
  squareRootLarge: {
    display: "flex",
    marginBottom: "4px",
  },
  squareRootMedium: {
    display: "flex",
    marginBottom: "2px",
  },
  squareRootSmall: {
    display: "flex",
    marginBottom: "1px",
  },
  squareLarge: {
    width: "60px",
    height: "60px",
    marginRight: "4px",
    background: "#21263F",
    border: "solid 1px #96A1DB",
    borderRadius: "5px",
  },
  squareMedium: {
    width: "30px",
    height: "30px",
    marginRight: "2px",
    background: "#21263F",
    border: "solid 1px #96A1DB",
    borderRadius: "5px",
  },
  squareSmall: {
    width: "20px",
    height: "20px",
    marginRight: "1px",
    background: "#21263F",
    border: "solid 1px #96A1DB",
    borderRadius: "5px",
  },
  cautionRoot: {
    marginTop: "20px",
    "& i": {
      fontSize: "60px",
      fontWeight: 100,
      color: "red",
    },
  },
  cautionLetter: {
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Lato",
    fontSize: "18px",
    lineHeight: "29px",
    marginBottom: "0px !important",
    color: "red",
  },
  form_field: {
    display: "flex",
    textAlign: "start",
    marginBottom: "20px",
    justifyContent: "space-between",
    padding: "0 48px",
    width: "100%",
    [theme.breakpoints.down(769)]: {
      marginBottom: "30px",
    },
  },
  subheader_label: {
    fontFamily: "Lato",
    color: "#96A1DB",
    fontStyle: "Regular",
    fontSize: "12px",
    lineHeight: "14px",
    align: "Left",
    verticalAlign: "Top",
    opacity: "50%",
    marginBottom: "8px",
    marginLeft: "15px",
  },
  inputItem: {
    width: "170px",
  },
  operatorIcon: {
    display: "flex",
    alignItems: "end",
    padding: "10px",
    "& i": {
      fontSize: "32px",
      fontWeight: 100,
    },
  },
  marginLeft: {
    marginLeft: "15px",
  },
  widthFull: {
    width: "100%",
  },
}));
