import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FormControl from "@material-ui/core/FormControl";
import CallMadeIcon from "@material-ui/icons/CallMade";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ActionButton from "../../../../components/Base/ActionButton";
import TokenImg from "../../../../assets/img/1.png";
import NeedSignIn from "../../../NeedSignIn";
import { useStyles, StyledInput } from "./CreateEstateStyle";
import { BackButton } from "../../../../components/BackButton/BackButton";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { selectestates } from "../../../../store/selectedestates/selectors";
import {
  generateContractInstance,
  generateSigner,
} from "../../../../common/contract";
import {
  MarketplaceAddress,
  MarketplaceAbi,
} from "../../../../config/contracts/MarketPlaceContract";

import {
  SpaceProxyAddress,
  SpaceRegistryAbi,
} from "../../../../config/contracts/SpaceRegistryContract";
import { showAlert } from "../../../../store/alert";
import { selectLoginAddress } from "../../../../store/auth/selectors";
import { BigNumber } from "ethers";
import { createEstateWithMetaData } from "./../../../../../src/hooks/InteractLand";
declare var window: any;
var signer: any, marketplaceContract: any, spaceRegistryContract: any;

const CreateEstate = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const estates = useAppSelector(selectestates);
  const [beneficiary, setBeneficiary] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bid, setBid] = useState({
    xs: [],
    ys: [],
    beneficiary: "",
    metadata: "",
  });
  const customerAddress = useAppSelector(selectLoginAddress);

  var isSignIn = 1;
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
    if (customerAddress.length === 0) {
      dispatch(
        showAlert({
          message: "You have to connect Meta mask wallet.",
          severity: "error",
        })
      );
      navigate("/signin");
    }

    if (description === "") {
      dispatch(
        showAlert({
          message: "You have to write your estate description.",
          severity: "error",
        })
      );
    }

    if (name === "") {
      dispatch(
        showAlert({
          message: "You have to write your estate name.",
          severity: "error",
        })
      );
    }

    if (beneficiary === "") {
      dispatch(
        showAlert({
          message: "You have to write the beneficiary address.",
          severity: "error",
        })
      );
    }
    // signer = generateSigner(window.ethereum);
    // marketplaceContract = generateContractInstance(
    //   MarketplaceAddress,
    //   MarketplaceAbi,
    //   signer
    // );
    // spaceRegistryContract = generateContractInstance(
    //   SpaceProxyAddress,
    //   SpaceRegistryAbi,
    //   signer
    // );

    // let createEstateOrderTx = await spaceRegistryContract.createEstate(
    //   bid.xs,
    //   bid.ys,
    //   customerAddress
    // );

    // await createEstateOrderTx.wait();

    await createEstateWithMetaData(bid.xs, bid.ys, beneficiary, bid.metadata);
    dispatch(
      showAlert({
        message: "Create estate order is successfully published.",
        severity: "success",
      })
    );
  };

  const convertToBidData = () => {
    let xs: any = [],
      ys: any = [];

    estates.forEach((parcel: string) => {
      xs.push(parseInt(parcel.split(",")[0]));
      ys.push(parseInt(parcel.split(",")[1]));
    });

    let data = bid;
    data.xs = xs;
    data.ys = ys;
    data.beneficiary = beneficiary;
    data.metadata = name + "," + description;
    setBid(data);
  };
  console.log("bid##beneficiary", bid.xs);

  useEffect(() => {
    if (estates.length === 0) {
      navigate("/account/estate/create");
    }
    convertToBidData();
  });

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
                  onClick={() => navigate("/account/estate/create")}
                >
                  {t("CANCEL")}
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
