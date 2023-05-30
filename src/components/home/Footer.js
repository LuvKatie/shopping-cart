import React from "react";
import { Link } from "react-router-dom";
import githubicon from "../../images/github-circle.svg";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer
      aria-label="footer"
      className="footer-template col-start-1 col-end-3 row-start-2 row-end-3 grid"
    >
      <div className="ml-12 flex items-center">
        <Link aria-label="api-credit" to={"/"} className="text-xl">
          API By
        </Link>
      </div>

      <div className="col-start-2 col-end-3 flex items-center justify-center">
        <img
          src={githubicon}
          aria-label="github"
          alt="Github Icon"
          className="h-16 w-16"
        ></img>
      </div>
    </footer>
  );
};

export default Footer;
