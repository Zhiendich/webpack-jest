import { sum } from "../functions/sum";

describe("sum function", () => {
  test("sum1", () => {
    expect(sum(3, 7)).toBe(10);
  });
  test("sum2", () => {
    expect(sum(-3, 7)).toBe(4);
  });
  test("sum3", () => {
    expect(sum(3, 2)).toBe(5);
  });
});
