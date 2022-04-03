import { groupAnagrams } from "./49-Group-Anagrams";
import { expect } from "chai";

describe("49-Group-Anagrams", function () {
  const tests = [
    {
      args: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
    {
      args: [""],
      expected: [[""]],
    },
    {
      args: ["a"],
      expected: [["a"]],
    },
  ];

  tests.forEach(({ args, expected }, index) => {
    it(`Test #${index + 1}`, function () {
      const output = groupAnagrams(args);
      expect(output).to.equal(expected);
    });
  });
});
