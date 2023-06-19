import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
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
    const child = screen.getByRole("img", { name: "vandal-category" });

    await waitFor(() => {
      expect(children).toHaveLength(4);
      expect(child).toBeInTheDocument();
    });
  });

  it("When clicking on Vandal category we load in Vandal items", async () => {
    const user = userEvent.setup();
    const vandal = screen.getByRole("img", { name: "vandal-category" });

    await user.click(vandal);

    const images = await screen.findAllByRole("img");

    expect(images[0].id).toBe("Immortalized Vandal");
  });
});
