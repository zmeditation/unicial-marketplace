import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "100px",
    padding: "2px 12px",
  },
  EpicColor: {
    backgroundImage: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
    // width: "100px",
    // height: "100px",
  },
  LegendaryColor: {
    backgroundImage: "linear-gradient(90.07deg, #7F64E2 3.5%, #41A6EF 97.01%)",
  },
}));
interface TagProps {
  color: string;
  className?: any;
  letter: string;
}
const Tag = ({ color, className, letter }: TagProps) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={clsx(classes.root, className, {
          [classes.EpicColor]: color === "EpicColor",
          [classes.LegendaryColor]: color === "LegendaryColor",
        })}
      >
        <span>{letter}</span>
      </div>
    </>
  );
};
export default Tag;
