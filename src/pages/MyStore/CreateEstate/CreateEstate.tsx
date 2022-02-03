/** @format */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ActionButton from "../../../components/Base/ActionButton";
import TokenImg from "../../../assets/img/1.png";
import NeedSignIn from "../../../components/NoSign/NeedSignIn";
import { useStyles, StyledInput } from "./CreateEstateStyle";
import { BackButton } from "../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../store/hooks";
import { selectestates } from "../../../store/selectedestates/selectors";

const CreateEstate = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const estates = useAppSelector(selectestates);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  var isSignIn = 1;

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmitBtn = () => {};

  return (
    <div className={classes.root}>
      {isSignIn === 1 ? (
        <div className={classes.container_root}>
          <BackButton className={classes.backButton} />

          <div className={classes.bidCard}>
            <div className={classes.leftCard}>
              <div className={classes.imgContent}>
                <img
                  src={TokenImg}
                  className={classes.tokenImg}
                  alt='token'></img>
              </div>
            </div>
            <div className={classes.rightCard}>
              <div className={classes.title}>{t("Create Estate")}</div>
              <div className={classes.subtitle}>
                {t("Set a name and description for your estate")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  <div className={classes.subheader_label}>{t("Name")}</div>
                  <FormControl className={classes.widthFull}>
                    <StyledInput
                      placeholder={t("Decentraland")}
                      onChange={(e) => handleNameChange(e)}
                    />
                  </FormControl>
                  <div className={classes.subheader_label}>
                    {t("Description")}
                  </div>
                  <TextareaAutosize
                    className={classes.descriptionTextField}
                    aria-label='maximum height'
                    placeholder={t("This is an estate")}
                    onChange={(e) => handleDescriptionChange(e)}
                  />
                </div>
                <p>&nbsp;</p>
              </div>
              <div className={classes.buttons}>
                <ActionButton
                  color='dark'
                  className={classes.cancelchange}
                  onClick={() => navigate("/account/estate/create")}>
                  {t("CANCEL")}
                </ActionButton>
                <ActionButton
                  color='light'
                  className={classes.bidchange}
                  onClick={handleSubmitBtn}>
                  {t("SUBMIT")}
                  <CallMadeIcon fontSize='small' />
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NeedSignIn />
      )}
    </div>
  );
};

export default CreateEstate;
