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
    try {
      const response = await fetch(
        `https://news-proxy.netlify.app/api/everything?sources=${publisher}&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      console.log(publisher, "publisher");
      console.log(data.articles);
      return data.articles;
    } catch (error) {
      console.error(error);
      throw error;
    }
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
export const selectArticlesByPublisher = (state) => state.articles;
