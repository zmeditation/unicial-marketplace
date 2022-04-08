import PropertyLayerSetting from "../Base/PropertyLayerSetting/PropertyLayerSetting";
import { PropertySideBarStyle } from "./PropertySideBarStyle";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import photoItem from "../../assets/svg/photoItem.svg";
import triangleIcon from "../../assets/svg/triangle.png";
import materialIcon from "../../assets/svg/material.png";
import textureIcon from "../../assets/svg/texture.png";

export default function PropertySideBar() {
  const classes = PropertySideBarStyle();
  return (
    <>
      <div className={classes.myItemsBlock}>
        <div className={classes.propertyNavbar}>
          <span className={classes.NavbarTitle}>Properties</span>
        </div>
        <div className={classes.layersRoot}>
          <PropertyLayerSetting title='Details'>
            <div className={classes.photoInfoContainer}>
              <div className={classes.photoUppart}>
                <div className={classes.photoContainer}>
                  <img
                    src={photoItem}
                    className={classes.photo}
                    alt='photoItem'
                  />
                  <PhotoCameraIcon className={classes.camera} />
                </div>
                <div className={classes.photoDetailInfoContainer}>
                  <div className={classes.triangleContainer}>
                    <img src={triangleIcon} className={classes.triangleicon} />
                    <span>100 triangles</span>
                  </div>
                  <div className={classes.triangleContainer}>
                    <img src={materialIcon} className={classes.triangleicon} />
                    <span>1 material</span>
                  </div>
                  <div className={classes.triangleContainer}>
                    <img src={textureIcon} className={classes.triangleicon} />
                    <span>1 texture</span>
                  </div>
                </div>
              </div>
              <div className={classes.functionIconRoot}>
                <div className={classes.downLoadIcon}>
                  <i className='fas fa-arrow-to-bottom'></i>
                </div>
                <div className={classes.downLoadIcon}>
                  <i className='fas fa-pen'></i>
                </div>
              </div>
            </div>
          </PropertyLayerSetting>
        </div>
      </div>
    </>
  );
}
