import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, onSetItems, search }) => {
  const handleDeleteItem = useCallback((id) => {
    onSetItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products
        .filter((prod) =>
          prod.name.toLowerCase().includes(search.toLowerCase()),
        )
        .map((product) => (
          <Link
            to={`detail/${product.id}`}
            className="group border-2 border-slate-200 rounded-lg shadow-xl cursor-pointer relative"
            key={product.id}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteItem(product.id);
              }}
              className="absolute h-8 w-8 p-1 rounded-full bg-red-100 flex justify-center items-center cursor-pointer right-3 top-3 opacity-0 group-hover:opacity-100 transition"
            >
              ❌
            </div>

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
