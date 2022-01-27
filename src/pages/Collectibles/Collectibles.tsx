import { CollectiblesStyle } from "./CollectiblesStyle";
import TopTab from "../../components/TopTab/TopTab";
import CollectibleFilter from "../../components/Collectible/CollectibleFilter/CollectibleFilter";
import ProductCard from "../../components/Collectible/ProductCard/ProductCard";
import CollectibleSidebar from "../../components/Collectible/CollectibleSidebar/CollectibleSidebar";
import NoResult from "../../components/NoResult/NoResult";

import Grid from "@material-ui/core/Grid";
import { ShowMoreLessBtn } from "../../components/ShowMoreLessBtn/ShowMoreLessBtn";

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
          <div className={classes.CollectibleFilterContainer}>
            <CollectibleFilter />
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                tagColor="EpicColor"
                tagLetter="EPIC"
                productName="Pussy Hair"
                category="Polygon"
                price={1259}
              />
            </Grid>
          </Grid>
          <div className={classes.showmoreContent}>
            <ShowMoreLessBtn />
          </div>
          {/* <NoResult/> */}
        </div>
      </div>
    </>
  );
}
