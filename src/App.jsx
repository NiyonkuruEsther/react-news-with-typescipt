import React from "react";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <LatestNews />
      <CategoriesSection />
      <Footer />
    </div>
  );
}

export default App;
