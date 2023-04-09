import React from "react";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import News from "./components/NewsApp";

function App() {
  return (
    <div className="bg-gray-100">
      {/* <Header />
      <HeroSection />
      <LatestNews />
      <CategoriesSection />
      <Footer /> */}
      <News />
    </div>
  );
}

export default App;
