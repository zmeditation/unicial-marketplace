/** @format */
import { SemipolarSpinner } from "react-epic-spinners";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { spinnerStatus } from "../../store/spinner/selectors";

const useStyles = makeStyles((theme: Theme) => ({
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
  spinnerRoot: {
    position: "fixed",
    flexDirection: "column",
    zIndex: 99999,
  },
  spinner: {
    "&.liNMpo .ring:nth-child(1)": {
      display: "none",
    },
    "&.liNMpo .ring:nth-child(2)": {
      display: "none",
    },
    "&.liNMpo .ring:nth-child(5)": {
      borderRadius: "50%",
      position: "absolute",
      border: "calc(65px * 0.05) solid transparent",
      borderColor: "#29C98F",
    },
    "&.liNMpo .ring:nth-child(4)": {
      borderRadius: "50%",
      position: "absolute",
      border: "calc(65px * 0.05) solid transparent",
      borderTopColor: "#FF7C4C",
      borderLeftColor: "#FFB03A",
      borderRightColor: "#FFB03A",
    },
    "&.liNMpo .ring:nth-child(3)": {
      borderRadius: "50%",
      position: "absolute",
      border: "calc(65px * 0.05) solid transparent",
      borderTopColor: "#41A6EF",
      borderLeftColor: "#7F64E2",
      borderRightColor: "#7F64E2",
    },
  },
}));

export default function Spinner() {
  const classes = useStyles();
  const spinner = useAppSelector(spinnerStatus);

  return (
    <>
      <div
        className={
          spinner === true ? classes.loaderWrapper : classes.displayNone
        }>
        <div className={classes.spinnerRoot}>
          <SemipolarSpinner
            color='red'
            className={classes.spinner}
            size={100}
          />
        </div>
      </div>
    </>
  );
}
