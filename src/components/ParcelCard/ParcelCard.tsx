import { ParcelCardStyle } from "./ParcelCardStyle";
import Tag from "../Base/Tag"
import LocationBtn from "../../components/Base/LocationBtn";


interface ParcelCardProps {
  cardlabel: string;
  carddescription: string;
  axisX: number;
  axisY: number;
  onClick?: () => void;
}

export default function ParcelCard({
  cardlabel,
  carddescription,
  axisX,
  axisY,
  onClick,
}: ParcelCardProps) {
  const classes = ParcelCardStyle();
  return (
    <>
      <div className={classes.card}>
        <Tag color="RareColor" letter="Parcel" className={classes.cardLabel}/>
        <div className={classes.cardDescription}>{carddescription}</div>
        <LocationBtn axisX={axisX} axisY={axisY} dark className={classes.location}/>
      </div>
    </>
  );
}
