/** @format */

import PropertyLayerSetting from "../Base/PropertyLayerSetting/PropertyLayerSetting";
import { PropertySideBarStyle } from "./PropertySideBarStyle";

export default function PropertySideBar() {
  const classes = PropertySideBarStyle();
  return (
    <>
      <div className={classes.myItemsBlock}>
        <div className={classes.propertyNavbar}>
          <span className={classes.NavbarTitle}>Properties</span>
        </div>
        <div className={classes.layersRoot}>
          <PropertyLayerSetting title='Details' />
        </div>
      </div>
    </>
  );
}
