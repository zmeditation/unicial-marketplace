import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useStyles } from "./EstateDetailStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { dateConvert } from "../../../../common/utils";
import BidDetail from "../../../../components/Mystore/BidDetail";
import { getEstatesByOwner } from "../../../../hooks/api";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import { ShowMoreLessBtn } from "../../../../components/ShowMoreLessBtn/ShowMoreLessBtn";
import { showMoreCount } from "../../../../config/constant";
import { useAppSelector } from "../../../../store/hooks";

const EstateDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const emptyTokens: any[] = [];
  const loginAddress = useAppSelector(selectLoginAddress);
  const { contractaddress, estateid } = useParams();
  const [ownEstates, setOwnEstates] = useState(emptyTokens);
  const [count, setCount] = useState(showMoreCount);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [showLessBtn, setShowLessBtn] = useState(false);

  useEffect(() => {
    getEstatesByOwner(loginAddress).then((parcels: any[]) => {
      setOwnEstates(parcels);
      if (parcels && parcels?.length <= showMoreCount) {
        setShowMoreBtn(false);
      }
    });
  }, [loginAddress]);

  const handleShowBtn = () => {
    setCount(count + showMoreCount);
    if (ownEstates && count >= ownEstates?.length) {
      setShowMoreBtn(false);
    }
  };

  const handleShowLessBtn = () => {
    setCount(showMoreCount);
    setShowMoreBtn(true);
    setShowLessBtn(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container_root}>
        <BackButton className={classes.backButton} />
        <div className={classes.bidCard}>
          <div className={classes.leftCard}>
            <div className={classes.imgContent}>
              <img
                src={TokenImg}
                className={classes.tokenImg}
                alt="token"
              ></img>
            </div>
          </div>
          <div className={classes.rightCard}>
            <div className={classes.title}>
              {t("Estate Relative Information")}
            </div>
            <div className={classes.form_field}>
              <div className={classes.price_container}>
                <Grid container>
                  <Grid md={6} sm={12} xs={12} item>
                    <div className={classes.subheader_label}>
                      {t("Operator")}:
                      <span className={classes.operatorValue}>123123</span>
                    </div>
                  </Grid>
                  <Grid md={6} sm={12} xs={12} item>
                    <div className={classes.subheader_label}>
                      {t("Estate Size")}:
                      <span className={classes.operatorValue}>123123</span>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
        <div className={classes.entireEstate}>
          <div className={classes.entireLabel}>{t("Entire Estate")}</div>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_sell`
                  )
                }
              >
                {t("Sell")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_transfer`
                  )
                }
              >
                {t("Transfer")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_updatemetadata`
                  )
                }
              >
                {t("Update Metadata")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>

            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/estate_updateoperate`
                  )
                }
              >
                {t("Update Operate")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
          </Grid>
        </div>
        <div className={classes.entireEstate}>
          <div className={classes.entireLabel}>{t("Partial Estate")}</div>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/transfer_spaces`
                  )
                }
              >
                {t("Transfer Spaces")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/set_spaceOperator`
                  )
                }
              >
                {t("Space Operator")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color="light"
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${estateid}/selectSpace_forUpdatelanddata`
                  )
                }
              >
                {t("Update LandData")}
                <CallMadeIcon fontSize="small" />
              </ActionButton>
            </Grid>
          </Grid>
        </div>
        <div className={classes.bidDetail}>
          <div className={classes.bidsTitle}>{t("Bids")}.</div>
          {ownEstates?.slice(0, count).map((row: any, index: any) => (
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
            }
          >
            <ShowMoreLessBtn letter={t("Show More")} onClick={handleShowBtn} />
          </div>
          <div
            className={
              showLessBtn === true
                ? classes.showmoreContent
                : classes.displayNone
            }
          >
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

export default EstateDetail;
