import { CollectiblesStyle } from "./CollectiblesStyle";
import TopTab from "../../components/TopTab/TopTab";
import CollectibleFilter from "../../components/Collectible/CollectibleFilter/CollectibleFilter";
import ProductCard from "../../components/Collectible/ProductCard/ProductCard";
import CollectibleSidebar from "../../components/Collectible/CollectibleSidebar/CollectibleSidebar";

export default function Collectibles() {
  const classes = CollectiblesStyle();
  return (
    <>
      <TopTab />
      <div className={classes.root}>
        <div className={classes.leftPart}>
          <CollectibleSidebar />
        </div>
        <div className={classes.rightPart}>
          <CollectibleFilter />
          <div className={classes.products}>
            <ProductCard
              tagColor="EpicColor"
              tagLetter="EPIC"
              productName="Pussy Hair"
              category="Polygon"
              price={1259}
            />
          </div>
        </div>
      </div>
    </>
  );
}
