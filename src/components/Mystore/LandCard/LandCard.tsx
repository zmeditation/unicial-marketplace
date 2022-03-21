import { LandCardStyle } from "./LandCardStyle";
import headSvg from "../../../assets/svg/head.svg";
import unisexSvg from "../../../assets/svg/unisex.svg";
import cubeSvg from "../../../assets/svg/cube.svg";
import landmap1Png from "../../../assets/img/landmap1.png";
//
import LocationBtn from "../../Base/LocationBtn";

interface LandCardProps {
  locationbtnX: number;
  locationbtnY: number;
  landName?: string;
  category: string;
  price?: number;
  onClick?: () => void;
}

export default function LandCard({
  locationbtnX,
  locationbtnY,
  landName,
  category,
  price,
  onClick,
}: LandCardProps) {
  const classes = LandCardStyle();
  return (
    <>
      <div className={classes.root} onClick={onClick}>
        <div className={classes.header}>
          <LocationBtn position={`${locationbtnX} , ${locationbtnY}`} dark />
          <div className={classes.iconContainer}>
            <img src={headSvg} className={classes.icon} />
            <img src={unisexSvg} className={classes.icon} />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src={landmap1Png} className={classes.image} />
        </div>
        <div className={classes.productName}>{landName}</div>
        <div className={classes.bottom}>
          <div className={classes.category}>{category}</div>
          {price ? (
            <div className={classes.priceContainer}>
              <img src={cubeSvg} className={classes.icon} />
              <div className={classes.price}>{price}</div>
            </div>
          ) : (
            <div className={classes.priceContainer}></div>
          )}
        </div>
      </div>
    </>
  );
}
