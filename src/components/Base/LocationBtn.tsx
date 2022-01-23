import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import pinlocationSvg from "../../assets/svg/pinlocation.svg";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "79px",
      height: "25px",
      backgroundColor: "#282E4E",
      borderRadius: "100px",
      //
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      margin: "5px",
    },
    info: {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 400,
      color: "#96A1DB !important",
    },
  })
);

interface Props {
  axisX: number;
  axisY: number;
  onClick?: () => void;
}

export default function LacationBtn({ axisX, axisY, onClick }: Props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <img src={pinlocationSvg} />
        <div className={classes.info}>
          {axisX},{axisY}
        </div>
      </div>
    </>
  );
}
