import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ItemContainers, { createItems } from "../shop/ItemContainer";

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
});