import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ItemContainers, { createItems } from "../shop/ItemContainer";
import { fetchWeapons } from "../shop/ItemContainer";

describe("ItemContainers component", () => {
  it("createItems returns correct elements", () => {
    render(
      <MemoryRouter>
        <ItemContainers />
      </MemoryRouter>
    );
    const itemsMock = jest.fn((amount) => amount);
    const elements = createItems(itemsMock(4));

    expect(elements).toHaveLength(4);
  });

  it("Our fetch gets called correctly on the Valorant API", async () => {
    jest.mock("../shop/ItemContainer");
    const response = await fetchWeapons();

    expect(response.data[2].displayName).toEqual("Vandal");
  });
});
