import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
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
    icon: {
      marginTop: "3px",
    },
    info: {
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: 400,
      lineHeightStep: "16.8px",
      color: "#96A1DB !important",
    },
    darkbackground: {
      backgroundColor: "#21263F",
    },
  })
);

interface Props {
  position: string;
  dark?: boolean;
  className?: any;
  onClick?: () => void;
}

export default function LacationBtn({
  position,
  dark,
  className,
  onClick,
}: Props) {
  const classes = useStyles();
  return (
    <>
      <div
        className={clsx(classes.root, className, {
          [classes.darkbackground]: dark,
        })}
      >
        <img src={pinlocationSvg} className={classes.icon} />
        <div className={classes.info}>
          {position}
        </div>
      </div>
    </>
  );
}
