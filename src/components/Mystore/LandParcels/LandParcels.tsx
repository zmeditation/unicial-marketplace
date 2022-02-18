import { useEffect, useState } from "react";
import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import { getParcelsByOwner } from "../../../hooks/api";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { useLocation, useNavigate, useParams } from "react-router";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { showMoreCount, LandStatus } from "../../../config/constant";
import NoResult from "../../NoResult/NoResult";
import { selectSaleParcels } from "../../../store/saleparcels/selectors";

export default function LandParcels() {
  const classes = LandParcelsStyle();
  const [onSale, setOnSale] = useState(true);
  const [ownParcels, setOwnParcels] = useState<[]>();
  const [cardStatus, setcardStatus] = useState(LandStatus.ShowPartResult);
  const customerAddress = useAppSelector(selectLoginAddress);
  const saleParcels: any = useAppSelector(selectSaleParcels);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleNavigate = (tokenId: string) => {
    navigate(`/contracts/${SpaceProxyAddress}/tokens/${tokenId}/parcel_detail`);
  };

  useEffect(() => {
    getParcelsByOwner(customerAddress).then((parcels) => {
      setOwnParcels(parcels);
    });
  }, [customerAddress]);
  // console.log("saleParcels", saleParcels);
  // useEffect(() => {
  //   saleParcels().then(())
  // })

  useEffect(() => {
    if (ownParcels?.length === 0 || ownParcels === undefined) {
      setcardStatus(LandStatus.NoneResult);
      return;
    }
    setcardStatus(LandStatus.ShowPartResult);
  }, [ownParcels]);

  useEffect(() => {
    if (query.get("onlyOnSale") === null) {
      setOnSale(true);
      return;
    }
    if (query.get("onlyOnSale") === "true") {
      setOnSale(true);
    } else {
      setOnSale(false);
    }
  }, [location]);

  const handleShowBtn = (index: number) => {
    setcardStatus(index);
  };
  console.log("saleParcels", saleParcels);
  console.log("ownParcels", ownParcels);
  return (
    <>
      <Grid container spacing={2}>
        {onSale === true
          ? Object.keys(saleParcels).map((key: any) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <LandCard
                    locationbtnX={saleParcels[key]?.x}
                    locationbtnY={saleParcels[key]?.y}
                    landName="Plaza Area Sale"
                    category="Zilionixx"
                    onClick={() => handleNavigate(saleParcels[key].tokenId)}
                  />
                </Grid>
              );
            })
          : cardStatus === LandStatus.ShowPartResult
          ? ownParcels &&
            ownParcels
              .slice(0, showMoreCount)
              .map((ownParcel: any, index: any) => (
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
      {cardStatus === LandStatus.ShowPartResult ? (
        <div className={classes.showmoreContent}>
          <ShowMoreLessBtn
            letter="Show All"
            onClick={() => handleShowBtn(LandStatus.ShowAllResult)}
          />
        </div>
      ) : cardStatus === LandStatus.ShowAllResult ? (
        <div className={classes.showmoreContent}>
          <ShowMoreLessBtn
            letter="Show Less"
            onClick={() => handleShowBtn(LandStatus.ShowPartResult)}
          />
        </div>
      ) : (
        <NoResult />
      )}
    </>
  );
}
