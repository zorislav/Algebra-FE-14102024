//2. Izaberite jedan public API sa liste koji podržava REST standard,
// pruža podatke u JSON obliku i ima upute za dohvaćanje sa XMLHttpRequest objektom
// (nativni JavaScript jezik).

//3. Napišite JS kod koji se priključuje na taj API (po uzoru na primjer iz prijašnje lekcije).

//4. Izaberite jedan endpoint u APIju nad kojim možete napraviti GET request.
//Ispišite rezultat u konzolu.

//Opcija 1:

// var request = new XMLHttpRequest();

// request.open("GET", "https://dummyjson.com/products/1", true); //pozivamo metodu open (tu definiramo koju vrstu operacije zelimo napraviti
// i kuda saljemo upit i true ili false (definiraju dal je operacija (GET) realizirana kao asinkrona (true) ili sinkrona(false)))
// //ako je sinkrona - sve staje dok ne stigne odgovor, a asinkrona ne radi tako
// request.onload = function (result) {
//   //onload je funkcija koja će se izvršiti kada dobijemo odgovor
//   console.log(result.currentTarget.responseText);
// };
// request.send(); //i onda kada dobijemo odgovor možemo poslati naš upit pozivanjem metode send

//Opcija 2:

function getData() {
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((responseData) => console.log(responseData.description))
    .catch((err) => console.log(err));

  //response.json vraća promise (u obliku kojem želimo), a rezultat toga što vraća response.json će biti u .then(responseData)
  // catch(err) stavljamo u slučaju da unesemo krivo npr. url pa da nam izbaci 404 error
}

getData();

//ako želimo da nam dohvaćeni podaci budu u JSON formatu:

// function getData() {
//     fetch("https://dummyjson.com/products/1")
//       .then((response) => response.json())
//       .then((responseData) => console.log(JSON.stringify(responseData)));
//      .then(responseData)
//   }

//   getData();

// Opcija 3: async await

async function getData2() {
  try {
    const response = await fetch("https://dummyjson.com/products/1"); //kada ovaj promise bude razrješen na response ćemo primjeniti json metodu da iz
    // strima podataka izvučemo podatke kako želimo lijepo da piše
    const responseData = await response.json(); //želimo čekati i da se json izvrši pa pišemo await, a json isto vraća promise
    //mi onda u toj konstanti responseData imamo odgovor i onda taj odgovor ispišemo
    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
}

getData2();
