import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Box } from "@material-ui/core";
import coinIcon1 from "./../../../../assets/svg/coin_symbol1.svg";
import coinIcon2 from "./../../../../assets/svg/coin_symbol2.svg";
import sigin_user_svg from "./../../../../assets/svg/sigin_user.svg";
import {
  StyledAvatarPopover,
  HeaderSignInBarStyle,
  StyledRingButton,
} from "./HeaderSignInBarStyle";
import { StyledMenuItem } from "../../../Footer/FooterStyle";
import { setlogoutAddress } from "../../../../store/auth/actions";
import { useAppDispatch } from "../../../../store/hooks";
import { useTranslation } from "react-i18next";

export default function HeaderSignInBar() {
  const classes = HeaderSignInBarStyle();
  const [tmp, setTmp] = React.useState(0);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const handleRingButton = () => {
    setTmp(1);
  };
  //    avatar menu relate
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccount = () => {};
  const handleSettings = () => {};
  const handleSignOut = () => {
    dispatch(setlogoutAddress());
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <StyledRingButton onClick={handleRingButton} disabled={tmp === 1}>
          <NotificationsIcon className={classes.notificationicon} />
        </StyledRingButton>
        <div className={classes.userMenu}>
          <div className={classes.accountWrapper}>
            <a className={classes.mana}>
              <i className={classes.symbol}>
                <img
                  src={coinIcon1}
                  className={classes.maticIcon}
                  alt="symbol"
                />
              </i>
              0
            </a>
            <a href="#" className={classes.mana}>
              <i className={classes.symbol}>
                <img
                  src={coinIcon2}
                  className={classes.maticIcon}
                  alt="symbol"
                />
              </i>
              0
            </a>
          </div>
          {/* avartar */}
          <Box className={classes.avatarContainer} onClick={handleClick}>
            <img
              src={sigin_user_svg}
              style={{ width: "100%", height: "100%" }}
              alt="symbol"
            />
          </Box>

          {/* avatar menu open */}
          <StyledAvatarPopover
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <div className={classes.accountInfo}>
              <div className={classes.imageContainer}>
                <img
                  src={sigin_user_svg}
                  style={{ width: "100%", height: "100%" }}
                  alt="symbol"
                />
              </div>
              <div className={classes.imageLabel}>{t("Guest")}</div>
            </div>
            <StyledMenuItem onClick={handleAccount}>
              <Box className={classes.itemContainer}>
                <PersonOutlineIcon className={classes.itemIcon} />
                <Box className={classes.itemLabel}>{t("Account")}</Box>
              </Box>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleSettings}>
              <Box className={classes.itemContainer}>
                <SettingsIcon className={classes.itemIcon} />
                <Box className={classes.itemLabel}>{t("Settings")}</Box>
              </Box>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleSignOut}>
              <Box className={classes.itemContainer}>
                <ExitToAppIcon className={classes.itemIcon} />
                <Box className={classes.itemLabel} onClick={handleSignOut}>
                  {t("Sign Out")}
                </Box>
              </Box>
            </StyledMenuItem>
          </StyledAvatarPopover>
        </div>
      </div>
    </div>
  );
}
