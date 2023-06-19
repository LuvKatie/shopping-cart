import React, { useState, createContext } from "react";
import "../../styles/itemContainers.css";
import Items from "./Items";
import PageSwitch from "./PageSwitch";
<<<<<<< HEAD
=======
import Categories from "./Categories";
>>>>>>> category-selection
export const PageContext = createContext();

const ItemContainers = () => {
  const [category, setCategory] = useState("vandal");
  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(false);
<<<<<<< HEAD
=======
  const [selectCategory, setSelectCategory] = useState(true);

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
>>>>>>> category-selection

  return (
    <PageContext.Provider value={page}>
      <section
        aria-label="item-container"
<<<<<<< HEAD
        className="item-layout grid gap-12 bg-white p-6"
      >
        <Items category={category} endPage={endPage} setEndPage={setEndPage} />
        <PageSwitch
          setPage={setPage}
          setCategory={setCategory}
          endPage={endPage}
        />
=======
        className="gap-12 bg-white p-6"
        id="item-container"
      >
        {selectCategory && (
          <Categories
            layoutChange={layoutChange}
            setSelectCategory={setSelectCategory}
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
>>>>>>> category-selection
      </section>
    </PageContext.Provider>
  );
};

export default ItemContainers;
