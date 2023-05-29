import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer aria-label="footer">
            <Link aria-label="api-credit" to={"/"}>API By</Link>
            <img aria-label="github" alt="Github Icon"></img>
        </footer>
    )
}

export default Footer;