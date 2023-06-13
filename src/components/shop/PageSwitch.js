import React from "react";

const PageSwitch = (props) => {
  const { setPage, page } = props;

  function handleClick(e) {
    e.preventDefault();
    setPage(() => page + 1);
  }

  return (
    <>
      <button id="next" aria-label="next-page" onClick={handleClick}>
        {"-->"}
      </button>
      <button id="prev" aria-label="prev-page" onClick={handleClick}>
        {"<--"}
      </button>
    </>
  );
};

export default PageSwitch;
