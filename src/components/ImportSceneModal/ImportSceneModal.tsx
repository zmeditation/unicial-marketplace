/** @format */

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ActionButton from "../Base/ActionButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { createSceneStatus } from "../../store/createscene/selectors";
import { useStyles } from "./ImportSceneModalStyle";
import clsx from "clsx";
import { showCreateSceneModal } from "../../store/createscene";

export default function CreateSceneModal() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const show = useAppSelector(createSceneStatus);

  const handleClose = () => {
    dispatch(showCreateSceneModal(false));
  };

  return (
    <>
      <div className={show ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <div className={classes.closeIcon} onClick={handleClose}>
            <i className='fas fa-times'></i>
          </div>
          <div className={classes.title}>Import Scene</div>
          <div className={classes.description}>
            You can import any Scene made with the Builder!
          </div>
          <input type='file' className={classes.fileImport}></input>
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
