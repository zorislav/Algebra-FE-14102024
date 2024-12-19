var x = "Lorem ipsum";
var y = 2345;
var z = "2345";
var q = false;
var w;

x += "3" + 1; //x = x + "3" + 1;  rezultat će biti "Lorem ipsum31"
var baaa = "b" + "a" + +"a" + "a";
//baNaNa (dobili smo NaN zbog ovog +"a" koji bi htio konvertirati "a" u broj a to ne može pa će biti NaN)
console.log(x);
console.log(baaa);
console.log(typeof z);

if (q === 0) console.log("Isti su");
