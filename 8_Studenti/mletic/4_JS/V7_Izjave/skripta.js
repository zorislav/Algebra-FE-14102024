//1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.

var i = 3;

while (i <= 20) {
  if (i % 9 !== 0) console.log(i);

  i++;
}
