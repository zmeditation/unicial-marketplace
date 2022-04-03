import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./CreateItemModalStyle";
import clsx from "clsx";
import { useState, useEffect } from "react";
import PublishIcon from "@material-ui/icons/Publish";

interface Props {
  show: boolean;
  onClose: () => void;
}
export default function CreateSceneModal({ show, onClose }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showStatus, setShowStatus] = useState(show);
  const handleClose = () => {
    setShowStatus(false);
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
          <div className={classes.title}>New Item</div>
          <div className={classes.mainContainer}>
            <div className={classes.dragPartContainer}>
              <div className={classes.uploadImgContainer}>
                <PublishIcon className={classes.uploadIcon} />
              </div>
              <div className={classes.dragInfoContainer}>
                <div className={classes.normalLetter}>
                  Drag our Asset file here in &nbsp;
                  <span className={classes.colorLetter}>
                    ZIP, GLTF, GLB, ZIP, PNG
                  </span>
                  &nbsp; format, or
                </div>
                <div className={classes.browserContainer}>
                  <span className={classes.colorLetter}>
                    <input type="file" className={classes.fileInput} />
                    Browse your computer
                  </span>
                  <input type="file" value="chooee file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
