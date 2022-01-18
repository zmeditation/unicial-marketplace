import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getparcels } from "./actions";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "selectedparcels";
const initialState: any = {
  parcels: [],
};

const setParcels = (state: any, data: any) => {
  state.parcels = data;
};

export const mapparceldataReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getparcels.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setParcels(state, action.payload.parcels);
      }
    );
  },
});

export { getparcels };
export default mapparceldataReducer.reducer;
