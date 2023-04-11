import React from "react";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/NewsApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessPage from "./components/BusinessPage";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <LatestNews />
      <Router>
        <Routes>
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/" element={<CategoriesSection />} />
        </Routes>
      </Router>
      <Footer />
      <News />
    </div>
  );
}

export default App;
