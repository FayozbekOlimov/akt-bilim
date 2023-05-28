import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { subjectsUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  subjects: [],
  status: IDLE,
  error: null,
};

export const fetchSubjects = createAsyncThunk(
  "subjects/fetchSubjects",
  async (accessToken) => {
    try {
      const response = await BASE_API.get(subjectsUrl, {
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

const subjectsSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjects.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.subjects = action.payload;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default subjectsSlice.reducer;
