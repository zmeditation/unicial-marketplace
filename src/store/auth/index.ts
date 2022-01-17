import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setloginAddress } from "./actions";

// const PREFIX = 'trade/orderHsitory'
const PREFIX = "auth";
const initialState: any = {
  loginAddress: "",
};

const setAuth = (state: any, loginAddress: any) => {
  localStorage.setItem("loginAddress", loginAddress);
};

export const authReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setloginAddress.fulfilled.type,
      (state: any, action: PayloadAction<any>) => {
        setAuth(state, action.payload.loginAddress);
      }
    );
  },
});

export { setloginAddress };
export default authReducer.reducer;
