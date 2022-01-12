import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
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
      <ArrowBackIosIcon className={classes.backIcon} />
    </span>
  );
};
