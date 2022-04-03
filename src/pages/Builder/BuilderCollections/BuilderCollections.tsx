import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import CreateCard from "../../../components/Base/CreateCard";
import { useAppDispatch } from "../../../store/hooks";
import { useStyles } from "./BuilderCollectionsStyle";
import clsx from "clsx";
import { createCardletterData } from "../../../config/constant";
import CreateItemModal from "../../../components/CreateItemModal/CreateItemModal";
import { useState } from "react";

export default function BuilderCollections() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [createItemStatus, setCreateItemStatus] = useState(false);
  const [createCollectionStatus, setCreateCollectionStatus] = useState(false);

  const handlecreateItem = () => {
    setCreateItemStatus(true);
  };
  const handlecreateCollection = () => {
    setCreateCollectionStatus(true);
  };

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 RESULTS</div>
          <div className={classes.functionBtn}>
            <div className={classes.functionIcon}>
              <i className="far fa-plus"></i>
            </div>
            <div className={classes.openEditorRoot}>
              <div className={classes.openEditorContainer}>OPEN EDITOR</div>
            </div>
          </div>
        </div>
        <div className={classes.noItemsRoot}>
          <div className={classes.noItmesContainer}>
            <div className={classes.noItemsInfoContainer}>
              <div className={classes.noItemsTitle}>No items</div>
              <div className={classes.noItemsDesc}>
                You have no Items or Collections yet. Create a new item or
                collection, and dress the metaverse in style!
              </div>
            </div>
            <div className={classes.CardsContainer}>
              <div className={clsx(classes.CardContainer, classes.MarginRight)}>
                <CreateCard
                  letter={createCardletterData.new_item}
                  onClick={handlecreateItem}
                />
              </div>
              <div className={classes.CardContainer}>
                <CreateCard
                  letter={createCardletterData.new_collection}
                  onClick={handlecreateCollection}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateItemModal show={createItemStatus} />
    </>
  );
}
