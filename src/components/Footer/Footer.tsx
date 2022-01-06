import React from "react";
import { Box } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { FooterStyle, StyledMenu, StyledMenuItem } from "./FooterStyle";
import joy_svg from "./../../assets/svg/joy.svg";
import robot_svg from "./../../assets/svg/robot.svg";
import github_svg from "./../../assets/svg/github.svg";
import dove_svg from "./../../assets/svg/dove.svg";
import China_svg from "./../../assets/svg/China.svg";
import England_svg from "./../../assets/svg/England.svg";
import Spain_svg from "./../../assets/svg/Spain.svg";
export default function Footer() {
  const classes = FooterStyle();
  //flag
  const [countryLanguage, setCountryLanguage] = React.useState("");
  const [countryFlag, setCountryFlag] = React.useState("");
  const [languageIndex, setlanguageIndex] = React.useState(1);

  const handleEnglish = () => {
    setlanguageIndex(1);
  };
  const handleSpanish = () => {
    setlanguageIndex(2);
  };
  const handleChinese = () => {
    setlanguageIndex(3);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    switch (languageIndex) {
      case 1:
        setCountryLanguage("English");
        setCountryFlag(England_svg);
        handleClose();
        break;
      case 2:
        setCountryLanguage("Spanish");
        setCountryFlag(Spain_svg);
        handleClose();
        break;
      case 3:
        setCountryLanguage("Chinese");
        setCountryFlag(China_svg);
        handleClose();
        break;
      default:
        setCountryLanguage("English");
    }
  }, [languageIndex]);
  console.log(countryLanguage);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //flag end
  return (
    <>
      {/* {index === 1 ? (
              <>
                  <img  />
          <span>English</span>
        </>
      ) : index === 2 ? (
        <span>Spanish</span>
      ) : (
        <span>Chinease</span>
      )} */}
      <div className={classes.root}>
        <div className={classes.cotainer}>
          <div className={classes.mainfooter}>
            {/* <div>flag</div> */}
            <div>
              <Box
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.language_dropdown}
              >
                <Box className={classes.flag_lanRoot}>
                  <Box className={classes.flag_lanContainer}>
                    <img
                      src={countryFlag}
                      className={classes.flag_icon}
                      alt="symbol"
                    />
                    <Box className={classes.language_label}>
                      {countryLanguage}
                    </Box>
                    <ArrowDropDownIcon
                      style={{ color: "white", marginLeft: "3px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <StyledMenu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={handleEnglish}>
                  <Box className={classes.flag_lanContainer}>
                    <img
                      src={England_svg}
                      className={classes.flag_icon}
                      alt="symbol"
                    />
                    <Box className={classes.language_label}>English</Box>
                  </Box>
                </StyledMenuItem>

                <StyledMenuItem onClick={handleSpanish}>
                  <Box className={classes.flag_lanContainer}>
                    <img
                      src={Spain_svg}
                      className={classes.flag_icon}
                      alt="symbol"
                    />
                    <Box className={classes.language_label}>Spanish</Box>
                  </Box>
                </StyledMenuItem>

                <StyledMenuItem onClick={handleChinese}>
                  <Box className={classes.flag_lanContainer}>
                    <img
                      src={China_svg}
                      className={classes.flag_icon}
                      alt="symbol"
                    />
                    <Box className={classes.language_label}>Chinese</Box>
                  </Box>
                </StyledMenuItem>
              </StyledMenu>
            </div>
            {/* flag end */}
            <div className={classes.links}>
              <a href="/" className={classes.link}>
                Home
              </a>
              <a href="/" className={classes.link}>
                Privacy Policy
              </a>
              <a href="/" className={classes.link}>
                Terms of Use
              </a>
              <a href="/" className={classes.link}>
                Content Policy
              </a>
              <a href="/" className={classes.link}>
                Code of Ethics
              </a>
            </div>
          </div>
          <div className={classes.secondary_footer}>
            <div className={classes.social_links}>
              <a>
                <img
                  src={joy_svg}
                  className={classes.social_icon}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "26px" }}>
                <img
                  src={robot_svg}
                  className={classes.social_icon}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "26px" }}>
                <img
                  src={github_svg}
                  className={classes.social_icon}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "26px" }}>
                <img
                  src={dove_svg}
                  className={classes.social_icon}
                  alt="symbol"
                />
              </a>
            </div>
            <div className={classes.copyright}>© 2022 Decentraland</div>
          </div>
        </div>
      </div>
    </>
  );
}
