import React, { useEffect, useState, useContext } from "react";
import { PageContext } from "./ItemContainer";
import { ShopContext } from "../ContextProvider";
import trash from "../../images/trash.svg";
import "../../styles/items.css";

const Items = (props) => {
  const page = useContext(PageContext);
  const { cartItems, setCartItems } = useContext(ShopContext);
  const { category, endPage, setEndPage, layoutChange } = props;
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

  function addToCart(e) {
    const itemQuant = e.target.parentNode.querySelector("#item-amount").value;
    const itemName = e.target.parentNode.parentNode.querySelector("img").id;
    const image = e.target.parentNode.parentNode.querySelector("img").src;
    const newItem = (
      <div
        className="cart-item"
        key={`item-${cartItems.length}`}
        id={`${itemName}`}
      >
        <img
          src={trash}
          className="cart-delete"
          aria-label="cart-item-delete"
          onClick={(e) => {
            const parent = e.target.closest(".cart-item");
            parent.remove();
          }}
        ></img>
        <div className="flex h-24 items-center">
          <img
            src={image}
            className="cart-image px-10"
            aria-label={`${itemName} image`}
          ></img>
        </div>
        {incDecForm(itemQuant)}
      </div>
    );

    const items = document.querySelectorAll(".cart-item");

    for (let i of items) {
      if (i.id === itemName) {
        const cartQuant = Number(i.querySelector("#item-amount").value);
        i.querySelector("#item-amount").value = cartQuant + Number(itemQuant);
        return;
      }
    }

    setCartItems((prev) => (prev.length > 0 ? [...prev, newItem] : [newItem]));
  }

  function createItems(amount) {
    const elements = [];
    for (let i = 0; i < amount; i++) {
      const item = (
        <div
          key={i}
          className="item flex h-full w-full items-center justify-center bg-black bg-opacity-90"
          onMouseEnter={(e) => handleHover(e)}
          onMouseLeave={(e) => handleHover(e)}
        >
          <img src="" id={i} className="h-32 w-9/12 object-contain"></img>
          <div data-testid="item-options" className="item-options hidden">
            <button
              aria-label="add-to-cart"
              className="add-cart"
              onClick={addToCart}
            >
              Add To Cart
            </button>
            {incDecForm()}
          </div>
        </div>
      );
      elements.push(item);
    }
    return elements;
  }

  useEffect(() => {
    layoutChange("items");
  }, []);

  useEffect(() => {
    catalogueState();
  }, [category, page]);

  useEffect(() => {
    populateDisplay();
    checkEndPage(catalogue, endPage, setEndPage);
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

async function checkEndPage(catalogue, endPage, setEndPage) {
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

async function getWeapon(name) {
  const weapons = await fetchWeapons();
  for (let item of weapons.data) {
    if (item.displayName.toLowerCase() === name.toLowerCase()) {
      return item.skins;
    }
  }
}

async function getItems(name, page) {
  const weapons = await fetchWeapons();
  let end = page * 6;
  let skins = [];

  for (let item of weapons.data) {
    if (item.displayName.toLowerCase() === name.toLowerCase()) {
      for (let i = end - 6; i < end; i++) {
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

function incDecForm(quant) {
  return (
    <div id="quantity-container" className="flex items-center">
      <button
        aria-label="decrement-amount"
        className="decrement amount-btn text-xl"
        onClick={(e) => {
          const input = e.target.parentNode.querySelector("#item-amount");
          const value = Number(input.value);
          if (value > 1) {
            input.value = value - 1;
          }
        }}
      >
        -
      </button>
      <input
        type="number"
        className="quantity h-10 w-16 text-center text-xl"
        id="item-amount"
        aria-label="item-amount"
        name="item-amount"
        min={0}
        max={427}
        defaultValue={quant || 1}
      ></input>
      <button
        aria-label="increment-amount"
        className="increment amount-btn text-xl"
        onClick={(e) => {
          const input = e.target.parentNode.querySelector("#item-amount");
          const value = Number(input.value);
          if (value >= 0) {
            input.value = value + 1;
          }
        }}
      >
        +
      </button>
    </div>
  );
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

export default Items;
