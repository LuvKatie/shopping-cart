import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../home/Navbar";

describe("Navbar component children", () => {
    it("Checks if the Home link is present in Navbar", () => {
        render(<Navbar />);
        const nav = screen.getByRole("navigation");
        const link = screen.getByRole("link", {name: "home link"});
        expect(nav).toContainElement(link)
    })

    it("Checks for the correct path in Home link", () => {
        render(<Navbar />);
        const link = screen.getByRole("link", {name: "home link"});
        expect(link).toHaveAttribute('href', './Home');
    })
})