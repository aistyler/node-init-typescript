
import { hello } from "./index";

describe("# index", () => {
  it("## hello", () => {
    expect(hello()).not.toBe(null);
  });
});
