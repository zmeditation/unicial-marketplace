import React from "react";
import { CategoryBoxStyle } from "./CategoryBoxStyle";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "../../Collectible/CollectibleSidebar/CollectibleSidebarStyle";
import { Typography } from "@material-ui/core";
import SidebarTree from "../../SidebarTree/SidebarTree";
import { WearablesData } from "../../../pages/Collectibles/SidebarData";
export default function CategoryBox() {
  const classes = CategoryBoxStyle();
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
        <div className={classes.categoryTitle}>Categories</div>
        <div className={classes.accordionRoot}>
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
              <Typography className={classes.maintitle}>Wearables</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <SidebarTree data={WearablesData} />
            </StyledAccordionDetails>
          </StyledAccordion>
          {/* // */}
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
              <Typography className={classes.maintitle}>Names</Typography>
            </StyledAccordionSummary>
          </StyledAccordion>
        </div>
      </div>
    </>
  );
}
