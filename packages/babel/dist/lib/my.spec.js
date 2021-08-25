"use strict";

var _my = _interopRequireDefault(require("./my"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("# my", () => {
  it("## my", () => {
    expect((0, _my.default)()).toBe("my");
  });
});