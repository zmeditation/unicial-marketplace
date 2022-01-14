import React from "react";
import AdminTopTab from "../../../components/Admin/AdminTopTab/AdminTopTab";
import LandAccordion from "./LandAccordion/LandAccordion";
import { AdminLandsStyle } from "./AdminLandsStyle";
export default function AdminLands() {
  const classes = AdminLandsStyle();
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <>
      <AdminTopTab />
      <LandAccordion />
    </>
  );
}
