import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { fetchWeapons } from "../shop/Items";
import ItemContainers from "../shop/ItemContainer";

const WEAPONS = {
  data: [
    { displayName: "ares" },
    { displayName: "phantom" },
    { displayName: "vandal", skins: [] },
  ],
};

beforeEach(async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <ItemContainers></ItemContainers>
      </MemoryRouter>
    );
  });
<<<<<<< HEAD
=======

  const user = userEvent.setup();
  const vandal = screen.getByRole("img", { name: "vandal-category" });
  await user.click(vandal);

>>>>>>> category-selection
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

describe("Items component", () => {
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
    await waitFor(async () => {
      const user = userEvent.setup();

      const item = screen.getByRole("region", {
        name: "item-container",
      }).firstChild;

      await user.hover(item);
      const button = screen.getAllByText("Add to Cart");
      expect(button[0]).toBeInTheDocument();
    });
  });
});
