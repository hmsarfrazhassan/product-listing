import React, { useState } from "react";
import Navbar from "../components/List/Navbar";
import Footer from "../components/List/Footer";
import ProductList from "../components/List/ProductList";
import Search from "../components/List/Search";
import { products } from "../assets/data/products";

function Home() {
  const [items, setItems] = useState(products);
  const [search, setSearch] = useState("");
  return (
    <div className="w-11/12 py-4 mx-auto">
      <Navbar />
      <Search search={search} onSearch={setSearch} />
      <ProductList products={items} onSetItems={setItems} search={search} />
      <Footer />
    </div>
  );
}

export default Home;
