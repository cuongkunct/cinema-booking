import { createSlice } from "@reduxjs/toolkit";
import { movieList } from "./movieApi";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieData: [],
    movieDetail: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(movieList.fulfilled, (state, action) => {
        state.loading = false;
        state.movieData = action.payload.content;
      })
      .addCase(movieList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(movieList.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default movieSlice.reducer;
