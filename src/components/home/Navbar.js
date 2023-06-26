import React from "react";
import { Link, useLocation } from "react-router-dom";
import cart from "../../images/cart.svg";
import "../../styles/navbar.css";

const Navbar = (props) => {
  const { handleClick } = props;
  const location = useLocation();

  return (
    <nav className="z-10 col-start-2 col-end-3 row-start-1 row-end-1 flex items-center justify-center bg-transparent text-center text-white">
      <ul>
        <li className="pb-4" id="home">
          <Link aria-label="home" to={"/"} className="text-3xl">
            Home
          </Link>
        </li>
        <li className="pb-4" id="shop">
          <Link
            aria-label="shop"
            to={"/shop"}
            className="text-3xl"
            onClick={() => {
              if (location.pathname === "/shop") {
                window.location.reload();
              }
            }}
          >
            Shop
          </Link>
        </li>
        <li className="flex justify-center">
          <img
            src={cart}
            aria-label="cart"
            id="cart-icon"
            alt="a shopping cart icon"
            className="icon-color h-16 w-16"
            onClick={handleClick}
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
