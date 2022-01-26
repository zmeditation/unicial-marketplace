import React from "react";
import { Box } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import {
  FooterStyle,
  StyledLanguagePopover,
  StyledMenuItem,
} from "./FooterStyle";
import JoySvg from "./../../assets/svg/joy.svg";
import RobotSvg from "./../../assets/svg/robot.svg";
import GithubSvg from "./../../assets/svg/github.svg";
import DoveSvg from "./../../assets/svg/dove.svg";

import ChinaSvg from "./../../assets/svg/China.svg";
import EnglandSvg from "./../../assets/svg/England.svg";
import SpainSvg from "./../../assets/svg/Spain.svg";
import FooterTexture from "../../assets/svg/footer_texture.svg";
import { useTranslation, withTranslation, Trans } from "react-i18next";

export default function Footer() {
  const classes = FooterStyle();
  const [countryLanguage, setCountryLanguage] = React.useState("");
  const [countryFlag, setCountryFlag] = React.useState("");
  const [languageIndex, setlanguageIndex] = React.useState(1);
  const { t, i18n } = useTranslation();

  const handleEnglish = () => {
    i18n.changeLanguage("en");
    setlanguageIndex(1);
  };
  const handleSpanish = () => {
    setlanguageIndex(2);
  };
  const handleChinese = () => {
    i18n.changeLanguage("ch");
    setlanguageIndex(3);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    switch (languageIndex) {
      case 1:
        setCountryLanguage("ENG");
        setCountryFlag(EnglandSvg);
        handleClose();
        break;
      case 2:
        setCountryLanguage("SPAIN");
        setCountryFlag(SpainSvg);
        handleClose();
        break;
      case 3:
        setCountryLanguage("CHINESE");
        setCountryFlag(ChinaSvg);
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
    <div className={classes.footer}>
      <img
        src={FooterTexture}
        alt="texture"
        className={classes.footerTexture}
      />
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.mainfooter}>
            <div className={classes.links}>
              <a href="/" className={classes.link}>
                {t("Home")}
              </a>
              <a href="/" className={classes.link}>
                {t("Privacy Policy")}
              </a>
              <a href="/" className={classes.link}>
                {t("Terms of Use")}
              </a>
              <a href="/" className={classes.link}>
                {t("Content Policy")}
              </a>
              <a href="/" className={classes.link}>
                {t("Code of Ethics")}
              </a>
            </div>
            <div className={classes.socialLinks}>
              <a>
                <img
                  src={JoySvg}
                  className={clsx(classes.socialIcon, classes.joySvg)}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "23px" }}>
                <img
                  src={RobotSvg}
                  className={clsx(classes.socialIcon, classes.robotSvg)}
                />
              </a>
              <a style={{ marginLeft: "23px" }}>
                <img
                  src={GithubSvg}
                  className={clsx(classes.socialIcon, classes.githubSvg)}
                  alt="symbol"
                />
              </a>
              <a style={{ marginLeft: "23px" }}>
                <img
                  src={DoveSvg}
                  className={clsx(classes.socialIcon, classes.dovSvg)}
                  alt="symbol"
                />
              </a>
            </div>
          </div>
          <div className={classes.secondaryFooter}>
            <div className={classes.copyright}>© 2022 {t("Unicial")}</div>
            {/* flag start */}
            <div className={classes.languagesettingContainer}>
              <Box
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.languageDropdown}
              >
                <Box className={classes.flagLanRoot}>
                  <Box className={classes.flagLanContainer}>
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
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <StyledMenuItem disableRipple onClick={handleEnglish}>
                  <Box className={classes.flagLanContainer}>
                    <Box
                      className={clsx(classes.languageLabel, {
                        [classes.activeLabel]: languageIndex === 1,
                      })}
                    >
                      {t("English")}
                    </Box>
                  </Box>
                </StyledMenuItem>

                <StyledMenuItem disableGutters onClick={handleSpanish}>
                  <Box className={classes.flagLanContainer}>
                    <Box
                      className={clsx(classes.languageLabel, {
                        [classes.activeLabel]: languageIndex === 2,
                      })}
                    >
                      {t("Spanish")}
                    </Box>
                  </Box>
                </StyledMenuItem>

                <StyledMenuItem onClick={handleChinese}>
                  <Box className={classes.flagLanContainer}>
                    <Box
                      className={clsx(classes.languageLabel, {
                        [classes.activeLabel]: languageIndex === 3,
                      })}
                    >
                      {t("Chinese")}
                    </Box>
                  </Box>
                </StyledMenuItem>
              </StyledLanguagePopover>
            </div>
            {/* flag end */}
          </div>
        </div>
      </div>
    </div>
  );
}
