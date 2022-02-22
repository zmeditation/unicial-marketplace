import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useParams } from "react-router-dom";
import { useStyles } from "./ParcelDetailStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import BidDetail from "../../../../components/Mystore/BidDetail";
import { getParcelsByOwnerAsCoords } from "../../../../hooks/api";
import { dateConvert } from "../../../../common/utils";
import { ShowMoreLessBtn } from "../../../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { showMoreCount } from "../../../../config/constant";
import { useAppSelector } from "../../../../store/hooks";
import { selectLoginAddress } from "../../../../store/auth/selectors";

const ParcelDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const emptyTokens: any[] = [];
  const loginAddress = useAppSelector(selectLoginAddress);
  const { contractaddress, tokensid } = useParams();
  const [ownParcels, setOwnParcels] = useState(emptyTokens);
  const [count, setCount] = useState(showMoreCount);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showLessBtn, setShowLessBtn] = useState(false);

  useEffect(() => {
    getParcelsByOwnerAsCoords(loginAddress).then((parcels) => {
      setOwnParcels(parcels);
      if (parcels && parcels?.length <= showMoreCount) {
        setShowMoreBtn(false);
        setShowLessBtn(false);
      }
    });
  }, [loginAddress]);

  const handleShowBtn = () => {
    setCount(count + showMoreCount);
    if (ownParcels && count >= ownParcels?.length) {
      setShowMoreBtn(false);
      setShowLessBtn(true);
    }
  };

  const handleShowLessBtn = () => {
    setCount(showMoreCount);
    setShowMoreBtn(true);
    setShowLessBtn(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.root_container}>
        <BackButton className={classes.backBtn} />
        <div className={classes.bidCard}>
          <div className={classes.leftCard}>
            <div className={classes.imgContent}>
              <img
                src={TokenImg}
              className={classes.tokenImg}
                alt='token'></img>
            </div>
          </div>

          <div className={classes.rightCard}>
            <div className={classes.title}>{t("Parcel detail")}</div>
            <div className={classes.buttons}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Sell")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/transfer`
                  )
                }>
                {t("Transfer")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
              <ActionButton
                color='dark'
                className={classes.cancelchange}
                onClick={() => navigate(-1)}>
                {t("Cancel")}
              </ActionButton>
            </div>
          </div>
        </div>
        <div className={classes.bidDetail}>
          <div className={classes.bidsTitle}>{t("Bids")}.</div>
          {ownParcels?.slice(0, count).map((row: any, index: any) => (
            <BidDetail
              key={index}
              address={row.owner}
              price={1399}
              time={dateConvert(row.updatedAt)}
            />
          ))}
          <div
            className={
              showMoreBtn === true
                ? classes.showmoreContent
                : classes.displayNone
            }>
            <ShowMoreLessBtn letter={t("Show More")} onClick={handleShowBtn} />
          </div>
          <div
            className={
              showLessBtn === true
                ? classes.showmoreContent
                : classes.displayNone
            }>
            <ShowMoreLessBtn
              letter={t("Show Less")}
              onClick={handleShowLessBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
