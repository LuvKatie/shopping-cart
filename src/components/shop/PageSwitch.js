import React from "react";

const PageSwitch = (props) => {
  const { setPage, page } = props;

  function handleClick(e) {
    e.preventDefault();
    setPage(() => page + 1);
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
      <button
        data-testid="prev"
        id="prev"
        aria-label="prev-page"
        onClick={handleClick}
      >
        {"<--"}
      </button>
    </>
  );
};

export default PageSwitch;
