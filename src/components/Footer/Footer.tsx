import React from "react";
import { Box } from "@material-ui/core";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import clsx from "clsx";
import {
  FooterStyle,
  StyledLanguagePopover,
  StyledMenuItem,
} from "./FooterStyle";
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //flag end
  return (
    <>
      <div className={classes.root}>
        <div className={classes.cotainer}>
          <div className={classes.mainfooter}>
            <div>
              <Box
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.languageDropdown}
              >
                <Box className={classes.flagLanRoot}>
                  <Box className={classes.flagLanContainer}>
                    <img
                      src={countryFlag}
                      className={classes.flagIcon}
                      alt="symbol"
                    />
                    <Box className={classes.languageLabel}>
                      {countryLanguage}
                    </Box>
                    <ArrowDropDownIcon
                      style={{ color: "white", marginLeft: "3px" }}
                    />
                  </Box>
                </Box>
              </Box>
              <StyledLanguagePopover
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <StyledMenuItem onClick={handleEnglish}>
                  <Box className={classes.flagLanContainer}>
                    <img
                      src={England_svg}
                      className={classes.flagIcon}
                      alt="symbol"
                    />
                    <Box className={classes.languageLabel}>English</Box>
                  </Box>
                </StyledMenuItem>

                <StyledMenuItem onClick={handleSpanish}>
                  <Box className={classes.flagLanContainer}>
                    <img
                      src={Spain_svg}
                      className={classes.flagIcon}
                      alt="symbol"
                    />
                    <Box className={classes.languageLabel}>Spanish</Box>
                  </Box>
                </StyledMenuItem>

                <StyledMenuItem onClick={handleChinese}>
                  <Box className={classes.flagLanContainer}>
                    <img
                      src={China_svg}
                      className={classes.flagIcon}
                      alt="symbol"
                    />
                    <Box className={classes.languageLabel}>Chinese</Box>
                  </Box>
                </StyledMenuItem>
              </StyledLanguagePopover>
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
          <div className={classes.secondaryFooter}>
            <div className={classes.socialLinks}>
              <a>
                <img
                  src={joy_svg}
                  className={clsx(classes.socialIcon, classes.joySvg)}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "26px" }}>
                <img
                  src={robot_svg}
                  className={clsx(classes.socialIcon, classes.robotSvg)}
                />
              </a>
              <a style={{ marginLeft: "26px" }}>
                <img
                  src={github_svg}
                  className={clsx(classes.socialIcon, classes.githubSvg)}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "26px" }}>
                <img
                  src={dove_svg}
                  className={clsx(classes.socialIcon, classes.dovSvg)}
                  alt="symbol"
                />
              </a>
            </div>
            <div className={classes.copyright}>© 2022 Unicial</div>
          </div>
        </div>
      </div>
    </>
  );
}
