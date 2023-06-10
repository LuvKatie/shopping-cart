import React, { useEffect, useState } from "react";
import "../../styles/itemContainers.css";

const ItemContainers = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("vandal");
  const [catalogue, setCatalogue] = useState({
    skins: [],
    page: page,
  });

  async function populateDisplay() {
    const images = document.querySelectorAll("[data-testid='shop-page'] img");
    if (catalogue.skins.length > 0) {
      for (let k = 0; k < images.length; k++) {
        if (catalogue.skins[k].chromas) {
          images[k].src = `${catalogue.skins[k].chromas[0].fullRender}`;
        } else {
          images[k].src = `${catalogue.skins[k].displayIcon}`;
        }
      }
    }
  }

  async function catalogueState() {
    const skins = await getItems(category, page);

    setCatalogue({ skins: skins, page: page });
  }

  async function getItems(name, page) {
    const weapons = await fetchWeapons();
    let end = page * 12;
    let skins = [];

    for (let item of weapons.data) {
      if (item.displayName.toLowerCase() === name.toLowerCase()) {
        for (let i = end - 12; i < end; i++) {
          skins.push(item.skins[i]);
        }
        return skins;
      }
    }
  }

  function handleHover(e) {
    const options = document.querySelectorAll(".item-options");
    const target = e.target.querySelector(".item-options");

    if (target) {
      target.classList.toggle("shown");
      target.classList.toggle("hidden");
    }

    for (let element of options) {
      if (element !== target && element.classList.contains("shown")) {
        element.classList.toggle("shown");
        element.classList.toggle("hidden");
      }
    }
  }

  function handleClick(e) {
    e.preventDefault();
    setPage(() => page + 1);
    // setCategory("phantom");
  }

  function createItems(amount) {
    const elements = [];

    for (let i = 0; i < amount; i++) {
      const item = (
        <div
          key={i}
          className="item flex min-h-full w-64 min-w-fit items-center justify-center border-2 border-solid border-gray-900"
          onMouseEnter={(e) => handleHover(e)}
          onMouseLeave={(e) => handleHover(e)}
        >
          <img src="" alt="" id={i} className="w-9/12"></img>
          <div data-testid="item-options" className="item-options hidden">
            <button aria-label="add-to-cart" onClick={handleClick}>
              Add to Cart
            </button>
          </div>
        </div>
      );
      elements.push(item);
    }

    return elements;
  }

  useEffect(() => {
    populateDisplay();
  }, [catalogue]);

  useEffect(() => {
    catalogueState();
  }, [category, page]);

  return (
    <section
      aria-label="item-container"
      className="item-layout grid gap-12 bg-white p-6"
    >
      {createItems(12)}
    </section>
  );
};

export async function fetchWeapons() {
  const response = await fetch("https://valorant-api.com/v1/weapons", {
    mode: "cors",
  });
  const weapons = await response.json();

  return weapons;
}

export default ItemContainers;
