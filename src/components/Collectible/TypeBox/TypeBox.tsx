import React from "react";
import { TypeBoxStyle } from "./TypeBoxStyle";
export default function TypeBox() {
  const classes = TypeBoxStyle();
  const [itemIndex, setitemIndex] = React.useState(1);
  const handleStore = () => {
    setitemIndex(1);
  };
  const handleListings = () => {
    setitemIndex(2);
  };
  return (
    <>
      <div className={classes.typeBoxRoot}>
        <div className={classes.headerTitle}>Type </div>
        <div className={classes.boxBody}>
          <div
            className={
              itemIndex === 2 ? classes.normalItem : classes.activeItem
            }
            onClick={handleStore}
          >
            <div className={classes.itemTitle}>Store</div>
            <div className={classes.itemDescription}>
              Items available for minting
            </div>
          </div>
          {/* // */}
          <div
            className={
              itemIndex === 1 ? classes.normalItem : classes.activeItem
            }
            onClick={handleListings}
          >
            <div className={classes.itemTitle}>Listings</div>
            <div className={classes.itemDescription}>Items being resold</div>
          </div>
        </div>
        <div className={classes.divideline}></div>
      </div>
    </>
  );
}
