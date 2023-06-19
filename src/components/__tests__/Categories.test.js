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
