//Opcija 1

// var request = new XMLHttpRequest(); //formiramo zahtjev prema...

// request.open("GET", "https://dummyjson.com/products/1", true);

// request.onload = function (result) {
//   console.log(result.currentTarget.responseText);
// };

// request.send();

//Opcija 2

function getData() {
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json()) //json vraca Promise, nakon njega kad koristimo then, vraća objekt!
    .then((responseData) => console.log(responseData.description))
    .catch((err) => console.log(err));
}
getData();

async function getData2() {
  try {
    const response = await fetch("https://dummyjson.com/products/1");
    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
}

getData2();
