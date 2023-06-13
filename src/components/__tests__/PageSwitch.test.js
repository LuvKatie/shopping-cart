import React from "react";
import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Shop from "../shop/Shop";

beforeEach(() => {
  act(() => {
    render(<Shop />);
  });
});

describe("PageSwitch component", () => {
  it("Page state increments when clicking next page button", async () => {
    const user = userEvent.setup();
    const button = screen.getByTestId("next");

    await act(async () => {
      await user.click(button);
    });

    await waitFor(async () => {
      const images = await screen.findAllByRole("img");
      expect(images[0].id).toBe("Glitchpop Vandal");
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
