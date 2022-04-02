import { createAsyncThunk } from "@reduxjs/toolkit";

const showCreateSceneModal = createAsyncThunk(
  "scenecreate/show",
  async (val: boolean) => {
    const payload = val;
    return payload;
  }
);

export { showCreateSceneModal };
