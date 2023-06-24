import React, { useContext } from "react";
import { ToggleCartContext } from "../AppLayout";
import "../../styles/cart.css";

const Cart = (props) => {
  const toggleCart = useContext(ToggleCartContext);
  const { handleClick } = props;

  function modalMode() {
    if (toggleCart) {
      return "show";
    }

    return "hide";
  }

  return (
    <div data-testid="cart-modal" className={`${modalMode()}`}>
      <button onClick={handleClick} className="h-12 w-12 bg-gray-500">
        X
      </button>
    </div>
  );
};

export default Cart;
