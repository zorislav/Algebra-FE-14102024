// 1. Napišite Promise koji čeka funkciju getX,
// i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa console.log-om stringa "Oh no!"
// 2. Ako već niste, prepišite sve funkcije u arrow funkcije.

// function getX() {
//   return Math.random() >= 0.5; // ova dunkcija vraca true ili false
// }

const getX = () => Math.random() >= 0.5;

// console.log(getX());

const prom = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    //dakle ako je x true

    return setTimeout(() => resolve(), 1000);
  } else {
    setTimeout(() => reject(), 1000);
  }
});

// prom.then(() => console.log("Yay!!")).catch(() => console.log("Oh no!"));

async function getData() {
  try {
    // const odg = fetch()
    const odgovor = await prom;
    console.log(`Da! ${odgovor}`);
  } catch (err) {
    console.log(`Ne! ${err}`);
  }
}
getData();
