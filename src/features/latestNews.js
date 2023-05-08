import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "51c2b05805f84a918235842524492417";

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
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      const data = await response.json();
      console.log(data.articles, "lat");
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

console.log(initialArticlesState.latest, "article fds");

export const {} = LatestArticlesSlice.actions;
export const selectLatestArticles = (state) => state.articles.latest;
