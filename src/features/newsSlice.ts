import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StateType } from "../data/types";

const API_KEY = "f3a45a464fe34f2b9249a2d9a6b5be2a";

interface ArticleStateType extends StateType {
  articles: string[];
}

const initialArticlesState: ArticleStateType = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (publisher) => {
    let url;
    if (typeof publisher === "object") {
      url = `https://news-proxy.netlify.app/api/everything?sources=${publisher.id}&apiKey=${API_KEY}`;
    } else if (typeof publisher === "string" && publisher !== "") {
      url = `https://news-proxy.netlify.app/api/everything?q=${publisher}&apiKey=${API_KEY}`;
    } else {
      url = `https://news-proxy.netlify.app/api/everything?sources=abc-news&apiKey=${API_KEY}`;
    }

    try {
      const response = await fetch(url);
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
        // slice the news list to pick only 15
        state.articles = action.payload.slice(0, 15);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = articlesSlice.actions;

// This selector now gets the entire articles array from state and uses `.filter` to return only articles with matching publisher.
export const selectArticlesByPublisher = (state) => state?.articles.articles;
