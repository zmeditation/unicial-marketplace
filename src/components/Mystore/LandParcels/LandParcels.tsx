import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
export default function LandParcels() {
  const classes = LandParcelsStyle();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName="Plaza Area Sale"
            category="Ethereum"
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName="Plaza Area Sale"
            category="Ethereum"
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName="Plaza Area Sale"
            category="Ethereum"
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName="Plaza Area Sale"
            category="Ethereum"
            price={3999}
          />
        </Grid>
      </Grid>
    </>
  );
}
