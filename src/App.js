import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/beer/:id" element={<BeerDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
