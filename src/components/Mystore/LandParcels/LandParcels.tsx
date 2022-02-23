import { useEffect, useState } from "react";
import { LandParcelsStyle } from "./LandParcelsStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import { ShowMoreLessBtn } from "../../ShowMoreLessBtn/ShowMoreLessBtn";
import { getParcelsByOwnerAsCoords } from "../../../hooks/api";
import { useAppSelector } from "../../../store/hooks";
import { selectLoginAddress } from "../../../store/auth/selectors";
import { useLocation, useNavigate } from "react-router";
import { SpaceProxyAddress } from "../../../config/contracts/SpaceRegistryContract";
import { showMoreCount } from "../../../config/constant";
import NoResult from "../../NoResult/NoResult";
import { selectSaleParcels } from "../../../store/saleparcels/selectors";
import { getCoords } from "../../../common/utils";
import { parcels } from "../../../store/parcels/selectors";

export default function LandParcels() {
  const classes = LandParcelsStyle();
  const [resultParcels, setResultParcels] = useState<any>();
  const [showStatus, setShowStatus] = useState(false);
  const loginAddress = useAppSelector(selectLoginAddress);
  const saleParcels: any = useAppSelector(selectSaleParcels);
  const tiles: any = useAppSelector(parcels)

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const handleNavigate = (tokenId: string) => {
    navigate(`/contracts/${SpaceProxyAddress}/tokens/${tokenId}/parcel_detail`);
  };

  const getResult = async () => {
    await getParcelsByOwnerAsCoords(loginAddress).then((parcels) => {
      if (
        query.get("onlyOnSale") === null ||
        query.get("onlyOnSale") === "true"
      ) {
        setResultParcels(
          parcels.filter((el: any) => saleParcels[getCoords(el?.x, el?.y)])
        );
      } else {
        setResultParcels(parcels);
        // alert("okdes");
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
              .slice(0, !showStatus ? showMoreCount : resultParcels.length)
              .map((tokenId: any, key: any) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <LandCard
                    locationbtnX={tokenId[0]}
                    locationbtnY={tokenId[1]}
                    landName="Plaza Area Sale"
                    category="Zilionixx"
                    onClick={() => handleNavigate(tiles[getCoords(tokenId[0],tokenId[1])].tokenId)}
                  />
                </Grid>
              ))}
          </Grid>
          <div
            className={
              resultParcels.length < showMoreCount
                ? classes.displayNone
                : classes.showmoreContent
            }
          >
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
