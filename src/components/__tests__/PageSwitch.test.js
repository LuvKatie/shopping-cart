import React from "react";
import { act } from "react-test-renderer";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ItemContainers from "../shop/ItemContainer";

beforeEach(async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <ItemContainers></ItemContainers>
      </MemoryRouter>
    );
  });
});

describe("PageSwitch component", () => {
  it("Page state increments when clicking next page button", async () => {
    await waitFor(async () => {
      const user = userEvent.setup();
      const images = await screen.findAllByRole("img");

      expect(images[0].id).toBe("0");

      const next = screen.getByRole("button", { name: "next-page" });
      await user.click(next);
      const next2 = screen.getByRole("button", { name: "next-page" });

      expect(next2).toBeInTheDocument();
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
