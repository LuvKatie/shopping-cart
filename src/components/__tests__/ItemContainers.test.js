import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ItemContainers from "../shop/ItemContainer";

beforeEach(async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <ItemContainers />
      </MemoryRouter>
    );
  });
});

describe("ItemContainers component", () => {
  it("ItemContainer component renders correct amount of children elements", async () => {
    const itemContainer = screen.getByRole("region", {
      name: "item-container",
    });

    await waitFor(() => {
      expect(itemContainer.childNodes).toHaveLength(12);
    });
  });
});
