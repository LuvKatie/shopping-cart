import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ItemContainers from "../shop/ItemContainer";
import { fetchWeapons } from "../shop/ItemContainer";

describe("ItemContainers component", () => {
  it("ItemContainer component renders correct amount of children elements", () => {
    render(
      <MemoryRouter>
        <ItemContainers />
      </MemoryRouter>
    );
    const itemContainer = screen.getByRole("region", {
      name: "item-container",
    });

    expect(itemContainer.childNodes).toHaveLength(12);
  });

  it("Our fetch gets called correctly on the Valorant API", async () => {
    jest.mock("../shop/ItemContainer");
    const response = await fetchWeapons();

    expect(response.data[2].displayName).toEqual("Vandal");
  });

  it("Hovering over an item will show 'Add to cart' button", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <ItemContainers />
      </MemoryRouter>
    );

    const item = screen.getByRole("region", {
      name: "item-container",
    }).firstChild;

    await user.hover(item);
    const button = screen.getAllByText("Add to Cart");
    expect(button[0]).toBeInTheDocument();
  });
});
