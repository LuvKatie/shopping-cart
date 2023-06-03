import React from "react";

const ItemContainers = (props) => {
  const { createItems } = props;
  return <section aria-label="item-container">{createItems(4)}</section>;
};

export default ItemContainers;
