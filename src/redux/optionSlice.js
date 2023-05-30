import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_API } from "../api";
import { optionUrl } from "../api/urls";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./actionTypes";

export const chooseOption = createAsyncThunk(
  "profile/chooseOption",
  async ({ accessToken, queId, option }) => {
    try {
      const response = await BASE_API.put(
        `${optionUrl}${queId}/${option}/`,
        null,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const optionSlice = createSlice({
  name: "option",
  initialState: {
    option: null,
    status: IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(chooseOption.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(chooseOption.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.option = action.payload;
      })
      .addCase(chooseOption.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

export default optionSlice.reducer;
