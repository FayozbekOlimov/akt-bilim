import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, videosUrl } from "../api";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + String(localStorage.getItem("accessToken")),
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await axios.get(BASE_URL + videosUrl, (headers = headers));
  return response.data;
});

const initialState = {
  videos: [],
  status: "idle",
  error: null,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default videosSlice.reducer;
