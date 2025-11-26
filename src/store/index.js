import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: { auth: userSlice },
});
export default store;
