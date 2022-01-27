import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useStyles } from "./ShowMoreLessBtnStyle";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface Props {
  className?: any;
}

export const ShowMoreLessBtn = ({ className }: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <span className={clsx(classes.backBtn, className)}>
      <i className={clsx("fas fa-arrow-up", classes.revertIcon)}></i>
      {t("Show Less")}
    </span>
  );
};
