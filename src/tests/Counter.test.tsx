import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import React from "react";
import Counter from "../component/Counter";
import userEvent from "@testing-library/user-event";
import { store } from "../store/store";

describe("Counter test", () => {
  test("Test router", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    const incrementBtn = screen.getByTestId("counter-increment");
    const decrementBtn = screen.getByTestId("counter-decrement");
    expect(screen.getByTestId("counter-value")).toHaveTextContent(
      "Счетчик = 10000"
    );
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId("counter-value")).toHaveTextContent(
      "Счетчик = 10001"
    );
  });
});
