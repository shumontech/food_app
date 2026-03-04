"use client";

import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CardButtons = ({ food }) => {
  const [inCart, setInCart] = useState(false);
 const { addToCart } = useContext(CartContext);

  const handleAdd2Cart = () => {
    addToCart(food);
    setInCart(true);
  };

  return (
    <button
      onClick={handleAdd2Cart}
      disabled={inCart}
      className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition disabled:bg-gray-400 disabled:text-gray-700"
    >
      {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default CardButtons;