import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { testsUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  tests: [],
  status: IDLE,
  error: null,
};

export const fetchTests = createAsyncThunk(
  "tests/fetchTests",
  async ({ accessToken, subjectId }) => {
    try {
      const response = await BASE_API.get(`${testsUrl}${subjectId}/`, {
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

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTests.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchTests.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.tests = action.payload;
      })
      .addCase(fetchTests.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default testsSlice.reducer;
