import React from "react";
import "./NavBar.css";
import { SearchIcon } from "lucide-react";

export default function NavBar({
  setSearchQuery,
  fetchRandomBeer,
  searchQuery,
  handleSearch,
}) {
  return (
    <div className="home-page-menu">
      <div className="home-top-text-container">
        <h3>ALCOHOL NOT FOR SALE TO PERSONS UNDER THE AGE OF 18.</h3>
      </div>
      <div className="home-page-menu-container">
        <button onClick={fetchRandomBeer} className="random-beer-btn">
          Get random beer
        </button>
        <div className="home-page-input-holder">
          <input
            type="text"
            placeholder="Search beer by name"
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
  );
}
