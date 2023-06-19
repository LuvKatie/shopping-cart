import React, { useEffect } from "react";

const Categories = (props) => {
  const { layoutChange, setSelectCategory } = props;

  useEffect(() => {
    layoutChange("categories");
  }, []);

  return (
    <div id="category-container">
      <div className="category-item knife-category">
        <img
          aria-label="knife-category"
          src="https://media.valorant-api.com/weaponskins/c5482640-4652-6948-29c6-769e8198db27/displayicon.png"
        ></img>
      </div>
      <div className="category-item classic-category">
        <img
          aria-label="classic-category"
          src="https://media.valorant-api.com/weaponskinchromas/bb1e1703-4ea1-9be5-c145-4480a6b9f0d7/fullrender.png"
        ></img>
      </div>
      <div className="category-item phantom-category">
        <img
          aria-label="phantom-category"
          src="https://media.valorant-api.com/weaponskinchromas/6f9c7109-485a-f2a3-cb1d-9f9a31a995d7/fullrender.png"
        ></img>
      </div>
      <div
        className="category-item vandal-category"
        onClick={() => setSelectCategory(false)}
      >
        <img
          aria-label="vandal-category"
          src="https://media.valorant-api.com/weaponskinchromas/e58db59a-43ec-36dc-a646-98a932ed6094/fullrender.png"
        ></img>
      </div>
    </div>
  );
};

export default Categories;
