import React from "react";
import { useParams } from "react-router-dom";
import BeerDetails from "../components/beer-details/BeerDetails";

const BeerDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="">
      <BeerDetails id={id} />
    </div>
  );
};

export default BeerDetailsPage;
