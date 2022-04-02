import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ActionButton from "../Base/ActionButton";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { createSceneStatus } from "../../store/createscene/selectors";
import { useStyles, StyledInput } from "./CreateSceneModalStyle";
import clsx from "clsx";
import { showCreateSceneModal } from "../../store/createscene";
import { useState } from "react";

export default function CreateSceneModal() {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const show = useAppSelector(createSceneStatus);
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

  const handleClose = () => {
    dispatch(showCreateSceneModal(false));
  };

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleDes = (e: any) => {
    setDes(e.target.value);
  };

  return (
    <>
      <div className={show ? classes.loaderWrapper : classes.displayNone}>
        <div className={classes.modalRoot}>
          <div className={classes.closeIcon} onClick={handleClose}>
            <i className='fas fa-times'></i>
          </div>
          <div className={classes.title}>Create a Scene</div>
          <div className={classes.description}>
            Set a name and description for your scene
          </div>

          <div className={classes.form_field}>
            <div className={classes.subheader_label}>{t("NAME")}</div>
            <FormControl className={classes.widthFull}>
              <StyledInput
                placeholder={t("New scene")}
                onChange={(e) => {
                  handleName(e);
                }}
              />
            </FormControl>
            <div className={classes.subheader_label}>{t("DESCRIPTION")}</div>
            <TextareaAutosize
              className={classes.descriptionTextField}
              aria-label='maximum height'
              placeholder={t("Some description ...")}
              onChange={(e) => {
                handleDes(e);
              }}
            />
          </div>
          <div className={classes.btnRoot}>
            <ActionButton
              color='dark'
              className={classes.nextBtn}
              onClick={() => {}}>
              {t("Cancel")}
            </ActionButton>
            <ActionButton
              color='light'
              className={clsx(classes.nextBtn, classes.marginLeft)}
              onClick={() => {}}>
              {t("Next")}
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
