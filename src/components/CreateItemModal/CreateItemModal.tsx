import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./CreateItemModalStyle";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  show: boolean;
}
export default function CreateSceneModal({ show }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showStatus, setShowStatus] = useState(show);
  const handleClose = () => {
    setShowStatus(false);
  };

  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <div className={classes.closeIcon} onClick={handleClose}>
            <i className="fas fa-times"></i>
          </div>
          <div className={classes.title}>New Item</div>
          {/* <div className={ classes.mainContainer}></div> */}
        </div>
      </div>
    </>
  );
}
