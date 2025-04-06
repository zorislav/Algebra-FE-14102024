function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Wuf Wuf";
  };
}

const dog = new Dog("Skippy");

Dog.prototype.getName = function () {
  return this.name;
};

console.log(dog.getName());
