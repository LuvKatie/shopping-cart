import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../home/Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar component children", () => {
    it("Checks for appropriate elements in Navbar", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const nav = screen.getByRole("navigation");
        const home = screen.getByRole("link", {name: "home"});
        const shop = screen.getByRole("link", {name: "shop"});
        const cart = screen.getByRole("img", {name: "cart"});
        expect(nav).toContainElement(home);
        expect(nav).toContainElement(shop);
        expect(nav).toContainElement(cart);
    })

    it("Checks for the correct paths for Navbar anchor links", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const home = screen.getByRole("link", {name: "home"});
        const shop = screen.getByRole("link", {name: "shop"});
        expect(home).toHaveAttribute("href", "/");
        expect(shop).toHaveAttribute("href", "/shop");
    })
})