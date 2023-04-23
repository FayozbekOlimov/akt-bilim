import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { subjectsUrl } from "../api/urls";

export const fetchSubjects = createAsyncThunk(
  "subjects/fetchSubjects",
  async () => {
    try {
      const response = await BASE_API.get(subjectsUrl, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("tokens"))?.access
          }`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const subjectsSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.subjects = action.payload;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default subjectsSlice.reducer;
