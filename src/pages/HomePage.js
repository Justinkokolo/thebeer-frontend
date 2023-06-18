import React, { useState } from "react";
import BeerList from "../components/beer-list/BeerList";
import "./Homepage.css";
import { getRandomBeer, searchBeers } from "../services/beerService";
import NavBar from "../components/menu/NavBar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [randomBeer, setRandomBeer] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchBeers(searchQuery);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRandomBeer = async () => {
    try {
      const response = await getRandomBeer();
      setRandomBeer(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <NavBar
        setSearchQuery={setSearchQuery}
        fetchRandomBeer={fetchRandomBeer}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      <BeerList searchResults={searchResults} randomBeer={randomBeer} />
    </div>
  );
};

export default HomePage;
