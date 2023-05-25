import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Navbar from "../home/Navbar";

describe("Navbar component children", () => {
    it("calls handleClick on click", async () => {
        const onClickMock = jest.fn(e => {
            e.preventDefault();
        });
        
        const user = userEvent.setup();

        render(<Navbar onClick={onClickMock} />);
        const link = screen.getByRole("link", {name: "home link"});

        await user.click(link);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    })
})