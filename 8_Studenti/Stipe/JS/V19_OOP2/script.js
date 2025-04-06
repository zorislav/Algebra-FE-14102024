function Dog(name){
    this.name = name || "Rex";
    this.bark = function(){
        return "wuf wuf";
    }
}

//2 kreirajte objek iz dog funk

var dog = new Dog("skippy");
var dog2 = new Dog();

console.log(dog.name);
console.log(dog2.name);
console.log(dog.bark());

//3

Dog.prototype.getName = function(){
    return this.name; 
}

console.log(dog.getName());
console.log(dog2.getName());
