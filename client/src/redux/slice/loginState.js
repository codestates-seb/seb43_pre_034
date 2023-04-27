import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginVerified(state) {
      state.value = true;
    },
    logoutVerified(state) {
      state.value = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { loginVerified } = loginSlice.actions;
export default loginSlice.reducer;
