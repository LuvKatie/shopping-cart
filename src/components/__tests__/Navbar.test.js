import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../home/Navbar";

describe("Navbar component children", () => {
    it("Checks for appropriate links in Navbar", () => {
        render(<Navbar />);
        const nav = screen.getByRole("navigation");
        const home = screen.getByRole("link", {name: "home"});
        const shop = screen.getByRole("link", {name: "shop"});
        const cart = screen.getByRole("img", {name: "cart"});
        expect(nav).toContainElement(home);
        expect(nav).toContainElement(shop);
        expect(nav).toContainElement(cart);
    })

    it("Checks for the correct paths for Navbar links", () => {
        render(<Navbar />);
        const home = screen.getByRole("link", {name: "home"});
        const shop = screen.getByRole("link", {name: "shop"});
        expect(home).toHaveAttribute("href", "./Home");
        expect(shop).toHaveAttribute("href", "../shop/Shop");
    })
})