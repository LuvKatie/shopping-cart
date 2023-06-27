import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ContextProvider from "../ContextProvider";
import Shop from "../shop/Shop";
import RouteSwitch from "../RouteSwitch";

describe("Shop component", () => {
  it("Shop component properly loads", async () => {
    act(() => {
      render(
        <MemoryRouter>
          <ContextProvider>
            <Shop />
          </ContextProvider>
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      const shop = screen.getByTestId("shop-page");

      expect(shop).toBeInTheDocument();
    });
  });

  it("ItemContainers component properly loads upon Shop component load", () => {
    act(() => {
      render(
        <MemoryRouter>
          <ContextProvider>
            <Shop />
          </ContextProvider>
        </MemoryRouter>
      );
    });

    const container = screen.getByRole("region", { name: "item-container" });

    expect(container).toBeInTheDocument();
  });

  it("ItemContainer component renders upon visiting Shop link", () => {
    act(() => {
      render(
        <MemoryRouter>
          <ContextProvider>
            <Shop />
          </ContextProvider>
        </MemoryRouter>
      );
    });

    const itemContainer = screen.getByRole("region", {
      name: "item-container",
    });

    expect(itemContainer).toBeInTheDocument();
  });

  it("Nav and Footer renders upon clicking Shop link", async () => {
    const user = userEvent.setup();

    act(() => {
      render(
        <MemoryRouter>
          <ContextProvider>
            <RouteSwitch />
          </ContextProvider>
        </MemoryRouter>
      );
    });

    const shop = screen.getByRole("link", { name: "shop" });
    await user.click(shop);

    waitFor(() => {
      const navbar = screen.getByRole("navigation");
      const footer = screen.getByRole("contentinfo");
      expect(navbar).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });
  });
});
