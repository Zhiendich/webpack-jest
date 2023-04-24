import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Text from "../component/Text";
import "@testing-library/jest-dom";

describe("Text component", () => {
  test("Has element", async () => {
    render(<Text />);
    const text = screen.getByText(/Lorem ipsum dolor/i);
    const button = screen.getByRole("button");
    const data = await screen.findByText(/data/i);
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(data).toBeInTheDocument();
  });
  test("Click event", async () => {
    render(<Text />);
    const button = screen.getByTestId("toggle-button");
    expect(screen.queryByTestId("toggle-element")).toBeNull();
    fireEvent.click(button);
    expect(screen.queryByTestId("toggle-element")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByTestId("toggle-element")).toBeNull();
  });
  test("input change", async () => {
    render(<Text />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("input-element")).toContainHTML("");
    fireEvent.input(input, {
      target: { value: "12345" },
    });
    expect(screen.queryByTestId("input-element")).toContainHTML("12345");
  });
});
