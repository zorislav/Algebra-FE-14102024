// 1.
var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() 
   { 
    return x; 
   }
   return f;
}
var y = vratiNesto("Jane Doe");
var r = vratiNesto("Jane Doe")();
var z = vratiNesto()();
var w = vratiNesto(x)();
var q = vratiNesto;

console.log(y);
console.log(r);
console.log(z);
console.log(w);
console.log(q);

//2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". 
// Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

var myF = (
    function(name)
    {
        var x = name;
        function f() 
        { 
         return x; 
        }
        return f;        
    }
)(x);

console.log(myF());

/// Bonus

var vanjskaFn = (
   function () {
    var lokalnaVar = 10;
    return {get: function () 
        {
            return lokalnaVar;
        },
        set: function (novaVrijednost) 
        {
            lokalnaVar = novaVrijednost;
        },
    }
   }
)();

console.log(vanjskaFn);
console.log(vanjskaFn.lokalnaVar);
console.log(vanjskaFn.get());
vanjskaFn.set(22);
console.log(vanjskaFn.get());