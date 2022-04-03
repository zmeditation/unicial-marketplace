import BuilderTopTab from "../../../components/BuilderTopTab/BuilderTopTab";
import CreateCard from "../../../components/Base/CreateCard";
import {
  useStyles,
  StyledCollectionPopover,
  StyledMenuItem,
} from "./BuilderCollectionsStyle";
import clsx from "clsx";
import {
  createCardletterData,
  collectionsPlusData,
} from "../../../config/constant";
import CreateItemModal from "../../../components/CreateItemModal/CreateItemModal";
import CreateCollectionModal from "../../../components/CreateCollectionModal/CreateCollectionModal";
import { useState } from "react";
import React from "react";
import { Box } from "@material-ui/core";

export default function BuilderCollections() {
  const classes = useStyles();
  //
  const [anchorNetwork, setAnchorNetwork] = React.useState<null | HTMLElement>(
    null
  );
  const [itemContent, setitemContent] = React.useState(
    collectionsPlusData[0].content
  );
  //
  const [createItemStatus, setCreateItemStatus] = useState(false);
  const [createCollectionStatus, setCreateCollectionStatus] = useState(false);

  const handlecreateItem = () => {
    setCreateItemStatus(true);
  };
  const handleCreateItemClose = () => {
    setCreateItemStatus(false);
  };
  //
  const handlecreateCollection = () => {
    setCreateCollectionStatus(true);
  };
  const handleCreateCollectionClose = () => {
    setCreateCollectionStatus(false);
  };
  //plus icon relate start
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorNetwork(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorNetwork(null);
  };
  const handleItem = (index: number) => {
    setitemContent(collectionsPlusData[index - 1].content);
    if (index === 1) {
      handlecreateItem();
    } else {
      handlecreateCollection();
    }
    handleClose();
  };
  //plus icon relate end

  return (
    <>
      <BuilderTopTab />
      <div className={classes.root}>
        <div className={classes.createBtns}>
          <div className={classes.resultStatus}>0 RESULTS</div>
          <div className={classes.functionBtn}>
            <div aria-controls="simple-menu" aria-haspopup="true">
              <Box className={classes.functionIcon} onClick={handleOpen}>
                <i className="far fa-plus"></i>
              </Box>
              <StyledCollectionPopover
                id="simple-menu"
                anchorEl={anchorNetwork}
                keepMounted
                open={Boolean(anchorNetwork)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {collectionsPlusData.map((item: any, index: any) => (
                  <StyledMenuItem
                    onClick={() => handleItem(item.index)}
                    key={index}
                  >
                    <Box className={classes.listContainer}>
                      <Box className={clsx(classes.listLabel)}>
                        {item.content}
                      </Box>
                    </Box>
                  </StyledMenuItem>
                ))}
              </StyledCollectionPopover>
            </div>

            <div className={classes.openEditorRoot}>
              <div className={classes.openEditorContainer}>Open Editor</div>
            </div>
          </div>
        </div>
        <div className={classes.noItemsRoot}>
          <div className={classes.noItemsContainer}>
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
      <CreateItemModal
        show={createItemStatus}
        onClose={handleCreateItemClose}
      />
      <CreateCollectionModal
        show={createCollectionStatus}
        onClose={handleCreateCollectionClose}
      />
    </>
  );
}
