import OnSaleTable from "./OnSaleTable/OnSaleTable";
import { headerData, onsaleData } from "./OnSaleTable/OnSaleTableData";
export default function OnSale() {
  return (
    <>
      <OnSaleTable columns={headerData} rows={onsaleData} stepIndex={1} />
    </>
  );
}
