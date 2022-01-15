import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./MarketPlaceStyle";
import TopLeftTexture from "../../assets/svg/top_left_texture.svg";
import TopRightTexture from "../../assets/svg/top_right_texture.svg";
import TopEllipse1 from "../../assets/svg/top_ellipse1.svg";
import TopEllipse2 from "../../assets/svg/top_ellipse2.svg";
import TopEllipse3 from "../../assets/svg/top_ellipse3.svg";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function MarketPlace() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <img src={TopLeftTexture} className={classes.topleftTexture}></img>
        <img src={TopRightTexture} className={classes.toprightTexture}></img>
        <img src={TopEllipse1} className={classes.topEllipse1}></img>
        <img src={TopEllipse2} className={classes.topEllipse2}></img>
        <img src={TopEllipse3} className={classes.topEllipse3}></img>
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
            Start Browsing&nbsp;
            <CallMadeIcon fontSize="small" />
          </Button>
        </div>
      </div>
    </>
  );
}
