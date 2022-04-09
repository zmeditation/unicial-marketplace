import { useAppDispatch } from "../../store/hooks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles } from "./CreateItemModalStyle";
import clsx from "clsx";
import { useState, useEffect } from "react";
import uploadIcon from "./../../../src/assets/svg/upload.png";
import itemImg from "./../../../src/assets/svg/photoItem.svg";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import triangleIcon from "./../../../src/assets/svg/triangle.png";
import materialIcon from "./../../../src/assets/svg/material.png";
import textureIcon from "./../../../src/assets/svg/texture.png";
import GenderBtn from "./../Base/GenderBtn";
import { genderData } from "./../../../src/config/constant";
import FormControl from "@material-ui/core/FormControl";
import { StyledInput } from "./../../components/CreateSceneModal/CreateSceneModalStyle";
import InputBorderListDropdown from "./../../components/Base/InputBorderListDropdown/InputBorderListDropdown";
import { rareData, categoryData } from "../../config/constant";
import YellowBtn from "./../../components/Base/YellowBtn";
import RoundBackBtn from "../Base/RoundBackBtn";
import { FileUploader } from "react-drag-drop-files";

interface Props {
  headerTitle: string;
  show: boolean;
  onClose: () => void;
}

export default function CreateSceneModal({
  headerTitle,
  show,
  onClose,
}: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showStatus, setShowStatus] = useState(show);
  const [image, setImage] = useState<any>();
  const [name, setName] = useState("");
  const [rarity, setRarity] = useState("");
  const [category, setCategory] = useState("");
  const fileTypes = ["ZIP", "PNG", "GLTF", "GLB"];

  const handleChange = (file: any) => {
    setImage(URL.createObjectURL(file[0]));
    setName(file[0].name.split(".")[0]);
  };

  const handleClose = () => {
    setShowStatus(false);
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const init = () => {
    setImage(null);
    setName("");
  };

  const handleImportFile = (e: any) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setName(e.target.files[0].name.split(".")[0]);
  };

  useEffect(() => {
    init();
    setShowStatus(show);
  }, [show]);

  return (
    <>
      <div className={showStatus ? classes.loaderWrapper : classes.displayNone}>
        {image === null ? (
          <div className={classes.modalRoot}>
            <RoundBackBtn
              className={classes.closeIcon}
              onBack={onClose}
              type="multiply"
            />
            <div className={classes.title}>{headerTitle}</div>
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            >
              <div className={classes.mainContainer}>
                <div className={classes.dragPartContainer}>
                  <div className={classes.uploadImgContainer}>
                    <img src={uploadIcon} className={classes.uploadIcon} />
                  </div>
                  <div className={classes.dragInfoContainer}>
                    <div className={classes.normalLetter}>
                      Drag our Asset file here in &nbsp;
                      <span className={classes.colorLetter}>
                        ZIP, GLTF, GLB, PNG
                      </span>
                      &nbsp; format, or
                    </div>
                    <span className={classes.importantFunctionLink}>
                      {t("Browse your computer")}.
                    </span>
                  </div>
                </div>
              </div>
            </FileUploader>
          </div>
        ) : (
          <>
            <div className={classes.editModalRoot}>
              <RoundBackBtn
                className={classes.closeIcon}
                onBack={onClose}
                type="multiply"
              />
              <div className={classes.title}>{headerTitle}</div>
              <div className={classes.editMainContainer}>
                <div className={classes.photoInfoContainer}>
                  <div className={classes.photoContainer}>
                    <img
                      src={!image ? itemImg : image}
                      className={classes.photo}
                    />
                    <span className={classes.camera}>
                      <input
                        type="file"
                        onChange={(e) => {
                          handleImportFile(e);
                        }}
                      />
                      <PhotoCameraIcon />
                    </span>
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
                      placeholder={t("New Scene")}
                      value={name === "" ? undefined : name}
                      onChange={(e) => {
                        handleName(e);
                      }}
                    />
                  </FormControl>
                  <div className={classes.titleLetter}>
                    How rare is this item?
                  </div>
                  <InputBorderListDropdown
                    type="rarity"
                    data={rareData}
                    handleChange={(value: any) => {
                      setRarity(value);
                    }}
                    className={classes.inputSelectContainer}
                  />
                  <div className={classes.titleLetter}>
                    What is the category of this item?
                  </div>
                  <InputBorderListDropdown
                    type="category"
                    data={categoryData}
                    className={classes.inputSelectContainer}
                    handleChange={(value: any) => {
                      setCategory(value);
                    }}
                  />
                  <YellowBtn letter="Create" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
