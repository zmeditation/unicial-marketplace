import React from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import ActionButton from "../Base/ActionButton";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontSize: "34px",
    fontWeight: 600,
    lineHeight: "42px",
    textAlign: "left",
    marginBottom: "15px",
  },
  smalltitle: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
    color: "#96A1DB",
    marginBottom: "30px",
  },
  buttonGroup: {
    display: "flex",
    marginTop: "15px",
    gridGap: "8px",
    gap: "8px",
  },
  jumpbtn: {
    minWidth: "75px !important",
  },
}));

interface titleProps {
  title?: string;
}

const Title = ({title}:titleProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div>
      <div className={classes.title}>{title}</div>
      <div className={classes.smalltitle}>{t("Unicial Genesis Plaza")}</div>
      <div className={classes.buttonGroup}>
        <ActionButton disabled color="dark">
          400 {t("LAND")}
        </ActionButton>
        {/* <div className={classes.jumpbtn}> */}
        <ActionButton color="light" className={classes.jumpbtn}>
          {t("JUMP IN")}
        </ActionButton>
      </div>
    </div>
  );
};

export default Title;
