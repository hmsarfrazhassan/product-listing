import React from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Detail/Details.jsx";

import { products } from "../assets/data/products.js";
import Navbar from "../components/List/Navbar.jsx";

function Detail() {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === +id);
  return (
    <div className="w-11/12 py-4 mx-auto">
      <Navbar />
      <Details product={product} />
    </div>
  );
}

export default Detail;
