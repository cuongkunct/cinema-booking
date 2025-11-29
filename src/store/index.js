import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import movieSlice from "./movie/movieSlice";

const store = configureStore({
  reducer: { auth: userSlice, movie: movieSlice },
});
export default store;
