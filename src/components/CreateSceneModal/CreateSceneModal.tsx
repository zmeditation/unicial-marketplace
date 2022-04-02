import ActionButton from "../Base/ActionButton";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles, StyledInput } from "./CreateSceneModalStyle";
import clsx from "clsx";
import { useState } from "react";

interface CreateSceneModalProps {
  show: boolean;
  onClose: () => void;
}

export default function CreateSceneModal({ show, onClose }: CreateSceneModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

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
          <div className={classes.closeIcon} onClick={onClose}>
            <i className='fas fa-times'></i>
          </div>
          <div className={classes.title}>{t("Create a Scene")}</div>
          <div className={classes.description}>
            {t("Set a name and description for your scene")}
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
