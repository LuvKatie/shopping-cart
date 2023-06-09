import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ContextProvider from "../ContextProvider";
import Navbar from "../home/Navbar";
import { AppLayout } from "../AppLayout";
import RouteSwitch from "../RouteSwitch";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  jest.restoreAllMocks;
});

describe("Cart component", () => {
  it("Cart button calls a callback", async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    render(
      <MemoryRouter>
        <ContextProvider>
          <Navbar handleClick={clickHandler} />
        </ContextProvider>
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
        <ContextProvider>
          <AppLayout />
        </ContextProvider>
      </MemoryRouter>
    );

    const cart = screen.getByRole("img", { name: "cart" });
    await user.click(cart);

    const modal = screen.getByTestId("cart-modal");

    expect(modal).toHaveClass("show-cart-modal");
  });

  it("Detect exit button for Cart modal", () => {
    render(
      <MemoryRouter>
        <ContextProvider>
          <AppLayout />
        </ContextProvider>
      </MemoryRouter>
    );
    const exit = screen.getByRole("button", { name: "modal-exit" });

    expect(exit).toBeInTheDocument();
  });

  it("User can append item to cart modal via add to cart button", async () => {
    const user = userEvent.setup();
    act(() => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <ContextProvider>
            <RouteSwitch />
          </ContextProvider>
        </MemoryRouter>
      );
    });
    await waitFor(async () => {
      const category = screen.getByTestId("vandal-category");
      await user.click(category);
    });
    const button = await screen.findAllByText(/add to cart/i);
    await user.click(button[0]);
    const modal = screen.getByTestId("cart-modal");
    const modalItems = screen.getByTestId("cart-items");

    await waitFor(() => {
      expect(button[0]).toBeInTheDocument();
      expect(modal).toBeInTheDocument();
      expect(modalItems.firstChild).toBeInTheDocument();
    });
  });

  it("Cart item has all necessary elements", async () => {
    const user = userEvent.setup();
    act(() => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <ContextProvider>
            <RouteSwitch />
          </ContextProvider>
        </MemoryRouter>
      );
    });
    await waitFor(async () => {
      const category = screen.getByTestId("vandal-category");
      await user.click(category);
    });
    const button = await screen.findAllByText(/add to cart/i);
    await user.click(button[0]);
    const cartItem = screen.getByTestId("cart-items").firstChild;
    const itemImg = screen.getByRole("img", {
      name: /immortalized vandal image/i,
    });
    const cartDelete = screen.getAllByLabelText("cart-item-delete");

    await waitFor(() => {
      expect(button[0]).toBeInTheDocument();
      expect(cartItem).toContainElement(itemImg);
      expect(cartItem).toContainElement(cartDelete[0]);
    });
  });

  it("Can delete item from Cart", async () => {
    const user = userEvent.setup();
    act(() => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <ContextProvider>
            <RouteSwitch />
          </ContextProvider>
        </MemoryRouter>
      );
    });
    await waitFor(async () => {
      const category = screen.getByTestId("vandal-category");
      await user.click(category);
    });
    const button = await screen.findAllByText(/add to cart/i);
    await user.click(button[0]);
    const cartItem = screen.getByTestId("cart-items").firstChild;
    const itemImg = screen.getByRole("img", {
      name: /immortalized vandal image/i,
    });
    const cartDelete = screen.getAllByLabelText("cart-item-delete");

    await waitFor(() => {
      expect(button[0]).toBeInTheDocument();
      expect(cartItem).toContainElement(itemImg);
      expect(cartItem).toContainElement(cartDelete[0]);
    });

    await user.click(cartDelete[0]);

    await waitFor(() => {
      expect(cartItem).not.toBeInTheDocument();
    });
  });
});
