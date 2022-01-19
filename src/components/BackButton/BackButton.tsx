import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useStyles } from "./BackButtonStyle";
import clsx from "clsx";

interface BackButtonProps {
  className?: any;
}

export const BackButton = ({ className }: BackButtonProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <span
      className={clsx(classes.backBtn, className)}
      onClick={() => navigate(-1)}
    >
      <i className={clsx("fas fa-arrow-up", classes.revertIcon)}></i>
      Back
    </span>
  );
};
