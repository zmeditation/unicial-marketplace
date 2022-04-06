import ActionButton from "../Base/ActionButton";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { useStyles, StyledInput } from "./CreateSceneModalStyle";
import { useState } from "react";

interface CreateSceneModalProps {
  show: boolean;
  onClose: () => void;
  onCreate: (e: any) => void;
}

export default function CreateSceneModal({
  show,
  onClose,
  onCreate,
}: CreateSceneModalProps) {
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

  const handleCreate = () => {
    let param = {
      name: name,
      des: des,
    };
    onCreate(param);
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
              color='light'
              className={classes.nextBtn}
              onClick={handleCreate}>
              {t("Create")}
            </ActionButton>
          </div>
        </div>
      </div>
    </>
  );
}
