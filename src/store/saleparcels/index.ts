import { createSlice } from "@reduxjs/toolkit";
import { setSaleParcels } from "../saleparcels/actions";
import { saleParcels } from "./types";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "selectedparcels";
const initialState: saleParcels = {
  parcels: {},
};

const setParcels = (state: saleParcels, data: any) => {
  state.parcels = data.data;
};

export const saleparcelsReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setSaleParcels.fulfilled.type,
      (state: saleParcels, action: any) => {
        setParcels(state, action.payload.data);
      }
    );
  },
});

export { setSaleParcels };
export default saleparcelsReducer.reducer;
