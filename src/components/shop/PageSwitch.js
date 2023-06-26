import React, { useContext } from "react";
import { PageContext } from "./ItemContainer";

const PageSwitch = (props) => {
  const page = useContext(PageContext);
  const { setPage, endPage } = props;

  function handleClick(e) {
    e.preventDefault();
    if (e.target.id === "next") {
      setPage((x) => x + 1);
      return;
    }

    setPage((x) => x - 1);
  }

  return (
    <>
      {!endPage && (
        <button
          data-testid="next "
          id="next"
          aria-label="next-page"
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      {page > 1 && (
        <button
          data-testid="prev"
          id="prev"
          aria-label="prev-page"
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </>
  );
};

export default PageSwitch;
