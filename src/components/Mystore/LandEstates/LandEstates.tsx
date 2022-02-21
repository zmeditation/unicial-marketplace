import { useEffect, useState } from "react";
import { LandEstatesStyle } from "./LandEstatesStyle";
import { Grid } from "@material-ui/core";
import LandCard from "../LandCard/LandCard";
import ActionButton from "../../../components/Base/ActionButton";
import { getEstatesByOwner } from "../../../hooks/api";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { EstateProxyAddress } from "../../../config/contracts/EstateRegitryContract";
// import utility functions
import {
  generateContractInstance,
  generateSigner,
} from "../../../common/contract";
import { SetStateAction } from "react";

declare var window: any;
var signer: any, estateRegistryContract: any;

signer = generateSigner(window.ethereum);

export default function LandEstates() {
  const classes = LandEstatesStyle();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const emptyTokens: any[] = [];
  const [ownEstates, setOwnEstates] = useState(emptyTokens);

  const handleCreateClick = () => {
    navigate("/account/estate/create");
  };

  const handleNavigate = (tokenId: string) => {
    navigate(
      `/contracts/0xCf7c8979AFF022Aa478ee4D7BA538cd01FDB7DC0/tokens/${tokenId}/estate_detail`
    );
  };

  useEffect(() => {
    getEstatesByOwner("0x8734CB972d36a740Cc983d5515e160C373A4a016").then(
      (estates: any[]) => {
        console.log("Estates", estates);
        console.log("Estates length", estates.length);
        console.log("Estates 0", estates[0]);
        setOwnEstates(estates);
      }
    );
  }, []);

  return (
    <>
      <div className={classes.createBtnContainer}>
        <ActionButton
          color="light"
          className={classes.createBtn}
          onClick={handleCreateClick}
        >
          {t("Create Estates")}
        </ActionButton>
      </div>
      <Grid container spacing={2}>
        {ownEstates?.map((tokenId: any, key: any) => {
          return (
            <Grid key={key} item xs={12} sm={6} md={4}>
              <LandCard
                locationbtnX={23}
                locationbtnY={12}
                landName="Plaza Area Sale"
                category="Zilionixx"
                onClick={() => handleNavigate(tokenId)}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
