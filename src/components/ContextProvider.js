import React, { createContext, useState } from "react";
import "tailwindcss/tailwind.css";
export const ShopContext = createContext();

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <ShopContext.Provider
      value={{ cartItems: cartItems, setCartItems: setCartItems }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;
