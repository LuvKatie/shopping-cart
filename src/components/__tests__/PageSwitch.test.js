import React from "react";
import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ItemContainers from "../shop/ItemContainer";

beforeEach(() => {
  act(() => {
    render(
      <MemoryRouter>
        <ItemContainers />
      </MemoryRouter>
    );
  });
});

describe("PageSwitch component", () => {
  it.skip("Page state increments when clicking next page button", async () => {
    const user = userEvent.setup();

    await act(async () => {
      await user.click(screen.getByTestId("prev"));
    });

    const images = await screen.findAllByRole("img");

    await waitFor(() => {
      expect(images[0].id).toBe("Immortalized Vandal");
    });
  });

  //   it("Page state decrements when clicking prev page button", () => {
  //     const user = userEvent.setup();
  //     const images = screen.getAllByRole("image");
  //     // First load
  //     expect(images[0].id).toBe("0");

  //     const prev = screen.getByRole("button", { name: "prev-page" });
  //     const next = screen.getByRole("button", { name: "next-page" });

  //     user.click(next);
  //     expect(images[0].id).not.toBe("0");
  //     expect(images[0].id).toBe("Immortalized Vandal");
  //   });
});
