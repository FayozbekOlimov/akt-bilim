import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, loginUrl } from "../api";
import { getCsrftoken } from "../helpers";

const initialState = {
  user: null,
  status: "idle", // loading, succedded, failed
  error: null,
};

const csrftoken = getCsrftoken();

export const login = createAsyncThunk(
  "login",
  async ({ username, password }) => {
    try {
      const response = await axios.post(BASE_URL + loginUrl, {
        csrfmiddlewaretoken: csrftoken,
        username,
        password,
      });
      localStorage.setItem("accessToken", response.data.access);
      return response.data;
    } catch (error) {
      throw new Error("Noto'g'ri foydalanuvchi nomi yoki parol");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
