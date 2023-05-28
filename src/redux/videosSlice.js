import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { videosUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  videos: [],
  status: IDLE,
  error: null,
};

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async (accessToken) => {
    try {
      const response = await BASE_API.get(videosUrl, {
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

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default videosSlice.reducer;
