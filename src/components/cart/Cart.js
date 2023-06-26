import React, { useContext, useEffect } from "react";
import { ToggleCartContext } from "../AppLayout";
import { ShopContext } from "../ContextProvider";
import "../../styles/cart.css";

const Cart = (props) => {
  const { cartItems, setCartItems } = useContext(ShopContext);
  const toggleCart = useContext(ToggleCartContext);
  const { handleClick } = props;
  console.log(setCartItems);
  console.log(cartItems);

  function modalMode() {
    if (toggleCart) {
      return "show-cart-modal";
    }

    return "hide-cart-modal";
  }

  useEffect(() => {}, [cartItems]);

  return (
    <div data-testid="cart-modal" className={`${modalMode()}`} id="cart-modal">
      <div aria-label="cart-header" id="cart-header">
        <button
          aria-label="modal-exit"
          onClick={handleClick}
          id="cart-exit"
        ></button>
      </div>
      <div data-testid="cart-items" className="grid" id="cart-items">
        {cartItems}
      </div>
      <div data-testid="cart-checkout" id="cart-checkout-container">
        <button aria-label="cart-checkout-button" id="cart-checkout-button">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
