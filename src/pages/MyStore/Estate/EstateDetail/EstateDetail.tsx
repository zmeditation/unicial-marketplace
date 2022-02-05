/** @format */

import { useNavigate } from "react-router";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useStyles } from "./EstateDetailStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";

const ParcelDetail = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { contractaddress, tokensid } = useParams();

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
                alt='token'></img>
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
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Transfer")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Update Metadata")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Update Marge")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Update Operate")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
            </Grid>
          </Grid>
        </div>
        <div className={classes.entireEstate}>
          <div className={classes.entireLabel}>{t("Partial Estate")}</div>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Transfer Spaces")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Update Operator")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <ActionButton
                color='light'
                className={classes.bidchange}
                onClick={() =>
                  navigate(
                    `/contracts/${contractaddress}/tokens/${tokensid}/sell`
                  )
                }>
                {t("Update LandData")}
                <CallMadeIcon fontSize='small' />
              </ActionButton>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ParcelDetail;
