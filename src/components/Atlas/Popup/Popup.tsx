/** @format */

import * as React from "react";
import Coordinate from "../../Coordinate/Coordinate";
import { Props } from "./Popup.types";
import "./Popup.css";
import makeBlockie from "ethereum-blockies-base64";
import { useTranslation } from "react-i18next";

const addCommas = (nStr: any) => {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + " , " + "$2");
  }
  return x1 + x2;
};

function Popup({ x, y, visible, tile, position, price }: Props) {
  const { t } = useTranslation();
  const isEstate = !!tile.estateId;
  return (
    <div
      className={`AtlasPopup ${position} ${
        tile.owner ? "has-owner" : "no-owner"
      }`}
      style={{ top: y, left: x, opacity: visible ? 1 : 0 }}>
      <div className='land-name'>
        <div className='name-row'>
          <span className='name'>
            {tile.name || (!isEstate ? "Parcel" : "Estate")}
          </span>
          <Coordinate className='coordinates' x={tile.x} y={tile.y} />
        </div>
      </div>

      <div className='owner'>
        <div className={"owner-price-title"}>{t("OWNER")}</div>
        <div
          className={"address-content"}
          style={{ overflowWrap: "break-word" }}>
          <img
            src={tile.owner && makeBlockie(tile.owner)}
            className={"address-img"}
            alt='A'
          />
          {tile?.owner?.slice(0, 6)}
        </div>
      </div>

      {price ? (
        <div className='price'>
          <div className={"owner-price-title"}>{t("PRICE")}</div>
          <div>{addCommas(price)}</div>
        </div>
      ) : null}
    </div>
  );
}
export default Popup;
