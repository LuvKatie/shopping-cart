import React from "react";

const ItemContainers = () => {
  return <section aria-label="item-container">{createItems(4)}</section>;
};

export function createItems(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const item = <div key={i}></div>;
    elements.push(item);
  }

  return elements;
}

export default ItemContainers;
