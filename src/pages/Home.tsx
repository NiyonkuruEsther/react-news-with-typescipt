import CategoriesSection from "../components/CategoriesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import NewsAndPublishers from "../components/NewsAndPublishers";

const Home = () => (
  <div className="bg-gray-200">
    <Header />
    <LatestNews />
    <CategoriesSection />
    <NewsAndPublishers />
    <Footer />
  </div>
);
export default Home;
