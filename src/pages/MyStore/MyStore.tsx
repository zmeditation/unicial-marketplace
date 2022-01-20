import { MyStoreStyle } from "./MyStoreStyle";
import TopTab from "../../components/TopTab/TopTab";
import MystoreSidebar from "../../components/Mystore/MystoreSidebar/MystoreSidebar";
import GeneralSaleCard from "../../components/Mystore/GeneralSaleCard/GeneralSaleCard";
import GradientEarningCard from "../../components/Mystore/GradientEarningCard/GradientEarningCard";
import Grid from "@material-ui/core/Grid";
export default function MyStore() {
  const classes = MyStoreStyle();
  return (
    <>
      <TopTab />
      <div className={classes.root}>
        <div className={classes.leftPart}>
          <MystoreSidebar />
        </div>
        <div className={classes.rightPart}>
          <div className={classes.statsContainer}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4}>
                <GeneralSaleCard
                  iconSrc="pen"
                  priceColor="yellow"
                  price={121}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <GeneralSaleCard
                  iconSrc="moneybag"
                  priceColor="purple"
                  price={111}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <GeneralSaleCard
                  iconSrc="crown"
                  priceColor="green"
                  price={621}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <GradientEarningCard
                  iconSrc="cube"
                  backgroundColor="yellow"
                  title="ethereum"
                  price={100}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <GradientEarningCard
                  iconSrc="shape"
                  backgroundColor="purple"
                  title="polygon"
                  price={300}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
