import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../home/Home";

describe("Home component", () => {
    it("renders Home component", () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
})