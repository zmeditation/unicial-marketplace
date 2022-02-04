import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import search_svg from "./../../assets/svg/search.svg";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textfilter: {
      display: "flex",
      width: "175px",
    },
    searchIcon: {
      marginRight: "10px",
    },
    searchinput: {
      fontSize: "14px",
      color: "white",
      backgroundPositionY: "4px",
      lineHeight: "17px",
      background: "none",
      fontWeight: 400,
      border: "none",
      borderRadius: "6px",
      padding: "6px 6px 2px 0px",
      outline: "none",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "8px",
      overflow: "visible",
    },
  })
);

export default function SearchInputFilter() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.textfilter}>
        <img src={search_svg} className={classes.searchIcon} alt="symbol" />
        <input
          className={classes.searchinput}
          placeholder="Search 25 results..."
        />
      </div>
    </>
  );
}
