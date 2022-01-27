import React, { useEffect } from "react";
import { StoreBoxStyle } from "./StoreBoxStyle";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
export default function TypeBox() {
  const classes = StoreBoxStyle();

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const [itemIndex, setitemIndex] = React.useState("");
  const handleItem = (index: string) => {
    setitemIndex(index);
    query.set("section", index);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };
  useEffect(() => {
    if (query.get("section") === "on_sale") {
      setitemIndex("on_sale");
    } else if (query.get("section") === "sales") {
      setitemIndex("sales");
    } else if (query.get("bids") === "bids") {
      setitemIndex("bids");
    } else if (query.get("settings") === "settings") {
      setitemIndex("settings");
    }
  }, [location]);

  return (
    <>
      <div className={classes.typeBoxRoot}>
        <div className={classes.headerTitle}>{t("Store")} </div>
        <div className={classes.boxBody}>
          <div
            className={
              itemIndex !== "on_sale" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("on_sale")}
          >
            {t("On Sale")}
          </div>
          <div
            className={
              itemIndex !== "sales" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("sales")}
          >
            {t("Sales")}
          </div>
          <div
            className={
              itemIndex !== "bids" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("bids")}
          >
            {t("Bids")}
          </div>
          <div
            className={
              itemIndex !== "settings" ? classes.normalItem : classes.activeItem
            }
            onClick={() => handleItem("settings")}
          >
            {t("Settings")}
          </div>
        </div>
      </div>
    </>
  );
}
