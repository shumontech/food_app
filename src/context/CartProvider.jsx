"use client";

import React, { createContext, useState } from "react";

// 1️⃣ Context creation
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // 2️⃣ State inside component
  const [cart, setCart] = useState([]);

  // 3️⃣ Add item function
  const addToCart = (item) => {
    setCart([item, ...cart]);
  };

  // 4️⃣ Context value
  const cartInfo = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartInfo}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;