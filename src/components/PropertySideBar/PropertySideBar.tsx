import { PropertySideBarStyle } from "./PropertySideBarStyle";

export default function PropertySideBar() {
  const classes = PropertySideBarStyle();
  return (
    <>
      <div className={classes.myItemsBlock}>
        <div className={classes.propertyNavbar}>
          <span className={classes.NavbarTitle}>Properties</span>
        </div>
      </div>
    </>
  );
}
