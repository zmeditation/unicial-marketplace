/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showBigbugAlert } from "./actions";
import type { bigbugAlertState } from "./types";

const PREFIX = "spinner";

const initialState: bigbugAlertState = {
  bigbugAlertShow: false,
};

export const bigbugAlertReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateAlert: (state: bigbugAlertState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.bigbugAlertShow = action.payload.bigbugAlertShow;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      showBigbugAlert.fulfilled.type,
      (state: bigbugAlertState, action: PayloadAction<any>) => {
        state.bigbugAlertShow = action.payload.bigbugAlertShow;
      }
    );
  },
});

export const { updateAlert } = bigbugAlertReducer.actions;

export { showBigbugAlert };

export default bigbugAlertReducer.reducer;
