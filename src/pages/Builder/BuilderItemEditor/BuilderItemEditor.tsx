import { BuilderItemEditorStyle } from "./BuilderItemEditorStyle";
import MyItemSideBar from "../../../components/MyItemSideBar/MyItemSideBar";
import PropertySideBar from "../../../components/PropertySideBar/PropertySideBar";
import blackManImg from "../../../assets/img/blackMan.png";
export default function BuilderItemEditor() {
  const classes = BuilderItemEditorStyle();
  return (
    <>
      <div className={classes.root}>
        <MyItemSideBar />
        <div className={classes.charactorContainer}>
          <img src={blackManImg} className={classes.blackman} />
        </div>
        <PropertySideBar />
      </div>
    </>
  );
}
