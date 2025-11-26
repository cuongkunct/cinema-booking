import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { use } from "react";

const login = createAsyncThunk(
  "QuanLyNguoiDung/DangNhap",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        {
          taiKhoan: userData.taiKhoan,
          matKhau: userData.matKhau,
        },
        {
          headers: {
            TokenCybersoft: userData.cyberSoftToken, // ← THÊM Ở ĐÂY
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const register = createAsyncThunk(
  "QuanLyNguoiDung/DangKy",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        {
          taiKhoan: userData.taiKhoan,
          matKhau: userData.matKhau,
          email: userData.email,
          soDt: userData.soDt,
          maNhom: userData.maNhom,
          hoTen: userData.hoTen,
        },
        {
          headers: {
            TokenCybersoft: userData.cyberSoftToken, // ← THÊM Ở ĐÂY
          },
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { login, register };
