import React from "react";
import { act } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RouteSwitch from "../RouteSwitch";
import { MemoryRouter } from "react-router-dom";
import ContextProvider from "../ContextProvider";
// import userEvent from "@testing-library/user-event";

beforeEach(() => {
  act(() => {
    render(
      <MemoryRouter>
        <ContextProvider>
          <RouteSwitch />
        </ContextProvider>
      </MemoryRouter>
    );
  });
});

describe("Home component", () => {
  it("Renders Home page", () => {
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("Renders Navbar component within Home component", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("Renders Footer component within Home component", () => {
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("Home contains landing page img", () => {
    expect(screen.getByRole("main")).toContainElement(
      screen.getByRole("img", { name: "landing-image" })
    );
  });
});
