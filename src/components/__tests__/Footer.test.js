import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../home/Footer";
import { MemoryRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";

describe("Footer component children", () => {
  it("Contains correct children element for Footer", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const footer = screen.getByRole("contentinfo");
    const credit = screen.getByRole("link", { name: "api-credit" });
    const github = screen.getByRole("img", { name: "github" });
    expect(footer).toContainElement(credit);
    expect(footer).toContainElement(github);
  });
});
