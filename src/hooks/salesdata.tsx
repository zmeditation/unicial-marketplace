import { ApiUrl } from "../config/constant";
const SALEDATA_URL = `${ApiUrl}/api/v1/store/successdata`;

interface saledata {
  time: string;
  buyer: string;
  type: string;
  price: number;
}

export const fetchSalesData = async (
  url: string = SALEDATA_URL
): Promise<Record<string, saledata>> => {
  if (!window.fetch) return {};
  const resp = await window.fetch(url);
  const json = await resp.json();
  console.log("saledatatest", json.data);
  return json.data as Record<string, saledata>;
};
