import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { resourcesUrl } from "../api/urls";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  resource: {},
  status: IDLE,
  error: null,
};

export const fetchResourceById = createAsyncThunk(
  "resource/fetchResourceById",
  async (id) => {
    try {
      const response = await BASE_API.get(`${resourcesUrl}${id}/`, {
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

const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResourceById.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(fetchResourceById.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.resource = action.payload;
      })
      .addCase(fetchResourceById.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default resourceSlice.reducer;
