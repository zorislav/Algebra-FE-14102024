const _ = require("lodash");

function getType(a) {
    if(_.isNumber(a)){
        console.log(`${a} is number`);
    }
    if(_.isString(a)){
        console.log(`${a} is string`);
    }
    if(_.isArray(a)){
        console.log(`${a} is array`);
    }
    if(_.isObject(a)){
        console.log(`${a} is object`);
    }
}

const obj = {
    ime: "Ivica",
    prezime: "Perić"
}

module.exports = getType;