import { GradientEarningCardStyle } from "./GradientEarningCardStyle";
import cubeSvg from "./../../../assets/svg/cube.svg";
import shapeSvg from "./../../../assets/svg/shape.svg";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
interface GradientEarningCardProps {
  iconSrc: string;
  backgroundColor: string;
  title: string;
  price: number;
  className?: any;
}

export default function GradientEarningCard({
  iconSrc,
  backgroundColor,
  title,
  price,
  className,
}: GradientEarningCardProps) {
  const classes = GradientEarningCardStyle();
  const { t, i18n} = useTranslation();
  return (
    <>
      <div
        className={clsx(classes.root, className, {
          [classes.yellow]: backgroundColor === "yellow",
          [classes.purple]: backgroundColor === "purple",
        })}
      >
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <img src={iconSrc === "cube" ? cubeSvg : shapeSvg} />
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.title}>
              {title === "ethereum" ? "ETHEREUM" : "POLYGON"} {t("Earnings")}
            </div>
            <div className={classes.price}>{price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
