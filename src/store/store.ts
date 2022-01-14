import { configureStore } from "@reduxjs/toolkit";
import mapparceldataReducer from "./selectedparcels";

import testReducer from "./Test/index";

export const store = configureStore({
  reducer: {
    test: testReducer,
    selectedparcels: mapparceldataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
