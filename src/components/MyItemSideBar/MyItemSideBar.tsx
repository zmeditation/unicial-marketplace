import { MyItemSideBarStyle } from "./MyItemSideBarStyle";
import menuIcon from "./../../assets/svg/menu.png";

export default function MyItemSideBar() {
  const classes = MyItemSideBarStyle();
  return (
    <>
      <div className={classes.myItemsBlock}>
        <div className={classes.myItemNavbar}>
          <img src={menuIcon} />
          <span className={classes.NavbarTitle}>My Items</span>
          <i className="fa-solid fa-plus-large"></i>
        </div>
      </div>
    </>
  );
}
