const maxNum = require("../script.js");

const testArray = [1, 4, 5, 89, 49, 2, -1];

test("Get max num", () => {
  expect(maxNum(testArray)).toBe(89);
});
