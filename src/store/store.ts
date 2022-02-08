import { configureStore } from "@reduxjs/toolkit";
import mapparceldataReducer from "./selectedparcels";
import mapestatedataReducer from "./selectedestates";

import testReducer from "./Test/index";
import authReducer from "./auth/index";
import alertReducer from "./alert/index";
import spinnerReducer from "./spinner/index";
import bigbugAlertReducer from "./bigbugalert/index";


export const store = configureStore({
  reducer: {
    test: testReducer,
    selectedparcels: mapparceldataReducer,
    spinner: spinnerReducer,
    auth: authReducer,
    alert: alertReducer,
    selectedestates: mapestatedataReducer,
    bigbugAlert:bigbugAlertReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
