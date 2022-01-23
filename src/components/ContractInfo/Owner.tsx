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
}));

interface DescriptionProps {}

const Owner: React.FC = () => {
  const classes = useStyles();
  const {t,i18n} = useTranslation();
  return (
    <div>
      <div className={classes.title}>{t("Owner")}</div>
      <div className={classes.descript}>
        <div className={classes.avatarContainer}>
          <img
            src={makeBlockie("0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d")}
            className={classes.addressImg}
            alt="A"
          />
        </div>

        <div className={classes.name}>0x4eac</div>
      </div>
    </div>
  );
};

export default Owner;
