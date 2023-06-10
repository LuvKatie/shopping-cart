import React from "react";
import { act } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ItemContainers from "../shop/ItemContainer";
import { fetchWeapons } from "../shop/ItemContainer";

const WEAPONS = {
  data: [
    { displayName: "ares" },
    { displayName: "phantom" },
    { displayName: "vandal", skins: [] },
  ],
};

beforeEach(() => {
  act(() => {
    render(
      <MemoryRouter>
        <ItemContainers />
      </MemoryRouter>
    );
  });
  //eslint-disable-next-line
  fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(WEAPONS),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("ItemContainers component", () => {
  it("ItemContainer component renders correct amount of children elements", () => {
    const itemContainer = screen.getByRole("region", {
      name: "item-container",
    });

    expect(itemContainer.childNodes).toHaveLength(12);
  });

  it("Our fetch gets called correctly on the Valorant API", async () => {
    const response = await fetchWeapons();

    //eslint-disable-next-line
    expect(fetchMock).toHaveBeenCalled();
    //eslint-disable-next-line
    expect(fetchMock).toHaveBeenCalledWith(
      "https://valorant-api.com/v1/weapons",
      { mode: "cors" }
    );
    expect(response.data[2].displayName).toEqual("vandal");
  });

  it("Hovering over an item will show 'Add to cart' button", async () => {
    const user = userEvent.setup();

    const item = screen.getByRole("region", {
      name: "item-container",
    }).firstChild;

    await user.hover(item);
    const button = screen.getAllByText("Add to Cart");
    expect(button[0]).toBeInTheDocument();
  });
});
