import AdminTopTab from "../../../components/Admin/AdminTopTab/AdminTopTab";
import { AdminLandsStyle } from "./AdminLandsStyle";
export default function AdminLands() {
  const classes = AdminLandsStyle();
  return (
    <>
      <AdminTopTab />
      <div className={classes.root}>This is Admin Lands page!</div>
    </>
  );
}
