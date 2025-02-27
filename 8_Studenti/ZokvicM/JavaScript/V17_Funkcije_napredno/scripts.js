// 1.
var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe")();
var z = vratiNesto()();
var q = vratiNesto;

console.log(y);
console.log(z);
console.log(q);

(function () {})();

var myF = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(x);

console.log(myF());

//Bonus

var vanjskaFn = (function () {
  var lokalnaVar = 10;
  return {
    get: function () {
      return lokalnaVar;
    },
    set: function (novaVrijednost){
      lokalnaVar = novaVrijednost;
    },
  };
})();

console.log(vanjskaFn);
console.log(vanjskaFn.get());
vanjskaFn.set(22);
console.log(vanjskaFn.get());