import React from "react";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsDetails from "./components/NewsDetails";
import NewsAndPublishers from "./components/NewsAndPublishers";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news-details/:title" exact element={<NewsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
