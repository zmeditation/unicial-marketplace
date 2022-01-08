import React from "react";
import { Button } from "@material-ui/core";
import { MarketPlaceStyle } from "./MarketPlaceStyle";
import Lands from "../Lands";
export default function MarketPlace() {
  const classes = MarketPlaceStyle();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.itemContainer}>
          <div className={classes.title}>Unicial Marketplace</div>
        </div>
        <div className={classes.itemContainer}>
          <div className={classes.subtitle}>
            Welcome to the virtual world’s one-stop-shop for the very best
            digital assets.
          </div>
        </div>
        <div className={classes.hero_action}>
          <Button className={classes.browsebtn} href="/lands">
            Start Browsing
          </Button>
        </div>
      </div>
    </>
  );
}
