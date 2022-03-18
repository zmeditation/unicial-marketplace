import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useStyles } from "./SelectEditEstateStyles";
import { Grid } from "@material-ui/core";
import CreateEstateMap from "../../../../components/CreateEstateMap";
import ParcelCard from "../../../../components/ParcelCard/ParcelCard";

import TopTab from "../../../../components/TopTab/TopTab";
import ActionButton from "../../../../components/Base/ActionButton";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { BackButton } from "../../../../components/BackButton/BackButton";

import { selectestates } from "../../../../store/selectedestates/selectors";
import { getestates } from "../../../../store/selectedestates";
import { showAlert } from "../../../../store/alert";

import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { getCoords } from "../../../../common/utils";
import { parcels } from "../../../../store/parcels/selectors";
import { EstateProxyAddress } from "../../../../config/contracts/EstateRegitryContract";

export default function SelectEditEstate() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const estate = useAppSelector(selectestates);
  const tiles: any = useAppSelector(parcels);
  const { contractaddress, estateid } = useParams();
  const [focusedEstate, setFocusedEstate] = useState<any>();
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);
  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);

  useEffect(() => {
    let estatePropsArray: any = [];
    let estateArray: any = [];
    Object.keys(tiles).forEach((index: any) => {
      const item = tiles[index];
      if (
        item.estateId === estateid &&
        contractaddress === EstateProxyAddress
      ) {
        estatePropsArray.push(getCoords(item.x, item.y));
        estateArray.push({ x: item.x, y: item.y });
      }
    });
    estateArray?.sort((a: any, b: any) =>
      Number(a.x) > Number(b.x) || Number(a.y) > Number(b.y) ? -1 : 1
    );
    setFocusedEstate(estatePropsArray);
    if (estateArray?.length !== 0) {
      setCenterX(
        Math.ceil(
          (estateArray[0]?.x + estateArray[estateArray?.length - 1]?.x) / 2
        )
      );
      setCenterY(
        Math.ceil(
          (estateArray[0]?.y + estateArray[estateArray?.length - 1]?.y) / 2
        )
      );
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiles, estateid]);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(1064);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(933);
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
      setWidth(723);
    } else if (window.innerWidth <= 767 && window.innerWidth > 500) {
      setWidth(420);
    } else if (window.innerWidth <= 500) {
      setWidth(300);
    }
  };

  const handleContinue = () => {
    let status = false;
    let totalSpace = estate.concat(focusedEstate);
    for (let i = 0; i < totalSpace?.length; i++) {
      var x: number = +totalSpace[i].substring(0, totalSpace[i].indexOf(","));
      var y: number = +totalSpace[i].substring(totalSpace[i].indexOf(",") + 1);

      const leftIndex = totalSpace.indexOf(getCoords(x - 1, y));
      const topIndex = totalSpace.indexOf(getCoords(x, y - 1));
      const rightIndex = totalSpace.indexOf(getCoords(x + 1, y));
      const bottomIndex = totalSpace.indexOf(getCoords(x, y + 1));

      status = true;

      if (leftIndex < 0 && topIndex < 0 && rightIndex < 0 && bottomIndex < 0) {
        status = false;
        break;
      }
    }

    status
      ? navigate("/account/estate/editestate")
      : dispatch(
          showAlert({
            message:
              "You must have to select neighborhood parcels of your estate exactly!",
            severity: "error",
          })
        );
  };

  const handleClear = () => {
    dispatch(getestates([]));
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <TopTab />
      <div className={classes.root}>
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <CreateEstateMap
              height={400}
              width={width}
              initialX={centerX}
              initialY={centerY}
              myEstate={focusedEstate}
            />
          </div>
        </div>
        <div className={classes.btnPart}>
          <BackButton className={classes.backButton} />
          <ActionButton
            color='light'
            className={classes.clearBtn}
            onClick={handleClear}>
            {t("Clear")}
            <CallMadeIcon fontSize='small' />
          </ActionButton>
        </div>

        <div className={classes.cardContainer}>
          <div className={classes.cardTitle}>
            {t(
              "Select the neighborhood parcels of your Estate on the map for edit your Estate"
            )}
          </div>
          <div className={classes.cardSelect}>{t("Selected parcels")}</div>
          <div className={classes.cards}>
            <Grid container spacing={2}>
              {estate?.map((items: any, key: any) => {
                return (
                  <Grid key={key} item xs={6} sm={4} md={2}>
                    <ParcelCard
                      cardlabel='Parcel'
                      carddescription='Acquired at August 2nd, 2018'
                      location={items}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <div className={classes.btns}>
              <div className={classes.buttons}>
                <ActionButton
                  color='light'
                  className={classes.bidchange}
                  onClick={handleContinue}>
                  {t("CONTINUE")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={() => navigate("/account?section=estates")}>
                  {t("CANCEL")}
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
