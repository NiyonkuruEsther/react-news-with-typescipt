// publishersSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateType } from "../types/models/types";

const API_KEY = "859502e7ee194c2989ecdaf24a853f82";

interface PubliserStateType extends StateType {
  publishers: string[];
}

const initialPublishersState: PubliserStateType = {
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
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchPublishers.pending, (state: any) => {
        state.status = "loading";
      })
      .addCase(
        fetchPublishers.fulfilled,
        (state: any, action: object | any) => {
          state.status = "succeeded";
          state.publishers = action.payload;
        }
      )
      .addCase(fetchPublishers.rejected, (state: any, action: object | any) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPublishers = (state: any) => state.publishers;
