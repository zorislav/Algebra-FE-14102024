/*1. Odite na stranicu https://dummyjson.com// 

2. Izaberite jedan public API sa liste koji podržava REST standard,
pruža podatke u JSON obliku i ima upute za dohvaćanje sa XMLHttpRequest objektom (nativni JavaScript jezik).

3. Napišite JS kod koji se priključuje na taj API (po uzoru na primjer iz prijašnje lekcije).

4. Izaberite jedan endpoint u APIju nad kojim možete napraviti GET request. 
Ispišite rezultat u konzolu.*/


// Opcija 1

// var request = new XMLHttpRequest();

// request.open("GET", "https://dummyjson.com/products/2", true);

// request.onload = function(result){
//     console.log(result.currentTarget.responseText);

// }

// request.send();


// Opcija 2

function getData() {
    fetch("https://dummyjson.com/products/1")
    .then(response => response.json())
    .then((responseData) => console.log(JSON.stringify(responseData)))
    .catch((err) => console.log(err));
}

getData();

// Opcija 2

async function getData2() {

  const response = await fetch("https://dummyjson.com/products/1");
  const responseData = await response.json()

  console.log(responseData);
}

// Opcija 3


async function getData2(){
    try {
        const response = await fetch("https://dummyjson.com/products/1");
        const responseData = await response.json();
      
        console.log(responseData);

    } catch (error) {
        console.log(error);
    }
}