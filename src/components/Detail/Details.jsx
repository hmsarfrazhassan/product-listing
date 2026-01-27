import React from "react";

const Details = ({ product }) => {
  const handleClick = () => {
    alert("Add to cart");
  };
  return (
    <div className="grid grid-cols-2 gap-8">
      <img src={product.image} alt={product.name} className="w-full" />
      <div className="flex flex-col gap-4">
        <div className="text-3xl font-bold ">{product.name}</div>
        <div className="text-2xl font-semibold">${product.price}</div>
        <button
          onClick={handleClick}
          className="cursor-pointer bg-amber-700 py-4 text-white rounded-md hover:bg-amber-800 active:bg-amber-900"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
