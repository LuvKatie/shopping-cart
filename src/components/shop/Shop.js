import React from "react";
import ItemContainers from "./ItemContainer";

const Shop = () => {
  return (
    <div data-testid="shop-page">
      <ItemContainers createItems={createItems} />
    </div>
  );
};

export function createItems(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const item = <div key={i}></div>;
    elements.push(item);
  }

  return elements;
}

export default Shop;
