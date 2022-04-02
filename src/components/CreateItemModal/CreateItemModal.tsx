import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./CreateItemModalStyle";
import clsx from "clsx";
import { useState, useEffect } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}
export default function CreateSceneModal({ show, onClose }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showStatus, setShowStatus] = useState(show);
  const handleClose = () => {
    setShowStatus(false);
  };

  useEffect(() => {
    setShowStatus(show);
  }, [show]);

  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <div className={classes.closeIcon} onClick={onClose}>
            <i className="fas fa-times"></i>
          </div>
          <div className={classes.title}>New Item</div>
          <div className={classes.mainContainer}></div>
        </div>
      </div>
    </>
  );
}
