import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import makeBlockie from "ethereum-blockies-base64";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  title: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "14.4px",
    textTransform: "uppercase",
    marginBottom: "21px",
    color: "#96A1DB",
    opacity: "50%",
  },
  descript: {
    display: "flex",
  },
  name: {
    marginLeft: "15px",
    fontSize: "16px",
    lineHeight: "19.2px",
    fontWeight: 400,
    alignSelf: "center",
  },
  avatarContainer: {
    width: "44px",
    height: "44px",
    backgroundColor: "white",
    borderRadius: "100%",
    cursor: "pointer",
  },
  addressImg: {
    width: "100%",
    height: "100%",
  },
  displayNone: {
    display: "none",
  },
}));

interface OwnerProps {
  ownerAddress: any;
}

const Owner = ({ ownerAddress }: OwnerProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className={classes.title}>{t("Owner")}</div>
        <div className={classes.descript}>
          <div className={classes.avatarContainer}>
            <img
              src={makeBlockie(ownerAddress)}
              className={classes.addressImg}
              alt='A'
            />
          </div>

          <div className={classes.name}>{ownerAddress}</div>
        </div>
      </div>
    </>
  );
};

export default Owner;
