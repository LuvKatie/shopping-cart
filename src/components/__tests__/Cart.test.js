import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Cart from "../cart/Cart";
// import userEvent from "@testing-library/user-event";
// import { act } from "react-test-renderer";

beforeEach(() => {
  render(
    <MemoryRouter>
      <Cart />
    </MemoryRouter>
  );
});

describe("Cart component", () => {});
