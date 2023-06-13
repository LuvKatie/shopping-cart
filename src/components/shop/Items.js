import React, { useEffect, useState } from "react";
import "../../styles/items.css";

const Items = (props) => {
  const { category, page, endPage, setEndPage } = props;
  const [catalogue, setCatalogue] = useState({
    skins: [],
    page: page,
    weapon: [],
  });

  async function populateDisplay() {
    const images = document.querySelectorAll("[data-testid='shop-page'] img");
    if (catalogue.skins.length > 0 && images[0]) {
      for (let k = 0; k < catalogue.skins.length; k++) {
        if (catalogue.skins[k].chromas) {
          images[k].id = `${catalogue.skins[k].displayName}`;
          images[k].src = `${catalogue.skins[k].chromas[0].fullRender}`;
        } else {
          images[k].src = `${catalogue.skins[k].displayIcon}`;
        }
      }
    }
  }

  async function catalogueState() {
    const skins = await getItems(category, page);
    const weapons = await getWeapon(category);

    setCatalogue({ skins: skins, page: page, weapon: weapons });
  }

  async function getItems(name, page) {
    const weapons = await fetchWeapons();
    let end = page * 12;
    let skins = [];

    for (let item of weapons.data) {
      if (item.displayName.toLowerCase() === name.toLowerCase()) {
        for (let i = end - 12; i < end; i++) {
          if (!item.skins[i]) {
            continue;
          }

          if (item.skins[i].displayName !== "Random Favorite Skin") {
            skins.push(item.skins[i]);
          } else {
            end = end + 1;
            i++;
            skins.push(item.skins[i]);
          }
        }
      }
    }
    return skins;
  }

  async function getWeapon(name) {
    const weapons = await fetchWeapons();
    for (let item of weapons.data) {
      if (item.displayName.toLowerCase() === name.toLowerCase()) {
        return item.skins;
      }
    }
  }

  async function checkEndPage() {
    let endItem;
    if (catalogue.weapon.length > 0) {
      endItem = catalogue.weapon[catalogue.weapon.length - 1];
      for (let item of catalogue.skins) {
        if (item.displayName === endItem.displayName && endPage === false) {
          setEndPage(true);
          return;
        }
      }
      const names = catalogue.skins.map((item) => item.displayName);
      if (!names.includes(endItem.displayName) && endPage === true) {
        setEndPage(false);
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
            <button aria-label="add-to-cart">Add to Cart</button>
          </div>
        </div>
      );
      elements.push(item);
    }

    return elements;
  }

  useEffect(() => {
    catalogueState();
  }, [category, page]);

  useEffect(() => {
    populateDisplay();
    checkEndPage();
  });

  return <>{createItems(catalogue.skins.length)}</>;
};

export async function fetchWeapons() {
  const response = await fetch("https://valorant-api.com/v1/weapons", {
    mode: "cors",
  });
  const weapons = await response.json();

  return weapons;
}

export default Items;
