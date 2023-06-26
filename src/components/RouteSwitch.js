import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./shop/Shop";
import Home from "./home/Home";
import { AppLayout } from "./AppLayout";
import "tailwindcss/tailwind.css";
export const CartItemsContext = createContext();
export const SetCartItemsContext = createContext();

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartItemsContext.Provider value={cartItems}>
      <SetCartItemsContext.Provider value={setCartItems}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Routes>
      </SetCartItemsContext.Provider>
    </CartItemsContext.Provider>
  );
};

export default RouteSwitch;
