import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/loginState";
const store = configureStore({
  reducer: loginReducer,
});

export default store;
