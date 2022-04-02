import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { createCardletterData } from "../../config/constant";
import magicCapSvg from "./../../../src/assets/svg/magicCap.svg";
import magicFileSvg from "./../../../src/assets/svg/magicFile.svg";

interface Props {
  children?: React.ReactNode;
  className?: any;
  letter: string;
  onClick?: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#282E4E",
      borderRadius: "8px",
      cursor: "pointer",
      padding: "50px 5px 30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
    letter: {
      color: "white",
      textAlign: "center",
      fontSize: "17px",
    },
    imgContainer: {
      width: "80px",
      height: "80px",
    },
  })
);
export default function CreateCard({
  children,
  className,
  letter,
  onClick,
}: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.container}>
        <div>
          <img
            src={
              letter === createCardletterData.new_item
                ? magicCapSvg
                : magicFileSvg
            }
            className={classes.imgContainer}
          />
        </div>
        <div className={classes.letter}>{letter}</div>
      </div>
    </div>
  );
}
