import React, { useEffect } from "react";
import { WearablesData, LandData } from "./../../CategoryWearables/SidebarData";
import { AssetsBoxStyle } from "./AssetsBoxStyle";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../../Collectible/CollectibleSidebar/CollectibleSidebarStyle";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import CategoryWearables from "../../CategoryWearables/CategoryWearables";
import { category } from "../../../config/constant";

import { LandsData } from "../../../pages/MyStore/SidebarData";
import clsx from "clsx";
import { Link, useNavigate, useLocation } from "react-router-dom";
export default function AssetsBox() {
  const classes = AssetsBoxStyle();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState<string | false>();
  // category.wearable
  const [activeCategory, setActiveCategory] = React.useState<string | false>(
    category.collections
  );
  const query = new URLSearchParams(location.search);

  const handleRoute = (search: string) => {
    query.set("section", search);
    navigate({
      pathname: location.pathname,
      search: query.toString(),
    });
  };

  useEffect(() => {
    if (query.get("section") === category.collections) {
      setActiveCategory(category.collections);
    } else if (query.get("section") === category.land) {
      setExpanded(category.land);
      setActiveCategory(category.land);
    } else if (query.get("section") === category.name) {
      setExpanded(category.name);
      setActiveCategory(category.name);
    } else if (query.get("section") === category.wearable) {
      setActiveCategory(category.wearable);
      setExpanded(category.wearable);
    } else {
      // setExpanded(category.wearable);
      setActiveCategory("");
    }
  }, [location]);

  return (
    <>
      <div className={classes.categoryBox}>
        {/* <div className={classes.categoryTitle}>Categories</div> */}
        <div className={classes.categoryTitle}>{t("Assets")}</div>
        <div className={classes.accordionRoot}>
          <StyledAccordion
            square
            expanded={expanded === category.collections}
            onChange={() => handleRoute(category.collections)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.collections,
            })}
          >
            <StyledAccordionSummary
              aria-controls="panelCollections"
              id="panelCollections"
            >
              <Typography className={classes.maintitle}>
                {t("Collections")}
              </Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
          {/* /// */}
          <StyledAccordion
            square
            expanded={expanded === category.land}
            onChange={() => handleRoute(category.land)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.land,
            })}
          >
            <StyledAccordionSummary aria-controls="panelLand" id="panel1Land">
              <Typography className={classes.maintitle}>{t("Land")}</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <CategoryWearables data={LandData} />
            </StyledAccordionDetails>
          </StyledAccordion>
          {/* /// */}
          <StyledAccordion
            square
            expanded={expanded === category.wearable}
            onChange={() => handleRoute(category.wearable)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.wearable,
            })}
          >
            <StyledAccordionSummary
              aria-controls="panelWearables"
              id="panelWearables"
            >
              <Typography className={classes.maintitle}>
                {t("Wearables")}
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <CategoryWearables data={WearablesData} />
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            square
            expanded={expanded === category.name}
            onChange={() => handleRoute(category.name)}
            className={clsx(classes.firstAccordion, {
              [classes.active]: activeCategory === category.name,
            })}
          >
            <StyledAccordionSummary aria-controls="panelName" id="panelName">
              <Typography className={classes.maintitle}>
                {t("Names")}
              </Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
        </div>
        <div className={classes.divideline}></div>
      </div>
    </>
  );
}
