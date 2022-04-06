import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

interface Props {
  letter?: string;
  className?: any;
  onClick?: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createBtnRoot: {
      width: "160px",
      // marginTop: "10px",
      height: "44px",
      cursor: "pointer",
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
  })
);

export default function YellowBtn({ letter, className, onClick }: Props) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.createBtnRoot, className)} onClick={onClick}>
      <div className={classes.createBtnContainer}>{letter}</div>
    </div>
  );
}
