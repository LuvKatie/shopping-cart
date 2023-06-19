import React, { useState, createContext } from "react";
import "../../styles/itemContainers.css";
import Items from "./Items";
import PageSwitch from "./PageSwitch";
export const PageContext = createContext();

const ItemContainers = () => {
  const [category, setCategory] = useState("vandal");
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(false);

  return (
    <PageContext.Provider value={page}>
      <section
        aria-label="item-container"
        className="grid gap-12 bg-white p-6"
        id="item-container"
      >
        <Items category={category} endPage={endPage} setEndPage={setEndPage} />
        <PageSwitch
          setPage={setPage}
          setCategory={setCategory}
          endPage={endPage}
        />
      </section>
    </PageContext.Provider>
  );
};

export default ItemContainers;
