import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, refreshUrl, loginUrl } from "../api/urls";

const initialState = {
  accessToken: localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))?.access
    : null,
  refreshToken: localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))?.refresh
    : null,
  user: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await axios.post(BASE_URL + loginUrl, {
      username,
      password,
    });
    localStorage.setItem("tokens", JSON.stringify(response.data));
    return response.data;
  }
);

export const refreshTokens = createAsyncThunk(
  "auth/refreshTokens",
  async (refreshToken) => {
    const response = await axios.post(BASE_URL + refreshUrl, {
      refresh: refreshToken,
    });
    return response.data;
  }
);

// export const fetchProtectedResource = createAsyncThunk(
//   "auth/fetchProtectedResource",
//   async (accessToken) => {
//     const response = await axios.get(BASE_URL + videosUrl, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     return response.data;
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(refreshTokens.fulfilled, (state, action) => {
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
      });
    // .addCase(fetchUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // })
    // .addCase(fetchUser.rejected, (state, action) => {
    //   state.accessToken = null;
    //   state.refreshToken = null;
    //   state.user = null;
    //   state.error = action.error.message;
    // });
  },
});

export const { logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
