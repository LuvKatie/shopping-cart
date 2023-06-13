import React, { useState } from "react";
import "../../styles/itemContainers.css";
import Items from "./Items";
import PageSwitch from "./PageSwitch";

const ItemContainers = () => {
  const [category, setCategory] = useState("vandal");
  const [page, setPage] = useState(1);

  return (
    <section
      aria-label="item-container"
      className="item-layout grid gap-12 bg-white p-6"
    >
      <Items category={category} page={page} />
      <PageSwitch page={page} setPage={setPage} />
    </section>
  );
};

export default ItemContainers;
