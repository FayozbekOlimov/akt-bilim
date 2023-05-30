import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { testDetailUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  testDetail: {},
  status: IDLE,
  error: null,
};

export const fetchTestDetailById = createAsyncThunk(
  "testDetail/fetchTestDetailById",
  async ({ accessToken, id }) => {
    try {
      const response = await BASE_API.get(`${testDetailUrl}${id}/`, {
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

const testDetailSlice = createSlice({
  name: "testDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestDetailById.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchTestDetailById.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.testDetail = action.payload;
      })
      .addCase(fetchTestDetailById.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default testDetailSlice.reducer;
