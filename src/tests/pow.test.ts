import { pow } from "../functions/pow";

describe("pow", () => {
  test("pow1", () => {
    expect(pow(4)).toBe(16);
  });
  test("pow2", () => {
    expect(pow(2)).toBe(4);
  });
  test("pow called", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    pow(3);
    pow(6);
    expect(spyMathPow).toBeCalledTimes(2);
  });
});
