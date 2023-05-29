// publishersSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateType } from "../types/models/types";

const API_KEY = "51c2b05805f84a918235842524492417";

interface PublisherStateType extends StateType {
  publishers: string[];
}

const initialPublishersState: PublisherStateType = {
  publishers: [],
  status: "idle",
  error: null,
};

export const fetchPublishers = createAsyncThunk(
  "publishers/fetchPublishers",
  async (category: string) => {
    const response = await fetch(
      `https://news-proxy.netlify.app/api/top-headlines/sources?category=${category}&apiKey=${API_KEY}`
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
      .addCase(
        fetchPublishers.fulfilled,
        (state: PublisherStateType, action ) => {
          state.status = "succeeded";
          state.publishers = action.payload;
        }
      )
      .addCase(
        fetchPublishers.rejected,
        (state: PublisherStateType, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export const selectPublishers = (state: any) => state.publishers;
