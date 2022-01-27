import { LandEstatesStyle } from "./LandEstatesStyle";
import LandMap from "./../../../components/Admin/LandMap";
import ActionButton from "../../Base/ActionButton";
import raiseicon from "../../../assets/svg/bid_raiseicon.svg";
import { t } from "i18next";
export default function LandEstates() {
  const classes = LandEstatesStyle();
  return (
    <>
      <div className={classes.root}>
        <LandMap height={400} initialX={1} initialY={1} />
        {/* buttons */}
        <div className={classes.buttons}>
          <ActionButton color="dark" className={classes.cancelchange}>
            {t("Cancel")}
          </ActionButton>
          <ActionButton color="light" className={classes.bidchange}>
            {t("Bid")} &nbsp;
            <img src={raiseicon} />
          </ActionButton>
        </div>
      </div>
    </>
  );
}
