import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSaleParcelsAPI } from "../api/salespaces";

export const setSaleParcels = createAsyncThunk(
  "salespaces/getSaleParcels",
  async () => {
    try {
      const res = await getSaleParcelsAPI();
      return res;
    } catch (err: any) {}
  }
);
