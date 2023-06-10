import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsDetails from "./components/NewsDetails";
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
