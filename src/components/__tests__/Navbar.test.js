import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../home/Navbar";
// import userEvent from "@testing-library/user-event";

describe("Navbar component children", () => {
    it("Checks for appropriate elements in Navbar", () => {
        render(<Navbar />);
        const nav = screen.getByRole("navigation");
        const home = screen.getByRole("link", {name: "home"});
        const shop = screen.getByRole("link", {name: "shop"});
        const cart = screen.getByRole("img", {name: "cart"});
        expect(nav).toContainElement(home);
        expect(nav).toContainElement(shop);
        expect(nav).toContainElement(cart);
    })

    it("Checks for the correct paths for Navbar anchor links", () => {
        render(<Navbar />);
        const home = screen.getByRole("link", {name: "home"});
        const shop = screen.getByRole("link", {name: "shop"});
        expect(home).toHaveAttribute("href", "/");
        expect(shop).toHaveAttribute("href", "/shop");
    })
})