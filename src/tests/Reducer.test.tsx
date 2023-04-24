import counterReducer, {
  decrement,
  increment,
} from "../store/reducers/counterReducer";

describe("Reducer test", () => {
  test("increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toStrictEqual({
      value: 1,
    });
  });
  test("decrement", () => {
    expect(counterReducer({ value: 0 }, decrement())).toStrictEqual({
      value: -1,
    });
  });
});
