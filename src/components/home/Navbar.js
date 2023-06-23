import React, { useState } from "react";
import { Link } from "react-router-dom";
import cart from "../../images/cart.svg";
import "../../styles/shop.css";

const Navbar = () => {
  const [showHome, setShowHome] = useState(false);
  return (
    <nav className="z-10 col-start-2 col-end-3 row-start-1 row-end-1 flex items-center justify-center bg-transparent text-center text-white">
      <ul>
        {showHome && (
          <li className="pb-4">
            <Link
              aria-label="home"
              to={"/"}
              className="text-3xl"
              onClick={() => setShowHome(false)}
            >
              Home
            </Link>
          </li>
        )}
        {!showHome && (
          <li className="pb-4">
            <Link
              aria-label="shop"
              to={"/shop"}
              className="text-3xl"
              onClick={() => setShowHome(true)}
            >
              Shop
            </Link>
          </li>
        )}
        <li className="flex justify-center">
          <img
            src={cart}
            aria-label="cart"
            alt="a shopping cart"
            className="icon-color h-16 w-16"
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
