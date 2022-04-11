import { useTranslation } from "react-i18next";
import { useStyles } from "./DeleteModalStyle";
import { useState, useEffect } from "react";
import { FormControl } from "@material-ui/core";
import { StyledInput } from "./../CreateSceneModal/CreateSceneModalStyle";
import BorderBtn from "../Base/BorderBtn";
import YellowBtn from "../Base/YellowBtn";
interface Props {
  show: boolean;
  onClose: () => void;
}
export default function DeleteModal({ show, onClose }: Props) {
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
          {/* <div className={classes.closeIcon} onClick={onClose}>
            <i className="fas fa-times"></i>
          </div> */}
          <div className={classes.title}>Delete “OrionNFT”</div>
          <div className={classes.mainContainer}>
            <div className={classes.descContainer}>
              Are you sure you want to delete your collection "Bydefaultone"?
              This operation is not reversible
            </div>
          </div>
          <div className={classes.btnContainer}>
            <BorderBtn
              letter="Cancel"
              className={classes.cancelBtn}
              onClick={onClose}
            />
            <YellowBtn letter="Confirm" className={classes.confirmBtn} />
          </div>
        </div>
      </div>
    </>
  );
}
