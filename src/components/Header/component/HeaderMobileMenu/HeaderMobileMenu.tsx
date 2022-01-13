import React from "react";
import { ClickAwayListener } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { HeaderMobileMenuStyle } from "./HeaderMobileMenuStyle";
import { headerId } from "../../../../config/constant";

export default function HeaderMobileMenu() {
  const classes = HeaderMobileMenuStyle();
  const [open, setOpen] = React.useState(false);
  const [head_index, setHeaderIndex] = React.useState(headerId.marketplace);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMarketplace = () => {
    setOpen(false);
    setHeaderIndex(headerId.marketplace);
    window.location.href = "/";
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
            <a href="/">
              <img src={"/logo.svg"} className={classes.logo} alt="symbol" />
            </a>
            <div className={classes.firstItem}>
              <ListItemText primary="MARKETPLACE" onClick={handleClick} />
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
                className={
                  head_index === headerId.marketplace
                    ? classes.active
                    : classes.unactive
                }
                onClick={handleMarketplace}
              >
                <ListItemText primary="MARKETPLACE" />
              </ListItem>
              <ListItem button className={classes.unactive}>
                <ListItemText primary="BUILDER" />
              </ListItem>
              <ListItem button className={classes.unactive}>
                <ListItemText primary="DOCS" />
              </ListItem>
              <ListItem button className={classes.unactive}>
                <ListItemText primary="EVENTS" />
              </ListItem>
              <ListItem button className={classes.unactive}>
                <ListItemText primary="DAO" />
              </ListItem>
              <ListItem button className={classes.unactive}>
                <ListItemText primary="BLOG" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </ClickAwayListener>
    </div>
  );
}
