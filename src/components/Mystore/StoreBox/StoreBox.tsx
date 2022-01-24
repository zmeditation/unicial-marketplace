import React from "react";
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
        </div>
      </div>
    </>
  );
}
