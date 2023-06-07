import React, { useEffect } from "react";
import "../../styles/itemContainers.css";

const ItemContainers = () => {
  async function populateDisplay() {
    const vandals = [
      "k/tac",
      "prime",
      "elderflame",
      "chronovoid",
      "ion",
      "gaiasvengeance",
      "reaver",
      "sentinelsoflight",
      "neptune",
      "rgx11zpro",
      "preludetochaos",
      "oni",
    ];

    const weapons = await fetchWeapons();

    const skinsArr = weapons.data[2].skins;
    const foundVandal = [];

    const images = document.querySelectorAll("[data-testid='shop-page'] img");

    for (let i = 0; i < vandals.length; i++) {
      for (let j = 0; j < skinsArr.length; j++) {
        const skinName = skinsArr[j].displayName
          .replace(/\s|[']|[.]|Vandal/g, "")
          .toLowerCase();
        if (vandals.includes(skinName) && !foundVandal.includes(skinsArr[j])) {
          foundVandal.push(skinsArr[j]);
        }
      }
    }

    // for (let k = 0; k < images.length; k++) {
    //   if (foundVandal[k].chromas[1] && foundVandal[k].chromas[1].fullRender) {
    //     images[k].src = `${foundVandal[k].chromas[1].fullRender}`;
    //   } else {
    //     images[k].src = `${foundVandal[k].displayIcon}`;
    //   }
    // }

    for (let k = 0; k < images.length; k++) {
      if (foundVandal[k].fullRender) {
        images[k].src = `${foundVandal[k].chromas[1].fullRender}`;
      } else {
        images[k].src = `${foundVandal[k].displayIcon}`;
      }
    }
  }

  useEffect(() => {
    populateDisplay();
  }, []);

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

export function createItems(amount) {
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const item = (
      <div
        key={i}
        className="flex min-h-full w-64 min-w-fit items-center justify-center border-2 border-solid border-gray-900"
      >
        <img src="" alt="" id={i} className="w-9/12"></img>
      </div>
    );
    elements.push(item);
  }

  return elements;
}

export default ItemContainers;
