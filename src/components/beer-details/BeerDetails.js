import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBeerDetails } from "../../services/beerService";
import "./BeerDetails.css";
import {  MoveLeftIcon } from "lucide-react";
import Loader from "../loader/Loader";

const BeerDetails = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await getBeerDetails(id);
        setBeer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBeerDetails();
  }, [id]);

  if (!beer) {
    return <Loader />;
  }

  return (
    <div className="beer-container">
      <Link to={`/`} className="goback-link">
        <MoveLeftIcon className="goback-icon" /> Go back
      </Link>

      <div className="beer-content">
        <img
          className="beer-details-img"
          src={beer.image_url}
          alt={beer.name}
        />
        <div className="beer-details-">
          <h1>{beer.name}</h1>
          <p>{beer.tagline}</p>
          <hr />
          <p>{beer.description}</p>
          <p>{beer.food}</p>
        </div>
      </div>
    </div>
  );
};

export default BeerDetails;
