import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./components/RouteSwitch";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/ContextProvider";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <RouteSwitch />
    </BrowserRouter>
  </ContextProvider>
);
