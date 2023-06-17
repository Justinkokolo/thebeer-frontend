import React, { useEffect, useState } from "react";
import "./BeerDetails.css";
import { Link } from "react-router-dom";

const BeerDetails = ({ beer }) => {
  return (
    <div className="beer-modal-container">
      <img
        className="beer-details-image"
        src={beer.image_url}
        alt={beer.name}
      />
      <div className="beer-modal-text-holder">
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>{`${beer.description.slice(0, 100)}...`}</p>
        <Link className="goback-icon" to={`/beer/${beer.id}`}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default BeerDetails;
