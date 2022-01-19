import { CollectiblesStyle } from "./CollectiblesStyle";
import TypeBox from "../../components/Collectible/TypeBox/TypeBox";
import CategoryTree from "../../components/Collectible/CategoryTree/CategoryTree";
import CollectibleSearchBar from "../../components/Collectible/CollectibleSearchBar/CollectibleSearchBar";
import CollectibleFilter from "../../components/Collectible/CollectibleFilter/CollectibleFilter";
import ProductCard from "../../components/Collectible/ProductCard/ProductCard";
export default function Collectibles() {
  const classes = CollectiblesStyle();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.leftPart}>
          {/* <TypeBox /> */}
          <CategoryTree />
        </div>
        <div className={classes.rightPart}>
          <CollectibleSearchBar />
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
