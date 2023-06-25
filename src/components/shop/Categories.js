import React, { useEffect } from "react";
import "../../styles/Categories.css";

const Categories = (props) => {
  const { layoutChange, setSelectCategory, setCategory } = props;

  useEffect(() => {
    layoutChange("categories");
  }, []);

  function handleClick(category) {
    setSelectCategory(false);
    setCategory(`${category}`);
  }

  return (
    <>
      <div id="category-container">
        <div id="category-labels">
          <ul>
            <li className="text-2xl uppercase text-white">melee</li>
            <li className="text-2xl uppercase text-white">pistols</li>
            <li className="text-2xl uppercase text-white">phantoms</li>
            <li className="text-2xl uppercase text-white">vandal</li>
          </ul>
        </div>
        <div
          data-testid="melee-category"
          className="category-item knife-category"
          onClick={() => handleClick("melee")}
        >
          <img
            aria-label="knife-category"
            src="https://media.valorant-api.com/weaponskins/c5482640-4652-6948-29c6-769e8198db27/displayicon.png"
          ></img>
        </div>
        <div
          data-testid="classic-category"
          className="category-item classic-category"
          onClick={() => handleClick("classic")}
        >
          <img
            aria-label="classic-category"
            src="https://media.valorant-api.com/weaponskinchromas/bb1e1703-4ea1-9be5-c145-4480a6b9f0d7/fullrender.png"
          ></img>
        </div>
        <div
          data-testid="phantom-category"
          className="category-item phantom-category"
          onClick={() => handleClick("phantom")}
        >
          <img
            aria-label="phantom-category"
            src="https://media.valorant-api.com/weaponskinchromas/6f9c7109-485a-f2a3-cb1d-9f9a31a995d7/fullrender.png"
          ></img>
        </div>
        <div
          data-testid="vandal-category"
          className="category-item vandal-category"
          onClick={() => handleClick("vandal")}
        >
          <img
            aria-label="vandal-category"
            src="https://media.valorant-api.com/weaponskinchromas/e58db59a-43ec-36dc-a646-98a932ed6094/fullrender.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Categories;
