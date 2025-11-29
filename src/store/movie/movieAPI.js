import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const movieList = createAsyncThunk(
  "QuanLyPhim/LayDanhSachPhim",
  async (TokenCybersoft, { rejectWithValue }) => {
    try {
      console.log("Goi toi day :  ", backendUrl);
      const response = await axios.get(
        backendUrl + "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        {
          headers: {
            TokenCybersoft: TokenCybersoft,
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { movieList };
