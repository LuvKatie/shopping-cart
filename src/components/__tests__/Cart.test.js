import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
// import Cart from "../cart/Cart";
import Navbar from "../home/Navbar";
import { AppLayout } from "../AppLayout";
import userEvent from "@testing-library/user-event";
// import { act } from "react-test-renderer";

beforeEach(() => {});

afterEach(() => {
  jest.restoreAllMocks;
});

describe("Cart component", () => {
  it("Cart button calls a callback", async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    render(
      <MemoryRouter>
        <Navbar handleClick={clickHandler} />
      </MemoryRouter>
    );

    const cart = screen.getByRole("img", { name: "cart" });
    await user.click(cart);

    expect(clickHandler).toBeCalledTimes(1);
  });

  it("Clicking our Cart will display the Cart modal", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );

    const cart = screen.getByRole("img", { name: "cart" });
    await user.click(cart);

    const modal = screen.getByTestId("cart-modal");

    expect(modal).toHaveClass("show");
  });

  it("Detect exit button for Cart modal", () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );
    const exit = screen.getByRole("button", { name: "modal-exit" });

    expect(exit).toBeInTheDocument();
  });
});
