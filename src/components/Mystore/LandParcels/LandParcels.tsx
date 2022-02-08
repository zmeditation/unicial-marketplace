import { useEffect, useState } from "react";
import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import { getParcelsByOwner } from "../../../hooks/api";
import { useAppSelector } from "../../../store/hooks";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { useNavigate } from "react-router";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { showMoreCount } from "../../../config/constant";


export default function LandParcels() {
  const classes = LandParcelsStyle();
  const [ownParcels, setOwnParcels] = useState<[]>();
  const [cardStatus, setcardStatus] = useState(1);
  const customerAddress = useAppSelector(selectLoginAddress);
  const navigate = useNavigate();

  const handleNavigate = (tokenId: string) => {
    navigate(`/contracts/${SpaceProxyAddress}/tokens/${tokenId}/parcel_detail`);
  };

  useEffect(() => {
    getParcelsByOwner(customerAddress).then(
      (parcels) => {
        setOwnParcels(parcels);
      }
    );
  }, []);
  const handleShowBtn = (index: number) => {
    setcardStatus(index);
  };
  return (
    <>
      <Grid container spacing={2}>
        {cardStatus === 1
          ? ownParcels &&
            ownParcels.slice(0, showMoreCount).map((ownParcel: any, index: any) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <LandCard
                  locationbtnX={ownParcel.x}
                  locationbtnY={ownParcel.y}
                  landName="Plaza Area Sale"
                  category="Zilionixx"
                  onClick={() => handleNavigate(ownParcel.tokenId)}
                />
              </Grid>
            ))
          : ownParcels &&
            ownParcels.map((ownParcel: any, index: any) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <LandCard
                  locationbtnX={ownParcel.x}
                  locationbtnY={ownParcel.y}
                  landName="Plaza Area Sale"
                  category="Zilionixx"
                  onClick={() => handleNavigate(ownParcel.tokenId)}
                />
              </Grid>
            ))}
      </Grid>
      {cardStatus === 1 ? (
        <div className={classes.showmoreContent}>
          <ShowMoreLessBtn letter="Show All" onClick={() => handleShowBtn(2)} />
        </div>
      ) : (
        <div className={classes.showmoreContent}>
          <ShowMoreLessBtn
            letter="Show Less"
            onClick={() => handleShowBtn(1)}
          />
        </div>
      )}
    </>
  );
}
