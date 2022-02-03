import { useEffect, useState } from "react";
import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { getParcelsByOwner } from "../../../hooks/api";
import { useAppSelector } from "../../../store/hooks";
import { selectLoginAddress } from "../../../store/auth/selectors";

export default function LandParcels() {
  const classes = LandParcelsStyle();
  const [ownParcels, setOwnParcels] = useState();
  const loginAddress = useAppSelector(selectLoginAddress);

  useEffect(() => {
    getParcelsByOwner("0x8734CB972d36a740Cc983d5515e160C373A4a016").then(
      (parcels) => {
        setOwnParcels(parcels);
      }
    );
  }, []);
  console.log(ownParcels);
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
