// publishersSlice.js
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const API_KEY: string = "51c2b05805f84a918235842524492417";

interface PublisherType {
  publishers: string[];
  status: string;
  error: null;
}

const initialPublishersState: PublisherType = {
  publishers: [],
  status: "idle",
  error: null,
};

export const fetchPublishers = createAsyncThunk(
  "publishers/fetchPublishers",
  async (category: string = "general") => {
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
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchPublishers.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(
        fetchPublishers.fulfilled,
        (state: any, action: PayloadAction<object>) => {
          state.status = "succeeded";
          state.publishers = action.payload;
        }
      )
      .addCase(
        fetchPublishers.rejected,
        (state: any, action: PayloadAction<object>) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const selectPublishers = (state: any) => state.publishers;
