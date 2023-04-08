import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n.js";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  </React.StrictMode>
);
