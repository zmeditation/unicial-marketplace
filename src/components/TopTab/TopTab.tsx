import React, { useEffect } from "react";
import { topTabIndex } from "../../config/constant";
import {
  TopTabStyle,
  StyledTopTabBtn,
  StyledFormControlLabel,
  StyledTableButton,
  StyledTableChartIcon,
  StyledLocationButton,
  StyledLocationOnIcon,
} from "./TopTabStyle";
import { searchbarBtn } from "../../config/constant";
import { useLocation, useNavigate } from "react-router";
import { withStyles } from "@material-ui/styles";
import { Switch } from "@material-ui/core";
import book_svg from "../../assets/svg/book.svg";
import location_svg from "../../assets/svg/location.svg";

const PurpleSwitch = withStyles({
  root: {
    height: "36px",
    width: "55px",
  },
  switchBase: {
    color: "#FF7C4C",
    "&$checked": {
      color: "#333B67",
    },
    "&$checked + $track": {
      backgroundColor: "#333B67",
    },
  },
  checked: {},
  track: {},
})(Switch);
export default function TopTab() {
  const classes = TopTabStyle();
  const location = useLocation();
  const navigate = useNavigate();
  const [toptab_index, setToptabIndex] = React.useState(1);

  const handleLand = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    if (location.pathname.includes("/lands")) {
      setToptabIndex(topTabIndex.land);
    } else if (location.pathname.includes("/auction")) {
      setToptabIndex(topTabIndex.auction);
    }
  }, [location.pathname]);

  //on sale
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [filter_index, setFilterIndex] = React.useState(1);
  const handletable = () => {
    setFilterIndex(1);
  };
  const handlelocation = () => {
    setFilterIndex(2);
  };
  return (
    <>
      {location.pathname !== "/" && (
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.nftfilter}>
              <div className={classes.topbar}>
                <div className={classes.tabsLeft}>
                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handleLand("/lands")}
                    disabled={toptab_index === topTabIndex.land}
                  >
                    Lands
                  </StyledTopTabBtn>

                  <StyledTopTabBtn
                    disableRipple
                    onClick={() => handleLand("/auction")}
                    disabled={toptab_index === topTabIndex.auction}
                  >
                    Auction
                  </StyledTopTabBtn>
                </div>
                <StyledFormControlLabel
                  control={
                    <PurpleSwitch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="ON SALE"
                  className={classes.switch}
                />
                <div style={{ marginLeft: "20px" }}>
                  <StyledTableButton
                    disabled={filter_index === searchbarBtn.tableBtn}
                    onClick={handletable}
                  >
                    {/* <StyledTableChartIcon /> */}
                    <img src={book_svg} />
                  </StyledTableButton>

                  <StyledLocationButton
                    disabled={filter_index === searchbarBtn.locationBtn}
                    onClick={handlelocation}
                  >
                    {/* <StyledLocationOnIcon /> */}
                    <img src={location_svg} />
                  </StyledLocationButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
