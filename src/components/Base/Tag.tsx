import { Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: "100px",
    padding: "2px 12px",
    margin: "3px",
  },
  EpicColor: {
    backgroundImage: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
    // width: "100px",
    // height: "100px",
  },
  LegendaryColor: {
    backgroundImage: "linear-gradient(90.07deg, #7F64E2 3.5%, #41A6EF 97.01%)",
  },
  CommonColor: {
    backgroundImage: "linear-gradient(90.07deg, #77CFD5 3.5%, #4BB7D6 91.65%)",
  },
  UncommonColor: {
    backgroundImage: "linear-gradient(90.07deg, #FC8D98 3.5%, #F85F9E 97.01%)",
  },
  RareColor: {
    backgroundImage: "linear-gradient(57.2deg, #29C98F 20.25%, #66D8AF 82.22%)",
  },
  DefaultColor: {
    backgroundColor: "#21263F",
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
          [classes.CommonColor]: color === "CommonColor",
          [classes.UncommonColor]: color === "UncommonColor",
          [classes.RareColor]: color === "RareColor",
          [classes.DefaultColor]: color === "DefaultColor",
        })}
      >
        <span>{letter}</span>
      </div>
    </>
  );
};
export default Tag;
