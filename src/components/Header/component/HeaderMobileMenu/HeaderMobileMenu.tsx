import React from "react";
import { ClickAwayListener } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { HeaderMobileMenuStyle } from "./HeaderMobileMenuStyle";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeaderMobileMenu() {
  const classes = HeaderMobileMenuStyle();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleRoute = (route: any) => {
    setOpen(false);
    window.open(route);
  };

  return (
    <div className={classes.headerMobilemenu}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <ListItem className={classes.headerlistItem}>
            <a href="https://unicial.org">
              <img src={"/logo.svg"} className={classes.logo} alt="symbol" />
            </a>
            <div className={classes.firstItem} onClick={handleClick}>
              <ListItemText primary={t("UNICIAL")} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </div>
          </ListItem>
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            className={classes.collapse}
          >
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.unactive}
                onClick={() => handleRoute("https://unicial.org")}
              >
                <ListItemText primary={t("Home")} />
              </ListItem>
              <ListItem
                button
                className={classes.active}
                onClick={() => navigate("/")}
              >
                <ListItemText primary={t("Marketplace")} />
              </ListItem>
              <ListItem
                button
                className={classes.unactive}
                onClick={() => handleRoute("https://doc.unicial.org")}
              >
                <ListItemText primary={t("Documents")} />
              </ListItem>
              <ListItem
                button
                className={classes.unactive}
                onClick={() => handleRoute("https://blog.unicial.org")}
              >
                <ListItemText primary={t("Blog")} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </ClickAwayListener>
    </div>
  );
}
