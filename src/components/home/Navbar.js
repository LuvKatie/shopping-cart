import React from "react";
import { Link } from "react-router-dom";
import cart from "../../images/cart.svg";

const Navbar = () => {
  return (
    <nav className="z-10 col-start-2 col-end-3 row-start-1 row-end-1 flex items-center justify-center bg-transparent text-center">
      <ul>
        <li className="pb-4">
          <Link aria-label="home" to={"/"} className="text-2xl">
            Home
          </Link>
        </li>
        <li className="pb-4">
          <Link aria-label="shop" to={"/shop"} className="text-2xl">
            Shop
          </Link>
        </li>
        <li>
          <img
            src={cart}
            aria-label="cart"
            alt="a shopping cart"
            className="h-16 w-16"
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
