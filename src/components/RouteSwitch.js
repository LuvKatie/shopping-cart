import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./shop/Shop";
import Home from "./home/Home";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<></>} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
