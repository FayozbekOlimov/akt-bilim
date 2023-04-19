import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUrl } from "../api/urls";
import { BASE_API } from "../api";

const initialState = {
  user: null,
  status: "idle", // loading, succedded, failed
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
      localStorage.setItem("tokens", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        throw new Error("Internetga ulanishda xatolik");
      } else if (error.response.status === 401) {
        throw new Error("Noto'g'ri foydalanuvchi nomi yoki parol");
      } else {
        throw new Error(error.message);
      }
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
