const maxNumber = require("../script.js");

const testArray = [1,4,9,89,49,2,-1];

test("Get max number",()=>{

    expect(maxNumber(testArray)).toBe(89);

});