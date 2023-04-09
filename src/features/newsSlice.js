// articlesSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "02afd81d285f481398801407a84c74ed";

const initialArticlesState = {
  articles: {},
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (publisher) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${publisher}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles;
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState: initialArticlesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles[action.meta.arg] = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = articlesSlice.actions;
export const selectArticlesByPublisher = (state, publisher) =>
  state.articles[publisher];
