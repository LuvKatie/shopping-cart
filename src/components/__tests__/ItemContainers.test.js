import React from "react";
import { act } from "react-test-renderer";
<<<<<<< HEAD
import { render, screen, waitFor } from "@testing-library/react";
=======
import { render, screen } from "@testing-library/react";
>>>>>>> category-selection
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Shop from "../shop/Shop";

beforeEach(async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );
  });
});

describe("ItemContainers component", () => {
<<<<<<< HEAD
  it("ItemContainer component renders correct amount of children elements", async () => {
    const children = await screen.findAllByRole("img");

    await waitFor(() => {
      expect(children).toHaveLength(12);
    });
=======
  it("ItemContainer component renders upon visiting Shop link", async () => {
    const itemContainer = screen.getByRole("region", {
      name: "item-container",
    });

    expect(itemContainer).toBeInTheDocument();
>>>>>>> category-selection
  });
});
