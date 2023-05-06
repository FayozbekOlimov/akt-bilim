import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { slidesUrl } from "../api/urls";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  slides: [],
  status: IDLE,
  error: null,
};

export const fetchSlides = createAsyncThunk(
  "slides/fetchSlides",
  async (acessToken) => {
    try {
      const response = await BASE_API.get(slidesUrl, {
        headers: {
          Authorization: `Bearer ${acessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const slidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlides.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchSlides.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.slides = action.payload;
      })
      .addCase(fetchSlides.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default slidesSlice.reducer;
