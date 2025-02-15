
var firstName = "Ivan";
var lastName = "Horvat";

var fullName = firstName + " " + lastName;

console.log(fullName);

//2

var x = z === 2? y : 5;

var x;
var z = 1;

if( z=== 2){
    x = y;

}else{
    x=5;
}
console.log(x);

//3 petlja od 1 do 20
//može i bez ===0 u if

for(var i=1; i <=20; i++){
    if( i % 2 === 0){
        console.log("broj: "+ i + "je paran")
    } else{
        console.log("broj: "+ i + "je neparan")
    }
}