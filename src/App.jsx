import React from "react";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/NewsApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessPage from "./components/BusinessPage";
import Publisher from "./components/Publisher";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <LatestNews />
      <CategoriesSection />
      {/* <Router>
        <Routes>
          <Route path="/:name" element={<BusinessPage />} />
          <Route path="/" element={<CategoriesSection />} />
        </Routes>
      </Router> */}
      {/* <News /> */}
      <Publisher />

      <Footer />
    </div>
  );
}

export default App;
