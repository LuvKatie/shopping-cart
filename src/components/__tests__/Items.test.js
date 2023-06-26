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
  act(() => {
    render(
      <MemoryRouter>
        <ItemContainers></ItemContainers>
      </MemoryRouter>
    );
  });

  const user = userEvent.setup();

  await waitFor(async () => {
    const vandal = screen.getByTestId("vandal-category");
    await user.click(vandal);
    const item = await screen.findAllByTestId("item-options");
    await user.hover(item[0]);
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Items component", () => {
  it("Our fetch gets called correctly on the Valorant API", async () => {
    //eslint-disable-next-line
    fetchMock = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(WEAPONS),
      })
    );
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
    const button = await screen.findAllByText(/add to cart/i);

    await waitFor(async () => {
      expect(button[0]).toBeInTheDocument();
    });
  });

  it("Hovering over an item will show buttons to increment and decrement", async () => {
    const increment = await screen.findAllByLabelText("increment-amount");
    const decrement = await screen.findAllByLabelText("decrement-amount");

    await waitFor(async () => {
      expect(increment[0]).toBeInTheDocument();
      expect(decrement[0]).toBeInTheDocument();
    });
  });

  it("Clicking increment or decrement increases or decreases quantity", async () => {
    const user = userEvent.setup();
    const increment = await screen.findAllByLabelText("increment-amount");
    const decrement = await screen.findAllByLabelText("decrement-amount");
    const input = await screen.findAllByLabelText("item-amount");

    await user.click(increment[0]);

    waitFor(() => {
      expect(input).toHaveValue(1);
    });

    await user.click(decrement[0]);

    waitFor(() => {
      expect(input).toHaveValue(0);
    });
  });
});
