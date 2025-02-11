function Dog(name){
  this.name = name || "Rex";
  this.bark = function() {
    return "Vau Vau Grr Grr";
  }
}

var dog = new Dog("Remi");
var dog2 = new Dog();

console.log(dog.name);
console.log(dog2.name);
console.log(dog.bark());

Dog.prototype.getName = function(){
  return this.name;
}

console.log(dog.getName());
console.log(dog2.getName());