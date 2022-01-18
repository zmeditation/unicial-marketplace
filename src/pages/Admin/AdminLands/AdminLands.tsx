import React, { useState, useEffect } from "react";
import AdminTopTab from "../../../components/Admin/AdminTopTab/AdminTopTab";
import LandAccordion from "./LandAccordion/LandAccordion";
import LandMap from "../../../components/Admin/LandMap";
import { BackButton } from "../../../components/BackButton/BackButton";
import { AdminLandsStyle } from "./AdminLandsStyle";
export default function AdminLands() {
  const classes = AdminLandsStyle();
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setWidth(945);
    } else if (window.innerWidth <= 1200 && window.innerWidth > 992) {
      setWidth(820);
    } else if (window.innerWidth <= 992 && window.innerWidth > 770) {
      setWidth(600);
    } else if (window.innerWidth <= 770 && window.innerWidth >= 500) {
      setWidth(420);
    } else {
      setWidth(300);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
      <AdminTopTab />
      <div className={classes.root}>
        <BackButton className={classes.backBtnPosition} />
        <div className={classes.LandMap}>
          <div className={classes.LandMapContent}>
            <LandMap height={400} width={width} initialX={1} initialY={1} />
          </div>
          <LandAccordion />
        </div>
      </div>
    </>
  );
}
