import React from "react";
import {
  CollectibleSidebarStyle,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "./CollectibleSidebarStyle";
import SidebarTree from "../../../components/SidebarTree/SidebarTree";
import { WearablesData } from "../../../pages/Collectibles/SidebarData";
import TypeBox from "../TypeBox/TypeBox";
import { Typography } from "@material-ui/core";
//popover relate

//
export default function CollectibleSidebar() {
  const classes = CollectibleSidebarStyle();
  //popover relate
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  //
  return (
    <>
      <div className={classes.root}>
        <TypeBox />
        <div className={classes.categoryBox}>
          <div className={classes.categoryTitle}>Categories</div>
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
