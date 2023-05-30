// publishersSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateType } from "../types/models/types";

const API_KEY = "859502e7ee194c2989ecdaf24a853f82";

interface PublisherStateType extends StateType {
  publishers: string[];
}
export interface PublishersRootState {
  publishers: PublisherStateType;
}
const initialPublishersState: PublisherStateType = {
  publishers: [],
  status: "idle",
  error: null,
};

export const fetchPublishers = createAsyncThunk<string[], string>(
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
        (state: PublisherStateType, action) => {
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

export const selectPublishers = (state: { publishers: { publishers: [] } }) =>
  state.publishers.publishers;
