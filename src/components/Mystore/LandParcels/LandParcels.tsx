import { useEffect, useState } from "react";
import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import { getParcelsByOwner } from "../../../hooks/api";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { useLocation, useNavigate } from "react-router";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { showMoreCount } from "../../../config/constant";
import NoResult from "../../NoResult/NoResult";
import { setSaleParcels } from "../../../store/saleparcels";
import { selectSaleParcels } from "../../../store/saleparcels/selectors";
import { getCoords } from "../../../common/utils";

export default function LandParcels() {
  const classes = LandParcelsStyle();
  const [resultParcels, setResultParcels] = useState<any>();
  const [showStatus, setShowStatus] = useState(false);
  const customerAddress = useAppSelector(selectLoginAddress);
  const saleParcels: any = useAppSelector(selectSaleParcels);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleNavigate = (tokenId: string) => {
    navigate(`/contracts/${SpaceProxyAddress}/tokens/${tokenId}/parcel_detail`);
  };

  const getResult = async () => {
    await dispatch(setSaleParcels());

    await getParcelsByOwner(customerAddress).then((parcels) => {
      if (
        query.get("onlyOnSale") === null ||
        query.get("onlyOnSale") === "true"
      ) {
        setResultParcels(
          parcels.filter((el: any) => saleParcels[getCoords(el?.x, el?.y)])
        );
      } else {
        setResultParcels(parcels);
      }
    });
  };

  useEffect(() => {
    getResult();
  }, [location]);

  const handleShowBtn = () => {
    setShowStatus(!showStatus);
  };

  return (
    <>
      {resultParcels !== undefined && resultParcels.length !== 0 ? (
        <>
          <Grid container spacing={2}>
            {resultParcels
              .slice(
                0,
                !showStatus ? showMoreCount : resultParcels.length
              )
              .map((ownParcel: any, index: any) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <LandCard
                    locationbtnX={ownParcel.x}
                    locationbtnY={ownParcel.y}
                    landName='Plaza Area Sale'
                    category='Zilionixx'
                    onClick={() => handleNavigate(ownParcel.tokenId)}
                  />
                </Grid>
              ))}
          </Grid>
          <div
            className={
              resultParcels.length < showMoreCount
                ? classes.displayNone
                : classes.showmoreContent
            }>
            <ShowMoreLessBtn
              letter={showStatus ? "Show Less" : "Show All"}
              onClick={handleShowBtn}
            />
          </div>
        </>
      ) : (
        <NoResult />
      )}
    </>
  );
}
