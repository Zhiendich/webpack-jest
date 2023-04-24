import { render } from "@testing-library/react";
import { useAppSelector } from "../hooks/useTypedSelector";
import { Provider } from "react-redux";
import React from "react";
import { selectCount } from "../store/reducers/counterReducer";
import { store } from "../store/store";
import Counter from "../component/Counter";

describe("Selector test", () => {
  test("counter select", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    expect(
      selectCount({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
