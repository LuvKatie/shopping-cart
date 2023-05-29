import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link aria-label="home" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link aria-label="shop" to={"/shop"}>
            Shop
          </Link>
        </li>
        <li>
          <img aria-label="cart" alt="a shopping cart"></img>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
