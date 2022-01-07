import React from "react";
import logo_svg from "./../../../../assets/svg/logo.svg";
import { HeaderSignInBarStyle } from "./HeaderSignInBarStyle";

export default function HeaderSignInBar() {
  const classes = HeaderSignInBarStyle();

  return (
    <div className={classes.root}>
      <div className={classes.container}></div>
    </div>
  );
}
