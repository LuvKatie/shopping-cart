import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Shop from "../shop/Shop";
import RouteSwitch from "../RouteSwitch";

describe("Shop component", () => {
  it("Shop component properly loads", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    const shop = screen.getByTestId("shop-page");

    expect(shop).toBeInTheDocument();
  });

  it("ItemContainers component properly loads upon Shop component load", () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    const container = screen.getByRole("region", { name: "item-container" });

    expect(container).toBeInTheDocument();
  });

  it("Shop contains Navbar and Footer", () => {
    render(
      <MemoryRouter location={"/shop"}>
        <RouteSwitch />
      </MemoryRouter>
    );

    const navbar = screen.getByRole("navigation");
    const footer = screen.getByRole("contentinfo", { name: "footer" });

    expect(navbar).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
