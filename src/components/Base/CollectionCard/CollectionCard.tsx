import { CollectionCardStyle } from "./CollectionCardStyle";
import PussyhairPng from "../../../assets/img/Pussyhair.png";
import moreIcon from "../../../assets/svg/more.png";
import DeletemoreIcon from "./../../Base/DeletemoreIcon";

interface CollctionCardProps {
  name: string;
  count: number;
  onClick?: () => void;
}

export default function CollctionCard({
  name,
  count,
  onClick,
}: CollctionCardProps) {
  const classes = CollectionCardStyle();
  return (
    <>
      <div className={classes.root} onClick={onClick}>
        <div className={classes.yellowTop}>
          <DeletemoreIcon className={classes.moreIcon} />
        </div>
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
