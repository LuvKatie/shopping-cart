import React from "react";

const Navbar = () => {
    return (
        <nav>
            <a aria-label="home" href="./Home">Home</a>
            <a aria-label="shop" href="../shop/Shop">Shop</a>
            <img aria-label="cart" alt="a shopping cart"></img>
        </nav>
    )
}

export default Navbar;