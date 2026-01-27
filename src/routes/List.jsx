import React, { useState } from "react";
import Navbar from "../components/List/Navbar";
import Footer from "../components/List/Footer";
import ProductList from "../components/List/ProductList";
import { products } from "../assets/data/products";

function Home() {
  return (
    <div className="w-11/12 py-4 mx-auto">
      <Navbar />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default Home;
