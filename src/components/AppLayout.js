import React, { useState, createContext } from "react";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";
import Cart from "./cart/Cart";
import { Outlet } from "react-router-dom";
export const ToggleCartContext = createContext();

export const AppLayout = () => {
  const [toggleCart, setToggleCart] = useState(false);

  const handleClick = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <>
      <ToggleCartContext.Provider value={toggleCart}>
        <div
          id="app-container"
          className="home-template relative grid min-h-full min-w-full"
        >
          <Outlet />
          <Cart setToggleCart={setToggleCart} handleClick={handleClick} />
          <Navbar handleClick={handleClick} />
          <Footer />
        </div>
      </ToggleCartContext.Provider>
    </>
  );
};
