import { ApiUrl } from "../config/constant";
import axios from "axios";

export const getParcelsByOwner = async (owner: any) => {
  try {
    const response = await axios.get(`${ApiUrl}/api/v1/parcel/owner/${owner}`);
    return response.data.data;
  } catch (error: any) {
    return console.log(error);
  }
};

export const getEstatesByOwner = async (owner: any) => {
  try {
    const response = await axios.get(
      `${ApiUrl}/api/v1/estate/owner/${owner}`
    );
    return response.data.data;
  } catch (error: any) {
    return console.log(error);
  }
};
