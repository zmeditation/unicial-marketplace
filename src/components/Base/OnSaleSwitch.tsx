import { FormControlLabel, Switch } from "@material-ui/core";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    OnSaleSwicthRoot: {
      "& .MuiSwitch-thumb": {
        width: "12px",
        height: "12px",
        marginTop: "3px",
        marginLeft: "3px",
      },
    },
    switch: {
      "& .MuiSwitch-thumb": {
        width: "13px",
        height: "13px",
        marginTop: "2.5px",
        marginLeft: "3px",
        background: "linear-gradient(to right, #7F64E2, #41A6EF)",
      },
      "& .MuiSwitch-root": {
        padding: "12.5px 12px",
        marginTop: "1px",
      },
    },
    activeSwitch: {
      "& .MuiTypography-root": {
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",

        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      "& .MuiSwitch-thumb": {
        width: "13px",
        height: "13px",
        marginTop: "2.5px",
        marginLeft: "3px",
        background: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
      },
    },
  })
);
const StyledFormControlLabel = withStyles({
  label: {
    fontFamily: "Lato",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    background: "linear-gradient(to right, #7F64E2, #41A6EF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
})(FormControlLabel);
const PurpleSwitch = withStyles({
  root: {
    height: "36px",
    width: "55px",
  },
  switchBase: {
    color: "#333b67",

    "&$checked": {
      color: "#ff7c4c",
    },
    "&$checked + $track": {
      backgroundColor: "#333B67",
    },
    "&.Mui-checked:hover": {
      backgroundColor: "unset",
    },
    "&.MuiIconButton-root:hover": {
      backgroundColor: "unset",
    },
  },
  checked: {},
  track: {},
})(Switch);
interface Props {
  letter: string;
}

export default function OnSaleSwitch({ letter }: Props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.OnSaleSwicthRoot}>
      <StyledFormControlLabel
        control={
          <PurpleSwitch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            disableRipple={true}
          />
        }
        label={letter}
        className={clsx(classes.switch, {
          [classes.activeSwitch]: state.checkedA,
        })}
      />
    </div>
  );
}
