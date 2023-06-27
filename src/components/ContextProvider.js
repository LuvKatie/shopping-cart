import React, { createContext, useState } from "react";
import "tailwindcss/tailwind.css";
export const ShopContext = createContext();

const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState(true);

  return (
    <ShopContext.Provider
      value={{
        cartItems: cartItems,
        setCartItems: setCartItems,
        selectCategory: selectCategory,
        setSelectCategory: setSelectCategory,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ContextProvider;
