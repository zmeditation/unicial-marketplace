import React from "react";
import ActionButton from "../../../../components/Base/ActionButton";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  LandAccordionStyle,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
} from "./LandAccordionStyle";

export default function LandAccordion() {
  const classes = LandAccordionStyle();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.accordionRoot}>
          <StyledAccordion
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <StyledAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography className={classes.title}>
                Select AreaLands
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <div className={classes.areaLandDetailRoot}>
                <div className={classes.cards}>
                  <div className={classes.card}>
                    <div>
                      <FormControl>
                        <Input
                          placeholder="1000"
                          id="input-with-icon-adornment"
                          startAdornment={
                            <InputAdornment position="start">
                              <i className={classes.axisLabel}>X1</i>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <Input
                          placeholder="1000"
                          id="input-with-icon-adornment"
                          startAdornment={
                            <InputAdornment position="start">
                              <i className={classes.axisLabel}>Y1</i>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.card}>
                    <div>
                      <FormControl>
                        <Input
                          placeholder="1000"
                          id="input-with-icon-adornment"
                          startAdornment={
                            <InputAdornment position="start">
                              <i className={classes.axisLabel}>X2</i>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <Input
                          placeholder="1000"
                          id="input-with-icon-adornment"
                          startAdornment={
                            <InputAdornment position="start">
                              <i className={classes.axisLabel}>Y2</i>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className={classes.selectedLandContainer}>
                  {/* selected lands */}
                  <div className={classes.selectedLandLabelContainer}>
                    <div className={classes.selectedLandLabel}>
                      Selected Lands:
                    </div>
                    <div className={classes.selectedLandResult}>9000000</div>
                  </div>

                  {/* buttons */}
                  <div className={classes.buttons}>
                    <ActionButton color="red" className={classes.btnchange}>
                      Show Map
                    </ActionButton>
                    <ActionButton color="dark" className={classes.btnchange}>
                      Assign
                    </ActionButton>
                  </div>
                </div>
              </div>
            </StyledAccordionDetails>
          </StyledAccordion>

          <StyledAccordion
            square
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <StyledAccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography className={classes.title}>
                Select Multiple Lands
              </Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <div className={classes.areaLandDetailRoot}>
                <div className={classes.testinput}>
                  <FormControl>
                    <Input
                      placeholder="1000"
                      id="input-with-icon-adornment"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <div className={classes.selectedLandContainer}>
                  {/* selected lands */}
                  <div className={classes.selectedLandLabelContainer}>
                    <div className={classes.selectedLandLabel}>
                      Selected Lands:
                    </div>
                    <div className={classes.selectedLandResult}>9000000</div>
                  </div>

                  {/* buttons */}
                  <div className={classes.buttons}>
                    <ActionButton color="red" className={classes.btnchange}>
                      Show Map
                    </ActionButton>
                    <ActionButton color="dark" className={classes.btnchange}>
                      Assign
                    </ActionButton>
                  </div>
                </div>
              </div>
            </StyledAccordionDetails>
          </StyledAccordion>
        </div>
      </div>
    </>
  );
}
