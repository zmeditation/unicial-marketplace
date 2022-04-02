import ActionButton from "../Base/ActionButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./ImportSceneModalStyle";
import clsx from "clsx";

interface ImportSceneModalProps {
  show: boolean;
  onClose: () => void;
}

export default function ImportSceneModal({ show, onClose }: ImportSceneModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();


  return (
    <>
      <div className={show ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <div className={classes.closeIcon} onClick={onClose}>
            <i className='fas fa-times'></i>
          </div>
          <div className={classes.title}>{t("Import Scene")}</div>
          <div className={classes.description}>
            {t("You can import any Scene made with the Builder")}!
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
