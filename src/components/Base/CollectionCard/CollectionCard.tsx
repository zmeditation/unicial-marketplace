import { ProductCardStyle } from "./CollectionCardStyle";
import PussyhairPng from "../../../assets/img/Pussyhair.png";

interface ProductCardProps {
  name: string;
  count: number;
}

export default function ProductCard({ name, count }: ProductCardProps) {
  const classes = ProductCardStyle();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img src={PussyhairPng} className={classes.image} />
        </div>
        <div className={classes.nameContainer}>{name}</div>
        <div className={classes.descContainer}>
          <span>Collection</span>
          <span className={classes.divide}></span>
          <span>{count} &nbsp; items</span>
        </div>
      </div>
    </>
  );
}
