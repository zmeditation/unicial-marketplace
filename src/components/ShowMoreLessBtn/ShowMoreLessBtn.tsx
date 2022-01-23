import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { useStyles } from "./ShowMoreLessBtnStyle";
import clsx from "clsx";

interface Props {
  className?: any;
}

export const ShowMoreLessBtn = ({ className }: Props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <span
      className={clsx(classes.backBtn, className)}
      onClick={() => navigate(-1)}
    >
      <i className={clsx("fas fa-arrow-up", classes.revertIcon)}></i>
      Show Less
    </span>
  );
};
