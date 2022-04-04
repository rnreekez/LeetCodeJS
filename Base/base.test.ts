import { base } from "./base";
import { expect } from "chai";

describe("Base Test", function () {
  const tests = [
    {
      args: "",
      expected: "",
    },
  ];

  tests.forEach(({ args, expected }, index) => {
    it(`Test #${index + 1}`, function () {
      const output = base(args);
      expect(output).to.eql(expected);
    });
  });
});
