import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { submitTestUrl } from "../api/urls";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

export const submitTest = createAsyncThunk(
  "submit/submitTest",
  async ({ accessToken, resultId }) => {
    try {
      const response = await BASE_API.get(`${submitTestUrl}${resultId}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const submitTestSlice = createSlice({
  name: "submitTest",
  initialState: {
    submit: null,
    status: IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitTest.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(submitTest.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.submit = action.payload;
      })
      .addCase(submitTest.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default submitTestSlice.reducer;
