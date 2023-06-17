import React, { useEffect, useState } from "react";
import { getBeerMenu } from "../../services/beerService";
import BeerCard from "./BeerCard";
import "./BeerList.css";
import Modal from "../modals/Modal";
import BeerDetails from "../beer-details/BeerDetailsModal";

const BeerList = ({ searchResults, randomBeer }) => {
  const [beers, setBeers] = useState([]);
  const [beerClicked, setBeerClicked] = useState();

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchBeerMenu = async () => {
      try {
        const response = await getBeerMenu();
        setBeers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBeerMenu();
  }, []);

  useEffect(() => {
    setBeers(searchResults);
  }, [searchResults]);

  useEffect(() => {
    setBeers([randomBeer]);
  }, [randomBeer]);

  return (
    <div className="beer-list-container">
      <h1>Beer List</h1>
      <div className="beer-list-card-container">
        {beers.map((beer) => (
          <BeerCard
            beer={beer}
            setBeerClicked={setBeerClicked}
            setShowModal={setShowModal}
          />
        ))}
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <BeerDetails beer={beerClicked}></BeerDetails>
        </Modal>
      )}
    </div>
  );
};

export default BeerList;
