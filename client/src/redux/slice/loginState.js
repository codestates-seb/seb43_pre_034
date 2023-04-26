import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginVerified(state) {
      state.value = !state.value;
    },
  },
});

export const { loginVerified } = loginSlice.actions;
export default loginSlice.reducer;
