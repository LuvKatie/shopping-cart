import React from "react";
import ItemContainers from "./ItemContainer";
import "../../styles/shop.css";

const Shop = () => {
  return (
    <div
      data-testid="shop-page"
      className="flex items-center justify-center bg-black bg-opacity-25"
    >
      <ItemContainers />
    </div>
  );
};

export default Shop;
