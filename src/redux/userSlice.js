import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { userUrl } from "../api/urls";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  user: null,
  status: IDLE,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ accessToken, id }) => {
    try {
      const response = await BASE_API.get(`${userUrl}${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
