import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { startTestUrl, videosUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  testData: {},
  status: IDLE,
  error: null,
};

export const fetchTestDataById = createAsyncThunk(
  "testData/fetchTestDataById",
  async ({ accessToken, id }) => {
    try {
      const response = await BASE_API.get(`${startTestUrl}${id}/`, {
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

const testDataSlice = createSlice({
  name: "testData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestDataById.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchTestDataById.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.testData = action.payload;
      })
      .addCase(fetchTestDataById.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default testDataSlice.reducer;
