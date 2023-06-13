import React from "react";

const PageSwitch = (props) => {
  const { setPage, page, endPage } = props;

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
      <button
        data-testid="next "
        id="next"
        aria-label="next-page"
        onClick={handleClick}
      >
        {"-->"}
      </button>
      {page > 1 && (
        <button
          data-testid="prev"
          id="prev"
          aria-label="prev-page"
          onClick={handleClick}
        >
          {"<--"}
        </button>
      )}
    </>
  );
};

export default PageSwitch;
