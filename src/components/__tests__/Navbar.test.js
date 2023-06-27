import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../home/Navbar";
import { MemoryRouter } from "react-router-dom";
import ContextProvider from "../ContextProvider";

beforeEach(() => {
  render(
    <MemoryRouter>
      <ContextProvider>
        <Navbar />
      </ContextProvider>
    </MemoryRouter>
  );
});

describe("Navbar component children", () => {
  it("Checks for appropriate elements in Navbar", () => {
    const nav = screen.getByRole("navigation");
    const shop = screen.getByRole("link", { name: "shop" });
    const cart = screen.getByRole("img", { name: "cart" });
    expect(nav).toContainElement(shop);
    expect(nav).toContainElement(cart);
  });

  it("Checks for the correct paths for Navbar anchor links", () => {
    const shop = screen.getByRole("link", { name: "shop" });
    expect(shop).toHaveAttribute("href", "/shop");
  });
});
