import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RouteSwitch from "../RouteSwitch";
import { MemoryRouter } from "react-router-dom";
// import userEvent from "@testing-library/user-event";

describe("Home component", () => {
  it("Renders Home page", () => {
    render(
      <MemoryRouter>
        <RouteSwitch />
      </MemoryRouter>
    );
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("Renders Navbar component within Home component", () => {
    render(
      <MemoryRouter>
        <RouteSwitch />
      </MemoryRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("Renders Footer component within Home component", () => {
    render(
      <MemoryRouter>
        <RouteSwitch />
      </MemoryRouter>
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("Home contains landing page img", () => {
    render(
      <MemoryRouter>
        <RouteSwitch />
      </MemoryRouter>
    );
    expect(screen.getByRole("main")).toContainElement(
      screen.getByRole("img", { name: "landing-image" })
    );
  });
});
