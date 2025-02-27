function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Wuf Wuf";
  };
}

var dog = new Dog("Skippy");
var dog2 = new Dog();
console.log(dog.name);
console.log(dog2.name);
dog.bark();

Dog.prototype.getName = function () {
  return this.name;
};

console.log(dog.getName());
