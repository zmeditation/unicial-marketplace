import React from "react";
import { StoreBoxStyle } from "./StoreBoxStyle";
import { useTranslation } from "react-i18next";
export default function TypeBox() {
  const classes = StoreBoxStyle();
  const [itemIndex, setitemIndex] = React.useState("");
  const handleItem = (index: string) => {
    setitemIndex(index);
  };
  const { t, i18n}= useTranslation();
  return (
    <>
      <div className={classes.typeBoxRoot}>
        <div className={classes.headerTitle}>{t("Store")} </div>
        <div className={classes.boxBody}>
          <div
            className={
              itemIndex !== "OnSale" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("OnSale")}
          >
            {t("On Sale")}
          </div>
          <div
            className={
              itemIndex !== "Sales" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("Sales")}
          >
            {t("Sales")}
          </div>
        </div>
      </div>
    </>
  );
}
