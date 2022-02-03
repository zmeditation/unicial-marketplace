import { ParcelCardStyle } from "./ParcelCardStyle";
import Tag from "../Base/Tag"
import LocationBtn from "../../components/Base/LocationBtn";


interface ParcelCardProps {
  cardlabel: string;
  carddescription: string;
  location: string;
  onClick?: () => void;
}

export default function ParcelCard({
  cardlabel,
  carddescription,
  location,
  onClick,
}: ParcelCardProps) {
  const classes = ParcelCardStyle();
  return (
    <>
      <div className={classes.card}>
        <Tag color="RareColor" letter="Parcel" className={classes.cardLabel}/>
        <div className={classes.cardDescription}>{carddescription}</div>
        <LocationBtn position={location} dark className={classes.location}/>
      </div>
    </>
  );
}
