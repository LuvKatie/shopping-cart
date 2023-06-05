import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./components/RouteSwitch";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RouteSwitch />
  </BrowserRouter>
);
