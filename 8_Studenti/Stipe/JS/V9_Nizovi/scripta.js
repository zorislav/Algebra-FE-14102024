var names = ['John', 'Jane', 'Bob',, 'Mike'];

//console.log(names);

//1.

for(var i=0; i< names.length; i++){
    console.log(names[i]);
}

//for..of 

//for(var name of names){
  //  console.log(name);
//}

//2. dodaj svoje ime na kraj niza

names.push('Stipe');
console.log(names);

//3

for(var i=0; i<= names.length-1; i++){
    console.log(names[i]);
    if (names[i]==='Jane'){
        break;
    }
}

//for (var name of names){
//    console.log(name);
//    if (name==='Jane') break;
//}

//4 ukolni undefine iz niza



for(var i=0; i<names.length; i++){
   if(!names[i])  {
    names.splice(i,1);
   }  
}

console.log(names);