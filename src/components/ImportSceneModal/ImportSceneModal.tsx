import ActionButton from "../Base/ActionButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./ImportSceneModalStyle";
import clsx from "clsx";
import { useState } from "react";

interface ImportSceneModalProps {
  show: boolean;
}

export default function ImportSceneModal({ show }: ImportSceneModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [onShow, setOnShow] = useState(show);

  const handleClose = () => {
    setOnShow(false);
  };

  return (
    <>
      <div className={onShow ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <div className={classes.closeIcon} onClick={handleClose}>
            <i className='fas fa-times'></i>
          </div>
          <div className={classes.title}>Import Scene</div>
          <div className={classes.description}>
            You can import any Scene made with the Builder!
          </div>
          <div className={classes.importContent}>
            <input type='file' className={classes.fileImport}></input>
          </div>
          <div className={classes.btnRoot}>
            <ActionButton
              color='dark'
              className={classes.nextBtn}
              onClick={() => {}}>
              {t("Cancel")}
            </ActionButton>
            <ActionButton
              color='light'
              className={clsx(classes.nextBtn, classes.marginLeft)}
              onClick={() => {}}>
              {t("Next")}
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
