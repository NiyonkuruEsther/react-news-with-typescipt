// publishersSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "859502e7ee194c2989ecdaf24a853f82";

const initialPublishersState = {
  publishers: [],
  status: "idle",
  error: null,
};

export const fetchPublishers = createAsyncThunk(
  "publishers/fetchPublishers",
  async (category='general') => {
    const response = await fetch(
      `https://news-proxy.netlify.app/api/top-headlines/sources?category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.sources;
  }
);

// console.log(initialPublishersState.publishers, "data");

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
