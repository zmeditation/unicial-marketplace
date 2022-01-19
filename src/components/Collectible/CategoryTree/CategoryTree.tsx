import { CategoryTreeStyle } from "./CategoryTreeStyle";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

export default function CategoryTree() {
  const classes = CategoryTreeStyle();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>Type</div>
        <TreeView className={classes.typeTreeRoot}>
          <TreeItem nodeId="1" label="Store"></TreeItem>
          <TreeItem nodeId="2" label="Listings"></TreeItem>
          {/* <div className={classes.title}>CATEGORYES</div>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="10" label="OSS" />
            <TreeItem nodeId="6" label="Material-UI">
              <TreeItem nodeId="7" label="src">
                <TreeItem nodeId="8" label="index.js" />
                <TreeItem nodeId="9" label="tree-view.js" />
              </TreeItem>
            </TreeItem>
          </TreeItem> */}
        </TreeView>
      </div>
    </>
  );
}
