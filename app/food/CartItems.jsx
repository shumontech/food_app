"use client";

import React, { useContext } from "react";
import { CartContext } from "@/context/CartProvider";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {cart.length > 0 ? `${cart.length} items added` : "Cart is empty"}
    </div>
  );
};

export default CartItems;