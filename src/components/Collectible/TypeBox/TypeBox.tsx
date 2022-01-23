import React, { useEffect } from "react";
import { TypeBoxStyle } from "./TypeBoxStyle";
import { useLocation } from "react-router";
import { typebox } from "../../../config/constant";

export default function TypeBox() {
  const classes = TypeBoxStyle();
  const [itemIndex, setitemIndex] = React.useState(typebox.store);
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleItem = (index: string) => {
    setitemIndex(index);
  };

  useEffect(() => {
    if (query.get("assetType") === typebox.listing)
      setitemIndex(typebox.listing);
  }, [location]);

  return (
    <>
      <div className={classes.typeBoxRoot}>
        <div className={classes.headerTitle}>Type </div>
        <div className={classes.boxBody}>
          <div
            className={
              itemIndex === typebox.store
                ? classes.activeItem
                : classes.normalItem
            }
            onClick={() => handleItem(typebox.store)}
          >
            <div className={classes.itemTitle}>Store</div>
            <div className={classes.itemDescription}>
              Items available for minting
            </div>
          </div>
          {/* // */}
          <div
            className={
              itemIndex === typebox.listing
                ? classes.activeItem
                : classes.normalItem
            }
            onClick={() => handleItem(typebox.listing)}
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
