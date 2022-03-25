import { Grid } from "@material-ui/core";
import { SalesStyle } from "./SalesStyle";
import GeneralSaleCard from "../GeneralSaleCard/GeneralSaleCard";
import GradientEarningCard from "../GradientEarningCard/GradientEarningCard";
import SalesStagingTable from "../../../pages/MyStore/SalesStagingTable/SalesStagingTable";
import { headerData } from "./SalesStagingData";
import { getSaleDataAPI } from "../../../../src/hooks/salesdata";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Sales() {
  const classes = SalesStyle();
  const { t } = useTranslation();
  const [saledata, setSaledata] = React.useState();

  const getSaleData = async () => {
    const saledata = await getSaleDataAPI();
    setSaledata(saledata.data.data);
    return saledata.data.data;
  };

  React.useEffect(() => {
    getSaleData();
  }, []);

  return (
    <>
      <div className={classes.statsContainer}>
        <div className={classes.title}>{t("Stats")}</div>
        <div className={classes.generalStats}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4}>
              <GeneralSaleCard iconSrc="pen" priceColor="yellow" price={121} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <GeneralSaleCard
                iconSrc="moneybag"
                priceColor="purple"
                price={111}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <GeneralSaleCard iconSrc="crown" priceColor="green" price={621} />
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
      <div>
        <div className={classes.title}>{t("Staging")}</div>
        <SalesStagingTable columns={headerData} rows={saledata} stepIndex={1} />
      </div>
    </>
  );
}
