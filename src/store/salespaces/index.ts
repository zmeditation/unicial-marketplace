import { createSlice } from "@reduxjs/toolkit";
import { setSaleSpaces } from "./actions";
import { saleSpaces } from "./types";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "selectedparcels";
const initialState: saleSpaces = {
  parcels: {},
};

const setSpaces = (state: saleSpaces, data: any) => {
  state.parcels = data.data;
};

export const saleparcelsReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setSaleSpaces.fulfilled.type,
      (state: saleSpaces, action: any) => {
        setSpaces(state, action.payload.data);
      }
    );
  },
});

export { setSaleSpaces };
export default saleparcelsReducer.reducer;
