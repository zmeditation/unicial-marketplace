import { Theme, makeStyles } from "@material-ui/core/styles";
import LocationBtn from "../Base/LocationBtn";
import { ShowMoreLessBtn } from "../ShowMoreLessBtn/ShowMoreLessBtn";
import { useTranslation } from "react-i18next";
import { getCoords } from "../../common/utils";
import { useEffect, useState } from "react";
import { parcelshowMoreCount } from "../../config/constant";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "35px",
    marginBottom: "47px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "50px",
    marginBottom: "8px",
    color: "white",
  },
  parcels: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  buttonGroup: {
    display: "grid",
    justifyContent: "space-between",
    gridTemplateColumns: "repeat(auto-fill, 83px)",
    marginTop: "13px",
    overflow: "hidden",
  },
  pin: {
    width: "17px !important",
    height: "16px !important",
    backgroundSize: "19px",
    backgroundPosition: "-2px -1px",
  },
  parcelbtn: {
    margin: "6px",
    borderRadius: "20px",
    width: "79px",
    padding: "5.5px 11px",
    backgroundColor: "#282E4E",
  },
  showmoreContent: {
    marginTop: "15px",
    justifyContent: "center",
    width: "100%",
    flexFlow: "row nowrap",
    display: "flex",
  },
  showmoreBtn: {
    fontSize: "15px",
    color: "#ff2d55",
    cursor: "pointer",
  },
  displayNone: {
    display: "none",
  },
}));

interface ParcelsProps {
  parcels: any;
}

const Parcels = ({ parcels }: ParcelsProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [count, setCount] = useState(parcelshowMoreCount);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showLessBtn, setShowLessBtn] = useState(false);

  const handleShowBtn = () => {
    setCount(parcels?.length);
    setShowMoreBtn(false);
    setShowLessBtn(true);
  };

  const handleShowLessBtn = () => {
    setCount(parcelshowMoreCount);
    setShowMoreBtn(true);
    setShowLessBtn(false);
  };

  useEffect(() => {
    if (
      parcels !== undefined &&
      parcels.length !== 0 &&
      parcels?.length <= parcelshowMoreCount
    ) {
      setShowMoreBtn(false);
      setShowLessBtn(false);
    } else {
      setShowMoreBtn(true);
      setShowLessBtn(false);
    }
  }, [parcels]);

  return (
    <div className={classes.root}>
      <div className={classes.title}>{t("Parcels")}</div>
      <div className={classes.parcels}>
        <div className={classes.buttonGroup}>
          {parcels?.slice(0, count).map((item: any, key: any) => {
            return (
              <LocationBtn key={key} position={getCoords(item.x, item.y)} />
            );
          })}
        </div>
        <div
          className={
            showMoreBtn === true ? classes.showmoreContent : classes.displayNone
          }
        >
          <ShowMoreLessBtn letter={t("Show More")} onClick={handleShowBtn} />
        </div>
        <div
          className={
            showLessBtn === true ? classes.showmoreContent : classes.displayNone
          }
        >
          <ShowMoreLessBtn
            letter={t("Show Less")}
            onClick={handleShowLessBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default Parcels;
