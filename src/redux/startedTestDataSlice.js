import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { startedTestUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  startedTestData: {},
  status: IDLE,
  error: null,
};

export const fetchStartedTestDataById = createAsyncThunk(
  "startedTestData/fetchStartedTestDataById",
  async ({ accessToken, id }) => {
    try {
      const response = await BASE_API.get(`${startedTestUrl}${id}/`, {
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

const startedTestDataSlice = createSlice({
  name: "startedTestData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartedTestDataById.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchStartedTestDataById.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.startedTestData = action.payload;
      })
      .addCase(fetchStartedTestDataById.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default startedTestDataSlice.reducer;
