import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
// import Cart from "../cart/Cart";
import Navbar from "../home/Navbar";
import { AppLayout } from "../AppLayout";
import RouteSwitch from "../RouteSwitch";
import userEvent from "@testing-library/user-event";
// import { act } from "react-test-renderer";

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

  it("Cart component can store items which user adds to it", async () => {
    const user = userEvent.setup();
    act(() => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <RouteSwitch />
        </MemoryRouter>
      );
    });
    await waitFor(async () => {
      const category = screen.getByTestId("vandal-category");
      await user.click(category);
    });
    const button = await screen.findAllByText(/add to cart/i);
    const modal = screen.getByTestId("cart-modal");
    const modalItems = screen.getByTestId("cart-items");

    await waitFor(() => {
      expect(button[0]).toBeInTheDocument();
      expect(modal).toBeInTheDocument();
      expect(modalItems.firstChild).toBeInTheDocument();
    });
  });
});
