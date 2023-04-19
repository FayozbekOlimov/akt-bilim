import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { videosUrl } from "../api/urls";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  try {
    const response = await BASE_API.get(videosUrl);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
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
