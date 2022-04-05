import { Theme, makeStyles } from "@material-ui/core/styles";
import bothIcon from "./../../../src/assets/svg/both.png";
import maleIcon from "./../../../src/assets/svg/male.png";
import femaleIcon from "./../../../src/assets/svg/female.png";
import { genderData } from "../../config/constant";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "100px",
    border: "1px solid #373F66",
    padding: "11px 20px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    marginLeft: "11px",
    fontFamily: "Lato",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#70708F",
  },
}));

interface ButtonProps {
  children?: React.ReactNode;
  letter: string;
  className?: any;
  onClick?: () => void;
}

const ActionButton = ({
  children,
  letter,
  className,
  onClick,
}: ButtonProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {letter === genderData.both ? (
          <img src={bothIcon} />
        ) : letter === genderData.male ? (
          <img src={maleIcon} />
        ) : (
          <img src={femaleIcon} />
        )}
        <span className={classes.letter}>{letter}</span>
      </div>
    </div>
  );
};

export default ActionButton;
