import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./shop/Shop";
import Home from "./home/Home";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;