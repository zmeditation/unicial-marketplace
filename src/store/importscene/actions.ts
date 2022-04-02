import { createAsyncThunk } from "@reduxjs/toolkit";

const showImportSceneModal = createAsyncThunk(
  "sceneimport/show",
  async (val: boolean) => {
    const payload = val;
    return payload;
  }
);

export { showImportSceneModal };
