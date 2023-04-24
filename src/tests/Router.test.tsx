import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import App from "../App";
import { store } from "../store/store";

describe("Router test", () => {
  test("router navigation", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    await userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("error navigation", async () => {
    render(
      <MemoryRouter initialEntries={["/sdasadsad"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });
});
