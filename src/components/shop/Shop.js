import React from "react";
import ItemContainers from "./ItemContainer";
import "../../styles/shop.css";

const Shop = () => {
  return (
    <>
      <div
        data-testid="shop-background"
        className="shop-page absolute -z-10 h-full w-full"
      ></div>
      <div data-testid="shop-page" className="flex items-center justify-center">
        <ItemContainers />
      </div>
    </>
  );
};

export default Shop;
