import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { resourcesUrl } from "../api/urls";
import { errorHandler } from "../helpers";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

const initialState = {
  resource: {},
  status: IDLE,
  error: null,
};

export const fetchResourceById = createAsyncThunk(
  "resource/fetchResourceById",
  async ({ accessToken, id }) => {
    try {
      const response = await BASE_API.get(`${resourcesUrl}${id}/`, {
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
