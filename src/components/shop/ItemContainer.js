import React, { useState } from "react";
import "../../styles/itemContainers.css";
import Items from "./Items";

const ItemContainers = () => {
  const [category, setCategory] = useState("vandal");

  return (
    <section
      aria-label="item-container"
      className="item-layout grid gap-12 bg-white p-6"
    >
      <Items category={category} />
    </section>
  );
};

export default ItemContainers;
