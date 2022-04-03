import { useTranslation } from "react-i18next";
import { useStyles } from "./CreateCollectionModalStyle";
import { useState, useEffect } from "react";
import { FormControl } from "@material-ui/core";
import { StyledInput } from "./../CreateSceneModal/CreateSceneModalStyle";
interface Props {
  show: boolean;
  onClose: () => void;
}
export default function CreateSceneModal({ show, onClose }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [showStatus, setShowStatus] = useState(show);
  const [name, setName] = useState("");
  const handleName = (e: any) => {
    setName(e.target.value);
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
          <div className={classes.title}>New Collection</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              Enter a descriptive name for your new collection
            </div>
            <div className={classes.name}>Name</div>
            <FormControl className={classes.widthFull}>
              <StyledInput
                placeholder={t("My Collection")}
                onChange={(e) => {
                  handleName(e);
                }}
              />
            </FormControl>
            <div className={classes.name}>
              The name can be 32 characters at most
            </div>
            <div className={classes.createBtnRoot}>
              <div className={classes.createBtnContainer}>Create</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
