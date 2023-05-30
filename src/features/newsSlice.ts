import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArticlesType, StateType } from "../types/models/types";

const API_KEY = "859502e7ee194c2989ecdaf24a853f82";

interface ArticleStateType extends StateType {
  articles: number[];
}
interface ArticlesState extends StateType {
  articles: { articles: ArticlesType[] };
}
export interface ArticlesRootState {
  articles: ArticleStateType;
}

const initialArticlesState: ArticleStateType = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (publisher: { id: string } | string) => {
    let url;
    if (typeof publisher === "object") {
      url = `https://news-proxy.netlify.app/api/everything?sources=${publisher.id}&apiKey=${API_KEY}`;
    } else if (typeof publisher === "string" && publisher !== "") {
      url = `https://news-proxy.netlify.app/api/everything?q=${publisher}&apiKey=${API_KEY}`;
    } else {
      url = `https://news-proxy.netlify.app/api/everything?sources=abc-news&apiKey=${API_KEY}`;
    }

    const response = await fetch(url);
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
        // slice the news list to pick only 15
        state.articles = action.payload.slice(0, 15);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectArticlesByPublisher = (state: ArticlesState) =>
  state?.articles.articles;
