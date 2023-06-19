import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
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

describe("Categories component", () => {
  it("Categories component loads upon landing on Shop", async () => {
    const children = await screen.findAllByRole("img");
    const firstChild = screen.getByRole("img", { name: "vandal-category" });

    await waitFor(() => {
      expect(children).toHaveLength(4);
      expect(firstChild).toBeInTheDocument();
    });
  });
});
