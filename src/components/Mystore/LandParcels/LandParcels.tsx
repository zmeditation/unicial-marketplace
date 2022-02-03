import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { useLocation, useNavigate } from "react-router";
export default function LandParcels() {
  const classes = LandParcelsStyle();
  const location = useLocation();
  const navigate = useNavigate();
  const handleCard = (url: string) => {
    alert("ok");
    console.log("okdes");
    // navigate(url);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName="Plaza Area Sale"
            category="Ethereum"
            price={3999}
            onClick={() => handleCard("/parcel_detail")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName="Plaza Area Sale"
            category="Ethereum"
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <LandCard
            locationbtnX={23}
            locationbtnY={12}
            landName="Plaza Area Sale"
            category="Ethereum"
            price={3999}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
