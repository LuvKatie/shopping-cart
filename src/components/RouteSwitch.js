import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./shop/Shop";
import Home from "./home/Home";
import { AppLayout } from "./AppLayout";

const RouteSwitch = () => {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteSwitch;
