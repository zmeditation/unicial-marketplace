import React, { useEffect, useState } from "react";
import { MyStoreStyle } from "./MyStoreStyle";
import TopTab from "../../components/TopTab/TopTab";
import MystoreSidebar from "../../components/Mystore/MystoreSidebar/MystoreSidebar";
import GeneralSaleCard from "../../components/Mystore/GeneralSaleCard/GeneralSaleCard";
import GradientEarningCard from "../../components/Mystore/GradientEarningCard/GradientEarningCard";
import SalesStagingTable from "../MyStore/SalesStagingTable/SalesStagingTable";
import { headerData, stagingData } from "./SalesStagingData";
import MobileSidebar from "../../components/Mystore/MobileSidebar/MobileSidebar";
import LandParcels from "../../components/Mystore/LandParcels/LandParcels";
import LandEstates from "../../components/Mystore/LandEstates/LandEstates";
import OnSale from "../../components/Mystore/OnSale/OnSale";
import AllBids from "../../components/Mystore/AllBids/AllBids";
import NoResult from "../../components/NoResult/NoResult";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { getSaleDataAPI } from "../../hooks/salesdata";
export default function MyStore() {
  const classes = MyStoreStyle();
  const { t } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  var category = query.get("section");
  const [rightPartIndex, setrightPartIndex] = React.useState("");
  const [saledata, setSaledata] = useState();

  const getSaleData = async () => {
    const saledata = await getSaleDataAPI();
    setSaledata(saledata.data.data);
    return saledata.data.data;
  };
  useEffect(() => {
    getSaleData();
  }, []);

  useEffect(() => {
    switch (category) {
      case "parcels":
        setrightPartIndex("parcels");
        break;
      case "sales":
        setrightPartIndex("sales");
        break;
      case "estates":
        setrightPartIndex("estates");
        break;
      case "on_sale":
        setrightPartIndex("on_sale");
        break;
      case "bids":
        setrightPartIndex("bids");
        break;
      default:
        setrightPartIndex("");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  // console.log("realdata", saledata);
  return (
    <>
      <TopTab />
      <div className={classes.MobileSidebarContainer}>
        <MobileSidebar />
      </div>

      <div className={classes.root}>
        <div className={classes.leftPart}>
          <MystoreSidebar />
        </div>
        <div className={classes.rightPart}>
          {rightPartIndex === "parcels" ? (
            <LandParcels />
          ) : rightPartIndex === "estates" ? (
            <LandEstates />
          ) : rightPartIndex === "sales" ? (
            <>
              <div className={classes.statsContainer}>
                <div className={classes.title}>{t("Stats")}.</div>
                <div className={classes.generalStats}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4}>
                      <GeneralSaleCard
                        iconSrc="pen"
                        priceColor="yellow"
                        price={121}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <GeneralSaleCard
                        iconSrc="moneybag"
                        priceColor="purple"
                        price={111}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <GeneralSaleCard
                        iconSrc="crown"
                        priceColor="green"
                        price={621}
                      />
                    </Grid>
                  </Grid>
                </div>

                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={6}>
                    <GradientEarningCard
                      iconSrc="cube"
                      backgroundColor="yellow"
                      title="ethereum"
                      price={100}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <GradientEarningCard
                      iconSrc="shape"
                      backgroundColor="purple"
                      title="polygon"
                      price={300}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.staginContainer}>
                <div className={classes.title}>{t("Staging")}.</div>
                <SalesStagingTable
                  columns={headerData}
                  rows={saledata}
                  stepIndex={1}
                />
              </div>
            </>
          ) : rightPartIndex === "on_sale" ? (
            <OnSale />
          ) : rightPartIndex === "bids" ? (
            <AllBids />
          ) : (
            <NoResult />
          )}
        </div>
      </div>
    </>
  );
}
