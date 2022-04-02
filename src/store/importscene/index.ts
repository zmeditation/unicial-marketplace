import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showImportSceneModal } from "./actions";
import type { importSceneState } from "./types";

const PREFIX = "sceneImport";

const initialState: importSceneState = {
  show: false,
};

export const importSceneModalReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateAlert: (state: importSceneState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.show = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      showImportSceneModal.fulfilled.type,
      (state: importSceneState, action: PayloadAction<any>) => {
        state.show = action.payload;
      }
    );
  },
});

export const { updateAlert } = importSceneModalReducer.actions;

export { showImportSceneModal };

export default importSceneModalReducer.reducer;
