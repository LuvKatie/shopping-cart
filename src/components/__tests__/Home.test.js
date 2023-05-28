import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../home/Home";
// import userEvent from "@testing-library/user-event";

describe("Home component", () => {

    it("Renders Home page", () => {
        render(<Home />)
        expect(screen.getByRole("main")).toBeInTheDocument();
    })
    
    it("Renders Navbar component within Home component", () => {
        render(<Home />)
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    })

    it("Renders Footer component within Home component", () => {
        render(<Home />)
        expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    })
})