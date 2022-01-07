import React from "react";
import {
  SearchBarStyle,
  StyledFormControlLabel,
  StyledTableButton,
  StyledLocationButton,
  StyledTableChartIcon,
  StyledLocationOnIcon,
  //   StyledIconButton,
} from "./SearchBarStyle";
import filter_svg from "./../../assets/svg/filter.svg";
import search_svg from "./../../assets/svg/search.svg";
//
import { withStyles } from "@material-ui/core/styles";

import Switch from "@material-ui/core/Switch";
//

import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
const PurpleSwitch = withStyles({
  root: {
    height: "36px",
    width: "55px",
  },
  switchBase: {
    color: "#ff2d55",
    "&$checked": {
      color: "#ff2d55",
    },
    "&$checked + $track": {
      backgroundColor: "#ff2d55",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function SearchBar() {
  const classes = SearchBarStyle();
  //
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  //

  const [filter_index, setFilterIndex] = React.useState(1);
  const handletable = () => {
    setFilterIndex(1);
  };
  const handlelocation = () => {
    setFilterIndex(2);
  };
  const handlechangetest = () => {
    console.log("onchange test");
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.nftfillter}>
            <div className={classes.topbar}>
              <div className={classes.textfilter}>
                <img
                  src={search_svg}
                  className={classes.search_icon}
                  alt="symbol"
                />
                <input
                  className={classes.searchinput}
                  placeholder="Search land..."
                />
              </div>
              <div className={classes.topbar_filter}>
                <StyledFormControlLabel
                  control={
                    <PurpleSwitch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="ON SALE"
                />
              </div>
              <div className={classes.openfilter}>
                <div className={classes.openfilter_label}>FILTER</div>
                <img
                  src={filter_svg}
                  className={classes.filter_icon}
                  alt="symbol"
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <StyledTableButton
                  disabled={filter_index === 1}
                  onClick={handletable}
                >
                  <StyledTableChartIcon />
                </StyledTableButton>

                <StyledLocationButton
                  //   onChange={handlechangetest}
                  disabled={filter_index === 2}
                  onClick={handlelocation}
                >
                  <StyledLocationOnIcon />
                </StyledLocationButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
