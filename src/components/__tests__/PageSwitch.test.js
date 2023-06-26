import React from "react";
import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContextProvider from "../ContextProvider";
import "@testing-library/jest-dom";
import Shop from "../shop/Shop";

beforeEach(async () => {
  act(() => {
    render(
      <ContextProvider>
        <Shop />
      </ContextProvider>
    );
  });

  const user = userEvent.setup();
  const vandal = screen.getByRole("img", { name: "vandal-category" });
  await user.click(vandal);
});

describe("PageSwitch component", () => {
  it("Page renders next set of items relative to our current page", async () => {
    const user = userEvent.setup();
    const button = screen.getByTestId("next");
    const images = await screen.findAllByRole("img");

    expect(images[0].id).toBe("Immortalized Vandal");

    await act(async () => {
      await user.click(button);
    });

    await waitFor(async () => {
      expect(images[0].id).not.toBe("Immortalized Vandal");
      expect(images[0].id).toBe("Aristocrat Vandal");
    });
  });

  it("Page renders previous set of items relative to our current page", async () => {
    const user = userEvent.setup();
    const images = await screen.findAllByRole("img");

    expect(images[0].id).toBe("Immortalized Vandal");

    const next = screen.getByRole("button", { name: "next-page" });
    await act(async () => {
      await user.click(next);
    });

    await waitFor(async () => {
      expect(images[0].id).not.toBe("Immortalized Vandal");
      expect(images[0].id).toBe("Aristocrat Vandal");
    });

    const prev = screen.getByRole("button", { name: "prev-page" });
    await act(async () => {
      await user.click(prev);
    });

    await waitFor(async () => {
      expect(images[0].id).not.toBe("Aristocrat Vandal");
      expect(images[0].id).toBe("Immortalized Vandal");
    });
  });
});
