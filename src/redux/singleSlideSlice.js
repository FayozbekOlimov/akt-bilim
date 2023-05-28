import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { slidesUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  slide: {},
  status: IDLE,
  error: null,
};

export const fetchSlideById = createAsyncThunk(
  "slide/fetchSlideById",
  async ({ accessToken, id }) => {
    try {
      const response = await BASE_API.get(`${slidesUrl}${id}/`, {
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

const singleSlideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlideById.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchSlideById.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.slide = action.payload;
      })
      .addCase(fetchSlideById.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default singleSlideSlice.reducer;
