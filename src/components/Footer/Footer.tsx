import React from "react";
import { Box } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
        setCountryLanguage("ENG");
        setCountryFlag(England_svg);
        handleClose();
        break;
      case 2:
        setCountryLanguage("SPANISH");
        setCountryFlag(Spain_svg);
        handleClose();
        break;
      case 3:
        setCountryLanguage("CHINESE");
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
        <div className={classes.container}>
          <div className={classes.mainfooter}>
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
            <div className={classes.socialLinks}>
              <a>
                <img
                  src={joy_svg}
                  className={clsx(classes.socialIcon, classes.joySvg)}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "23px" }}>
                <img
                  src={robot_svg}
                  className={clsx(classes.socialIcon, classes.robotSvg)}
                />
              </a>
              <a style={{ marginLeft: "23px" }}>
                <img
                  src={github_svg}
                  className={clsx(classes.socialIcon, classes.githubSvg)}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "23px" }}>
                <img
                  src={dove_svg}
                  className={clsx(classes.socialIcon, classes.dovSvg)}
                  alt="symbol"
                />
              </a>
            </div>
          </div>
          <div className={classes.secondaryFooter}>
            <div className={classes.copyright}>© 2022 Unicial</div>
            {/* flag start */}
            <div>
              <Box
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.languageDropdown}
              >
                <Box className={classes.flagLanRoot}>
                  <Box className={classes.flagLanContainer}>
                    {/* <img
                      src={countryFlag}
                      className={classes.flagIcon}
                      alt="symbol"
                    /> */}
                    <Box className={classes.languageLabel}>
                      {countryLanguage}
                    </Box>
                    <ExpandMoreIcon
                      style={{ color: "#96A1DB", marginLeft: "3px" }}
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
                // style={{ backgroundColor: "#171b30" }}
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
          </div>
        </div>
      </div>
    </>
  );
}
