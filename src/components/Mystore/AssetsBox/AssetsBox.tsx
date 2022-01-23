import React from "react";
import { AssetsBoxStyle } from "./AssetsBoxStyle";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../../Collectible/CollectibleSidebar/CollectibleSidebarStyle";
import { Typography } from "@material-ui/core";
import SidebarTree from "../../SidebarTree/SidebarTree";
import { WearablesData } from "../../../pages/Collectibles/SidebarData";
import { useTranslation } from "react-i18next";
import { LandsData } from "../../../pages/MyStore/SidebarData";
export default function AssetsBox() {
  const classes = AssetsBoxStyle();
  const { t, i18n} = useTranslation();
  //popover relate
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  //
  return (
    <>
      <div className={classes.categoryBox}>
        {/* <div className={classes.categoryTitle}>Categories</div> */}
        <div className={classes.categoryTitle}>{t("Assets")}</div>
        <div className={classes.accordionRoot}>
          {/*--- add collection ---*/}
          <StyledAccordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className={classes.firstAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className={classes.maintitle}>{t("Collections")}</Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
          {/* -- add land-- */}
          <StyledAccordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className={classes.firstAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography className={classes.maintitle}>{t("Lands")}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <SidebarTree data={LandsData} />
            </StyledAccordionDetails>
          </StyledAccordion>
          {/* --wearables tree--- */}
          <StyledAccordion
            square
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            className={classes.firstAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography className={classes.maintitle}>{t("Wearables")}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <SidebarTree data={WearablesData} />
            </StyledAccordionDetails>
          </StyledAccordion>
          {/* --Name--- */}
          <StyledAccordion
            square
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className={classes.firstAccordion}
          >
            <StyledAccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <Typography className={classes.maintitle}>{t("Names")}</Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
        </div>
        <div className={classes.divideline}></div>
      </div>
    </>
  );
}
