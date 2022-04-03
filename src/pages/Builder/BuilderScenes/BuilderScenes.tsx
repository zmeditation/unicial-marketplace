import { useState } from "react";
import { useTranslation } from "react-i18next";
import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import CreateSceneModal from "../../../components/CreateSceneModal/CreateSceneModal";
import ImportSceneModal from "../../../components/ImportSceneModal/ImportSceneModal";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./BuilderScenesStyles";

export default function BuilderScenes() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [showImportModal, setShowImportModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleImportModal = () => {
    setShowImportModal(true);
  };

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 {t("RESULTS")}</div>
          <div className={classes.functionBtn}>
            <div className={classes.functionIcon} onClick={handleImportModal}>
              <i className='far fa-arrow-from-bottom'></i>
            </div>
            <div className={classes.functionIcon} onClick={handleCreateModal}>
              <i className='far fa-plus'></i>
            </div>
          </div>
        </div>
        <div className={classes.createContent}>
          <span className={classes.contentLetter}>
            {t("It looks like that you don't have any Scenes")}.
            <br />
            <span className={classes.importantLink}>
              {t("Click here")}
            </span>{" "}
            {t("to get Started")}.
          </span>
        </div>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>{t("FROM THE SCENE POOL")}</div>
          <div className={classes.functionBtn}>
            <div className={classes.viewLetter}>{t("VIEW MORE")}</div>
            <div className={classes.viewArrow}>
              <i className='far fa-angle-right'></i>
            </div>
          </div>
        </div>
        <div className={classes.sceneContent}>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>{t("Name")}</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
        </div>
      </div>
      <ImportSceneModal show={showImportModal} />
      <CreateSceneModal show={showCreateModal} />
    </>
  );
}
