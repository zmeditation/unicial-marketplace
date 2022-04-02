import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { showCreateSceneModal } from "./actions";
import type { createSceneState } from "./types";

const PREFIX = "sceneCreate";

const initialState: createSceneState = {
  show: false,
};

export const createSceneModalReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {
    updateAlert: (state: createSceneState, action: PayloadAction<any>) => {
      if (action.payload !== null) {
        state.show = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      showCreateSceneModal.fulfilled.type,
      (state: createSceneState, action: PayloadAction<any>) => {
        state.show = action.payload;
      }
    );
  },
});

export const { updateAlert } = createSceneModalReducer.actions;

export { showCreateSceneModal };

export default createSceneModalReducer.reducer;
