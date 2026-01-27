import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link
          to={`detail/${product.id}`}
          className="border-2 border-slate-200 rounded-lg shadow-xl cursor-pointer"
          key={product.id}
        >
          <img src={product.image} alt={product.name} className="w-full" />
          <div className="flex justify-between items-center p-2">
            <p className="font-semibold">{product.name}</p>
            <p className="">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
