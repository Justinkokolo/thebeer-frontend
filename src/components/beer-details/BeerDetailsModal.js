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
      </div>
      <Link className="goback-icon learn-more-link" to={`/beer/${beer.id}`}>
        Learn more...
      </Link>
    </div>
  );
};

export default BeerDetails;
