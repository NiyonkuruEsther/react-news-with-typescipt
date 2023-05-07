import React from "react";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullPage from "./components/FullPage";
import NewsAndPublishers from "./components/NewsAndPublishers";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <LatestNews />
      <CategoriesSection />
      <Router>
        <Routes>
          <Route path="/:name" element={<FullPage />} />
          <Route path="/" element={<CategoriesSection />} />
        </Routes>
      </Router>
      {/* <News /> */}
      <NewsAndPublishers />

      <Footer />
    </div>
  );
}

export default App;
