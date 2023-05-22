import CategoriesSection from "../components/CategoriesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LatestNews from "../components/LatestNews";
import NewsAndPublishers from "../components/NewsAndPublishers";

const Home = () => (
  <div className="bg-gray-200">
    <Header />
    <HeroSection />
    <LatestNews />
    <CategoriesSection />
    <NewsAndPublishers />
    <Footer />
  </div>
);
export default Home;
