import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { videosUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  video: {},
  status: IDLE,
  error: null,
};

export const fetchVideoById = createAsyncThunk(
  "video/fetchVideoById",
  async ({ accessToken, id }) => {
    try {
      const response = await BASE_API.get(`${videosUrl}${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      errorHandler(error);
    }
  }
);

const singleVideoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideoById.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchVideoById.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.video = action.payload;
      })
      .addCase(fetchVideoById.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default singleVideoSlice.reducer;
