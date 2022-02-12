import { configureStore } from "@reduxjs/toolkit";
import mapparceldataReducer from "./selectedparcels";
import mapestatedataReducer from "./selectedestates";

import testReducer from "./Test/index";
import authReducer from "./auth/index";
import alertReducer from "./alert/index";
import spinnerReducer from "./spinner/index";
import netModalReducer from "./netmodal/index";
import saleParcelsReducer from "./saleparcels";
import parcelsReducer from "./parcels";


export const store = configureStore({
  reducer: {
    test: testReducer,
    selectedparcels: mapparceldataReducer,
    spinner: spinnerReducer,
    auth: authReducer,
    alert: alertReducer,
    selectedestates: mapestatedataReducer,
    netModal: netModalReducer,
    saleparcels: saleParcelsReducer,
    parcels: parcelsReducer, 
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
