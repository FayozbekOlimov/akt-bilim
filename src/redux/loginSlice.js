import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUrl } from "../api/urls";
import { BASE_API } from "../api";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  user: null,
  isLoggedIn: false,
  status: IDLE,
  error: null,
};

export const login = createAsyncThunk(
  "login",
  async ({ username, password }) => {
    try {
      const response = await BASE_API.post(loginUrl, {
        username,
        password,
      });
      localStorage.setItem("tokens", JSON.stringify(response?.data));
      return response.data;
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        throw new Error("Internetga ulanishda xatolik");
      } else if (error.response.status === 401) {
        throw new Error("Noto'g'ri foydalanuvchi nomi yoki parol");
      } else {
        throw new Error("Serverda xatolik");
      }
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("tokens");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = LOADING;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
