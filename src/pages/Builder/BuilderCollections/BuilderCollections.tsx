import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import { showCreateSceneModal } from "../../../store/createscene";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./BuilderCollectionsStyle";

export default function BuilderCollections() {
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
            <div className={classes.functionIcon} onClick={handleCreateModal}>
              <i className="far fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
