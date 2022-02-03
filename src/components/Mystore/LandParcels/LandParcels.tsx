import { useEffect, useState } from "react";
import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { getParcelsByOwner } from "../../../hooks/api";
import { useAppSelector } from "../../../store/hooks";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { useNavigate } from "react-router";

export default function LandParcels() {
  const classes = LandParcelsStyle();
  const [ownParcels, setOwnParcels] = useState<[]>();
  const loginAddress = useAppSelector(selectLoginAddress);
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(
      `/contracts/0xCf7c8979AFF022Aa478ee4D7BA538cd01FDB7DC0/tokens/${url}/parcel_detail`
    );
  };

  useEffect(() => {
    getParcelsByOwner("0x8734CB972d36a740Cc983d5515e160C373A4a016").then(
      (parcels) => {
        setOwnParcels(parcels);
      }
    );
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {ownParcels?.map((ownParcel: any, index: any) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LandCard
              locationbtnX={23}
              locationbtnY={12}
              landName="Plaza Area Sale"
              category="Ethereum"
              price={3999}
              onClick={() => handleNavigate(ownParcel.tokenId)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
