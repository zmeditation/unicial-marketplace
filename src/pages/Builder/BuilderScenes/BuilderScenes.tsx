import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import { showCreateSceneModal } from "../../../store/createscene";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./BuilderScenesStyles";

export default function BuilderScenes() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleCreateModal = () => {
    console.log("clicked");
    dispatch(showCreateSceneModal(true));
  };

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 RESULTS</div>
          <div className={classes.functionBtn}>
            <div className={classes.functionIcon}>
              <i className="far fa-arrow-from-bottom"></i>
            </div>
            <div className={classes.functionIcon} onClick={handleCreateModal}>
              <i className="far fa-plus"></i>
            </div>
          </div>
        </div>
        <div className={classes.createContent}>
          <span className={classes.contentLetter}>
            It looks like that you don't have any Scenes.
            <br />
            <span className={classes.importantLink}>Click here</span> to get
            Started.
          </span>
        </div>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>FROM THE SCENE POOL</div>
          <div className={classes.functionBtn}>
            <div className={classes.viewLetter}>VIEW MORE</div>
            <div className={classes.viewArrow}>
              <i className="far fa-angle-right"></i>
            </div>
          </div>
        </div>
        <div className={classes.sceneContent}>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
          <div className={classes.sceneCardRoot}>
            <div className={classes.sceneName}>Name</div>
            <div className={classes.sceneSize}>32x32m</div>
          </div>
        </div>
      </div>
    </>
  );
}
