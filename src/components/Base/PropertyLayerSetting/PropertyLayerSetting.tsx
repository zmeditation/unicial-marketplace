import clsx from "clsx";
import React from "react";
import { PropertyLayerSettingStyle } from "./PropertyLayerSettingStyle";

interface PropertyLayerSettingProps {
  title: string;
  children?: React.ReactNode;
}

export default function PropertyLayerSetting({
  title,
  children,
}: PropertyLayerSettingProps) {
  const classes = PropertyLayerSettingStyle();

  console.log("children : ", children);
  return (
    <>
      <div className={classes.root}>
        <div className={clsx(classes.headerPart, classes.borderBottomLine)}>
          <span className={classes.title}>{title}</span>
          <div className={classes.dropdownIcon}>
            <i className='fal fa-angle-down'></i>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
