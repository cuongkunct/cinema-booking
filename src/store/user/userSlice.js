import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./userApi";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    cyberSoftToken: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.cyberSoftToken = null;
      localStorage.removeItem("user");
      localStorage.removeItem("cyberSoftToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // LẤY lại token từ tham số userData
        const token = action.meta.arg.cyberSoftToken;
        // Lưu token vào Redux
        state.cyberSoftToken = token;
        // Lưu vào localStorage
        localStorage.setItem("cyberSoftToken", token);
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(register.fulfilled, (state, action) => {
        console.log("register.fulfilled: ", action.payload);
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
      })

      .addCase(register.pending, (state, action) => {
        state.loading = true;
        state.user = null;
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
