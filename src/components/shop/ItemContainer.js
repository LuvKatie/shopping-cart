import React, { useState, createContext, useContext } from "react";
import "../../styles/itemContainers.css";
import Items from "./Items";
import PageSwitch from "./PageSwitch";
import Categories from "./Categories";
import { ShopContext } from "../ContextProvider";
export const PageContext = createContext();

const ItemContainers = () => {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(false);
  const { selectCategory, setSelectCategory } = useContext(ShopContext);

  function layoutChange(component) {
    const itemContainer = document.getElementById("item-container");

    if (component === "items") {
      itemContainer.classList.add("item-layout");
      itemContainer.classList.remove("category-layout");
    } else if (component === "categories") {
      itemContainer.classList.add("category-layout");
      itemContainer.classList.remove("item-layout");
    } else {
      return alert(`layoutChange error cannot detect ${component}`);
    }
  }

  return (
    <PageContext.Provider value={page}>
      <section
        aria-label="item-container"
        className="h-4/5 w-4/5 gap-6 bg-transparent p-6"
        id="item-container"
      >
        {selectCategory && (
          <Categories
            layoutChange={layoutChange}
            setSelectCategory={setSelectCategory}
            setCategory={setCategory}
          />
        )}
        {!selectCategory && (
          <>
            <Items
              category={category}
              endPage={endPage}
              setEndPage={setEndPage}
              setSelectCategory={setSelectCategory}
              layoutChange={layoutChange}
            />
            <PageSwitch
              setPage={setPage}
              setCategory={setCategory}
              endPage={endPage}
            />
          </>
        )}
      </section>
    </PageContext.Provider>
  );
};

export default ItemContainers;
