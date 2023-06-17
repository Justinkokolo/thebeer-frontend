import "./BeerList.css";

const BeerCard = ({ beer, setBeerClicked, setShowModal }) => {
  const onBeerClick = (beer) => {
    setBeerClicked(beer);
    setShowModal(true);
  };
  return (
    <div className="beer-card-container" onClick={() => onBeerClick(beer)}>
      <div className="beer-card-image-container">
        <img className="beer-card-image" src={beer.image_url} alt={beer.name} />
      </div>
      <div>
        <h3>{beer.name}</h3>

        <p>{beer.tagline}</p>
      </div>
    </div>
  );
};

export default BeerCard;
