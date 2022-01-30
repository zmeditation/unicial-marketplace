import { CollectiblesStyle } from "./CollectiblesStyle";
import TopTab from "../../components/TopTab/TopTab";
import CollectibleFilter from "../../components/Collectible/CollectibleFilter/CollectibleFilter";
import ProductCard from "../../components/Base/ProductCard/ProductCard";
import CollectibleSidebar from "../../components/Collectible/CollectibleSidebar/CollectibleSidebar";
import NoResult from "../../components/NoResult/NoResult";

import Grid from "@material-ui/core/Grid";
import { ShowMoreLessBtn } from "../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import React, { useEffect } from "react";

export default function Collectibles() {
  const classes = CollectiblesStyle();
  const { t, i18n } = useTranslation();
  //
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  var category = query.get("section");
  const [rightPartIndex, setrightPartIndex] = React.useState("");
  useEffect(() => {
    switch (category) {
      case "wearables":
        setrightPartIndex("wearables");
        break;
      default:
        setrightPartIndex("");
        break;
    }
  });
  return (
    <>
      <TopTab />
      <div className={classes.root}>
        <div className={classes.leftPart}>
          <CollectibleSidebar />
        </div>
        <div className={classes.rightPart}>
          {rightPartIndex === "wearables" ? (
            <>
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
            </>
          ) : (
            <NoResult />
          )}

          {/* <NoResult/> */}
        </div>
      </div>
    </>
  );
}
