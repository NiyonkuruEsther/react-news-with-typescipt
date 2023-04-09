// publishersSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "02afd81d285f481398801407a84c74ed";

const initialPublishersState = {
  publishers: [],
  status: "idle",
  error: null,
};

export const fetchPublishers = createAsyncThunk(
  "publishers/fetchPublishers",
  async () => {
    const response = await fetch(
      `https://newsapi.org/v2/sources?apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.sources;
  }
);

export const publishersSlice = createSlice({
  name: "publishers",
  initialState: initialPublishersState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublishers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPublishers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.publishers = action.payload;
      })
      .addCase(fetchPublishers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = publishersSlice.actions;
export const selectPublishers = (state) => state.publishers;