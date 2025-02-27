const maxnumber = require("../script.js");

const testArray = [1, 4, 5, 89, 49, 2, -1];

test("Get max number", () => {
  expect(maxnumber(testArray)).toBe(89);
});
