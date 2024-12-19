var x = "Lorem ipsum";
var y = 2345;
var z = "2345";
var q = false;
var w;

x += "3" + 1; //x = x + "3" + 1;
var baaa = "b" + "a" + +"a" + "a";
//baNaNa (dobili smo Nan zbog ova dva + + jer to ne može)
console.log(x);
console.log(baaa);
console.log(typeof z);

if (q === 0) console.log("Isti su");
