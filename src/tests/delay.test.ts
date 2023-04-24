import { delay } from "../functions/delay";

describe("delay", () => {
  test("delay1", async () => {
    const sum = await delay(() => 5 + 5, 2000);
    expect(sum).toBe(10);
  });
});
