import { createSlice } from "@reduxjs/toolkit";
import { setParcels } from "../parcels/actions";
import { parcels } from "./types";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "parcels";
const initialState: parcels = {
  parcels: {},
};

const storeParcels = (state: parcels, data: any) => {
  state.parcels = data;
};

export const parcelsReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setParcels.fulfilled.type,
      (state: parcels, action: any) => {
        storeParcels(state, action.payload);
      }
    );
  },
});

export { setParcels };
export default parcelsReducer.reducer;
