import React from "react";
import { StoreBoxStyle } from "./StoreBoxStyle";
export default function TypeBox() {
  const classes = StoreBoxStyle();
  const [itemIndex, setitemIndex] = React.useState("");
  const handleItem = (index: string) => {
    setitemIndex(index);
  };
  return (
    <>
      <div className={classes.typeBoxRoot}>
        <div className={classes.headerTitle}>Store </div>
        <div className={classes.boxBody}>
          <div
            className={
              itemIndex !== "OnSale" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("OnSale")}
          >
            On Sale
          </div>
          <div
            className={
              itemIndex !== "Sales" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("Sales")}
          >
            Sales
          </div>
        </div>
      </div>
    </>
  );
}
