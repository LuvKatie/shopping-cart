import React, { useContext, useEffect } from "react";
import { ToggleCartContext } from "../AppLayout";
import { CartItemsContext } from "../RouteSwitch";
import "../../styles/cart.css";

const Cart = (props) => {
  const cartItems = useContext(CartItemsContext);
  // const setCartItems = useContext(SetCartItemsContext);
  const toggleCart = useContext(ToggleCartContext);
  const { handleClick } = props;

  function modalMode() {
    if (toggleCart) {
      return "show";
    }

    return "hide";
  }

  useEffect(() => {}, [cartItems]);

  return (
    <div data-testid="cart-modal" className={`${modalMode()}`} id="cart-modal">
      {/* {cartItems.map((item) => item)} */}
      {cartItems}
      <button
        aria-label="modal-exit"
        onClick={handleClick}
        className="h-12 w-12 bg-gray-500"
      >
        X
      </button>
    </div>
  );
};

export default Cart;
