import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { publishersSlice } from "./features/publisherSlice";
import { articlesSlice } from "./features/newsSlice";
import { LatestArticlesSlice } from "./features/latestNews";
import App from "./App";
import "./index.css";
import logger from "redux-logger";
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    latestArticles: LatestArticlesSlice.reducer,
    articles: articlesSlice.reducer,
    publishers: publishersSlice.reducer,
  },
  middleware,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
