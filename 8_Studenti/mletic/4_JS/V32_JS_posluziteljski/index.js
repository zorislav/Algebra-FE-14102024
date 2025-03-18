const _ = require("lodash"); //ovime imamo funkcionalnost biblioteke

function getType(a) {
  if (_.isNumber(a)) {
    console.log(`${a} is number`);
  }
  if (_.isString(a)) {
    console.log(`${a} is string`);
  }
  if (_.isArray(a)) {
    console.log(`${a} is array`);
  }
  if (_.isObject(a)) {
    console.log(`${a} is object`);
  }
}

const obj = {
  ime: "Mario",
  prezime: "Marić",
};

module.exports = getType;
