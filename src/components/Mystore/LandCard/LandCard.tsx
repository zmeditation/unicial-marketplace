import { LandCardStyle } from "./LandCardStyle";
import headSvg from "../../../assets/svg/head.svg";
import unisexSvg from "../../../assets/svg/unisex.svg";
import cubeSvg from "../../../assets/svg/cube.svg";
import landmap1Png from "../../../assets/img/landmap1.png";
//
import LocationBtn from "../../Base/LocationBtn";
import LandSize from "../../Base/LandSize";
import React, { useEffect, useState } from "react";
import { getEstateSize } from "../../../../src/hooks/api";
import { getMetadata } from "../../../../src/hooks/api";

interface LandCardProps {
  type: string;
  tokenid?: any;
  locationbtnX?: number;
  locationbtnY?: number;
  landName?: string;
  category: string;
  price?: number;
  onClick?: () => void;
}

export default function LandCard({
  type,
  tokenid,
  locationbtnX,
  locationbtnY,
  landName,
  category,
  price,
  onClick,
}: LandCardProps) {
  const classes = LandCardStyle();
  const [count, setCount] = React.useState(0);
  const [metaLandname, setMetaLandname] = React.useState("");
  const [status, setStatus] = React.useState(0);
  const getLandCount = async () => {
    await getEstateSize(tokenid).then((res: any) => {
      setCount(res);
    });
  };

  const getMetaData = async () => {
    await getMetadata(tokenid).then((res: any) => {
      let metaData = res.split(",");
      setMetaLandname(metaData[0]);
    });
  };
  useEffect(() => {
    if (type === "parcel") {
      if (landName === null || landName === "") {
        setStatus(10);
      } else {
        setStatus(11);
      }
    } else if (type === "estate") {
      setStatus(20);
    }
    getLandCount();
    getMetaData();
  }, []);

  return (
    <>
      <div className={classes.root} onClick={onClick}>
        <div className={classes.header}>
          {type === "parcel" ? (
            <LocationBtn position={`${locationbtnX} , ${locationbtnY}`} dark />
          ) : (
            <LandSize count={count} />
          )}
          <div className={classes.iconContainer}>
            <img src={headSvg} className={classes.icon} />
            <img src={unisexSvg} className={classes.icon} />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={landmap1Png} className={classes.image} />
        </div>
        {status === 10 ? (
          <div className={classes.productName}> Parcel </div>
        ) : status === 11 ? (
          <div className={classes.productName}>{landName}</div>
        ) : status === 20 ? (
          <div className={classes.productName}>{metaLandname}</div>
        ) : (
          <div className={classes.productName}> Estate </div>
        )}
        <div className={classes.bottom}>
          <div className={classes.category}>{category}</div>
          {price ? (
            <div className={classes.priceContainer}>
              <img src={cubeSvg} className={classes.icon} />
              <div className={classes.price}>{price}</div>
            </div>
          ) : (
            <div className={classes.priceContainer}>
              <div className={classes.emptyprice}>{}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
