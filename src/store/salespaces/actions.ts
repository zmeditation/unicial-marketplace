import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSaleParcelsAPI } from "../api/salespaces";

export const setSaleSpaces = createAsyncThunk(
  "salespaces/getSaleParcels",
  async () => {
    try {
      const res = await getSaleParcelsAPI();
      return res;
    } catch (err: any) {}
  }
);
