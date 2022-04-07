/** @format */

import { useAppDispatch } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./CreateItemModalStyle";
import clsx from "clsx";
import { useState, useEffect } from "react";
import uploadIcon from "./../../../src/assets/svg/upload.png";
import itemImg from "./../../../src/assets/img/photoItem.png";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import triangleIcon from "./../../../src/assets/svg/triangle.png";
import materialIcon from "./../../../src/assets/svg/material.png";
import textureIcon from "./../../../src/assets/svg/texture.png";
import GenderBtn from "./../Base/GenderBtn";
import { genderData } from "./../../../src/config/constant";
import FormControl from "@material-ui/core/FormControl";
import { StyledInput } from "./../../components/CreateSceneModal/CreateSceneModalStyle";
import InputBorderListDropdown from "./../../components/Base/InputBorderListDropdown/InputBorderListDropdown";
import { rareData, categoryData } from "./../../../src/config/constant";
import YellowBtn from "./../../components/Base/YellowBtn";
import RoundBackBtn from "../Base/RoundBackBtn";
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
  const [importData, setImportData] = useState<any>();
  const [name, setName] = useState("");

  const handleImportFile = (e: any) => {
    setImportData(e.target.files);
  };
  const handleClose = () => {
    setShowStatus(false);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setShowStatus(show);
  }, [show]);
  let status = 2;
  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        {status === 1 ? (
          <div className={classes.modalRoot}>
            <RoundBackBtn
              className={classes.closeIcon}
              onBack={onClose}
              type='multiply'
            />
            <div className={classes.title}>New Item</div>
            <div className={classes.mainContainer}>
              <div className={classes.dragPartContainer}>
                <div className={classes.uploadImgContainer}>
                  <img src={uploadIcon} className={classes.uploadIcon} />
                </div>
                <div className={classes.dragInfoContainer}>
                  <div className={classes.normalLetter}>
                    Drag our Asset file here in &nbsp;
                    <span className={classes.colorLetter}>
                      ZIP, GLTF, GLB, ZIP, PNG
                    </span>
                    &nbsp; format, or
                  </div>
                  <span
                    className={classes.importantFunctionLink}
                    onClick={() => {}}>
                    {t("Browse your computer")}.
                    <input
                      type='file'
                      className={classes.fileImport}
                      onChange={(e) => {
                        handleImportFile(e);
                      }}></input>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={classes.editModalRoot}>
              <RoundBackBtn
                className={classes.closeIcon}
                onBack={onClose}
                type='multiply'
              />
              <div className={classes.title}>New Item</div>
              <div className={classes.editMainContainer}>
                <div className={classes.photoInfoContainer}>
                  <div className={classes.photoContainer}>
                    <img src={itemImg} className={classes.photo} />
                    <PhotoCameraIcon className={classes.camera} />
                  </div>
                  <div className={classes.photoDetailInfoContainer}>
                    <div className={classes.triangleContainer}>
                      <img
                        src={triangleIcon}
                        className={classes.triangleicon}
                      />
                      <span>100 triangles</span>
                    </div>
                    <div className={classes.triangleContainer}>
                      <img
                        src={materialIcon}
                        className={classes.triangleicon}
                      />
                      <span>1 material</span>
                    </div>
                    <div className={classes.triangleContainer}>
                      <img src={textureIcon} className={classes.triangleicon} />
                      <span>1 texture</span>
                    </div>
                  </div>
                </div>
                <div className={classes.editFormContainer}>
                  <div className={classes.titleLetter}>
                    Select the body shape for your item
                  </div>
                  <div className={classes.genderContainer}>
                    <div className={classes.genderBtnContainer}>
                      <GenderBtn letter={genderData.both} />
                    </div>
                    <div className={classes.genderBtnContainer}>
                      <GenderBtn letter={genderData.male} />
                    </div>
                    <div className={classes.genderBtnContainer}>
                      <GenderBtn letter={genderData.female} />
                    </div>
                  </div>
                  <div className={classes.titleLetter}>
                    ENter a name for your item
                  </div>
                  <FormControl className={classes.nameInput}>
                    <StyledInput
                      placeholder={t("New scene")}
                      onChange={(e) => {
                        handleName(e);
                      }}
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    How rare is this item?
                  </div>
                  <InputBorderListDropdown
                    type='rarity'
                    data={rareData}
                    className={classes.inputSelectContainer}
                  />
                  <div className={classes.titleLetter}>
                    What is the category of this item?
                  </div>
                  <InputBorderListDropdown
                    type='category'
                    data={categoryData}
                    className={classes.inputSelectContainer}
                  />
                  <YellowBtn letter='Create' />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
