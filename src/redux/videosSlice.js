import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { videosUrl } from "../api/urls";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  videos: [],
  status: IDLE,
  error: null,
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  try {
    const response = await BASE_API.get(videosUrl, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("tokens"))?.access
        }`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

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
