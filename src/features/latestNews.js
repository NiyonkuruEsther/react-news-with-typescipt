import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "859502e7ee194c2989ecdaf24a853f82";

const initialArticlesState = {
  latest: [],
  status: "idle",
  error: null,
};

export const fetchLatestArticles = createAsyncThunk(
  "articles/fetchLatestArticles",
  async () => {
    try {
      const response = await fetch(
        `https://news-proxy.netlify.app/api/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      return data.articles;
    } catch (error) {
      throw error;
    }
  }
);

export const LatestArticlesSlice = createSlice({
  name: "articles",
  initialState: initialArticlesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLatestArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.latest = action.payload;
      })
      .addCase(fetchLatestArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectLatestArticles = (state) => state.articles.latest;
