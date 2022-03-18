import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import { useStyles, StyledInput } from "./EditEstateStyles";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { selectestates } from "../../../../store/selectedestates/selectors";
import { showAlert } from "../../../../store/alert";
import { selectLoginAddress } from "../../../../store/auth/selectors";

const EditEstate = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const selectedSpace = useAppSelector(selectestates);
  const [beneficiary, setBeneficiary] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bid, setBid] = useState({
    xs: [],
    ys: [],
    beneficiary: "",
    metadata: "",
  });
  const loginAddress = useAppSelector(selectLoginAddress);

  const handleBeneficiaryChange = (e: any) => {
    setBeneficiary(e.target.value);
  };
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const handleSubmitBtn = async () => {
  };

  // const convertToBidData = () => {
  //   let xs: any = [],
  //     ys: any = [];

  //   estates.forEach((parcel: string) => {
  //     xs.push(parseInt(parcel.split(",")[0]));
  //     ys.push(parseInt(parcel.split(",")[1]));
  //   });

  //   let data = bid;
  //   data.xs = xs;
  //   data.ys = ys;
  //   data.beneficiary = beneficiary;
  //   data.metadata = name + "," + description;
  //   setBid(data);
  // };

  // useEffect(() => {
  //   if (estates.length === 0) {
  //     navigate("/account/estate/create");
  //   }
  //   convertToBidData();
  // });

  return (
    <div className={classes.root}>
        <div className={classes.container_root}>
          <BackButton className={classes.backButton} />

          <div className={classes.bidCard}>
            <div className={classes.leftCard}>
              <div className={classes.imgContent}>
                <img
                  src={TokenImg}
                  className={classes.tokenImg}
                  alt="token"
                ></img>
              </div>
            </div>
            <div className={classes.rightCard}>
              <div className={classes.title}>{t("Create Estate")}</div>
              <div className={classes.subtitle}>
                {t("Set a name and description for your estate")}
              </div>
              <div className={classes.form_field}>
                <div className={classes.price_container}>
                  {/* // */}
                  <div className={classes.subheader_label}>
                    {t("Beneficiary")}
                  </div>
                  <FormControl className={classes.widthFull}>
                    <StyledInput
                      placeholder={t("Beneficiary Address")}
                      onChange={(e) => handleBeneficiaryChange(e)}
                    />
                  </FormControl>
                  {/* // */}
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
                    aria-label="maximum height"
                    placeholder={t("This is an estate")}
                    onChange={(e) => handleDescriptionChange(e)}
                  />
                </div>
                <p>&nbsp;</p>
              </div>
              <div className={classes.buttons}>
                <ActionButton
                  color="light"
                  className={classes.bidchange}
                  onClick={handleSubmitBtn}
                >
                  {t("SUBMIT")}
                  <CallMadeIcon fontSize="small" />
                </ActionButton>
                <ActionButton
                  color="dark"
                  className={classes.cancelchange}
                  onClick={() => navigate("/account/estate/editestate")}
                >
                  {t("CANCEL")}
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default EditEstate;
