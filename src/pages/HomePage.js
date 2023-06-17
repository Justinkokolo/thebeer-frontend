import React, { useState } from "react";
import BeerList from "../components/beer-list/BeerList";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { getRandomBeer, searchBeers } from "../services/beerService";
import { RefreshCcwIcon, SearchIcon } from "lucide-react";

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
      <div className="home-top-text-container">
        <h3>ALCOHOL NOT FOR SALE TO PERSONS UNDER THE AGE OF 18.</h3>
      </div>
      <div className="home-page-menu">
        <div className="home-page-menu-container">
          <button onClick={fetchRandomBeer} className="random-beer-btn">
            Get random beer
          </button>
          <div className="home-page-input-holder">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon
              className="home-page-search-icon"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
      <BeerList searchResults={searchResults} randomBeer={randomBeer} />
    </div>
  );
};

export default HomePage;
