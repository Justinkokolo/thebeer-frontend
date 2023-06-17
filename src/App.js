import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeerDetailsPage from "./pages/BeerDetailsPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/beer/:id" element={<BeerDetailsPage />} />
    </Routes>
  );
}

export default App;
