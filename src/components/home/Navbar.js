import React from "react";

const Navbar = ({onClick: handleClick}) => {
    return (
        <nav>
            <a aria-label="home link" href="./Home" onClick={handleClick}>Home</a>
        </nav>
    )
}

export default Navbar;