import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Box } from "@material-ui/core";
import matic_svg from "./../../../../assets/svg/matic.svg";
import sigin_user_svg from "./../../../../assets/svg/sigin_user.svg";
import { HeaderSignInBarStyle, StyledRingButton } from "./HeaderSignInBarStyle";
import { StyledPopover, StyledMenuItem } from "../../../Footer/FooterStyle";

export default function HeaderSignInBar() {
  const classes = HeaderSignInBarStyle();
  const [tmp, setTmp] = React.useState(0);
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
  const handleSignOut = () => {};
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <StyledRingButton onClick={handleRingButton} disabled={tmp === 1}>
          <NotificationsIcon className={classes.notificationicon} />
        </StyledRingButton>
        <div className={classes.user_menu}>
          <div className={classes.account_wrapper}>
            <a href="#" className={classes.mana}>
              <i className={classes.symbol}>⏣</i>0
            </a>
            <a href="#" className={classes.mana}>
              <i className={classes.symbol}>
                <img
                  src={matic_svg}
                  className={classes.matic_icon}
                  alt="symbol"
                />
              </i>
              0
            </a>
          </div>
          {/* avartar */}
          <Box className={classes.avatar_container} onClick={handleClick}>
            <img
              src={sigin_user_svg}
              style={{ width: "42px", height: "42px" }}
              alt="symbol"
            />
          </Box>

          {/* avatar menu open */}
          <StyledPopover
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
            <div className={classes.account_info}>
              <div className={classes.image_container}>
                <img
                  src={sigin_user_svg}
                  style={{ width: "100%", height: "100%" }}
                  alt="symbol"
                />
              </div>
              <div className={classes.image_label}>Guest</div>
            </div>
            <StyledMenuItem onClick={handleAccount}>
              <Box className={classes.item_container}>
                <PersonOutlineIcon className={classes.item_icon} />
                <Box className={classes.item_label}>Account</Box>
              </Box>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleSettings}>
              <Box className={classes.item_container}>
                <SettingsIcon className={classes.item_icon} />
                <Box className={classes.item_label}>Settings</Box>
              </Box>
            </StyledMenuItem>

            <StyledMenuItem onClick={handleSignOut}>
              <Box className={classes.item_container}>
                <ExitToAppIcon className={classes.item_icon} />
                <Box className={classes.item_label}>Sign Out</Box>
              </Box>
            </StyledMenuItem>
          </StyledPopover>
        </div>
      </div>
    </div>
  );
}
