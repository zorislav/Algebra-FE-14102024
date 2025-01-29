//1. Napišite Promise koji čeka funkciju getX,
// i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti,
//  a na reject reagira sa console.log-om stringa "Oh no!"

//2. Ako već niste, prepišite sve funkcije u arrow funkcije.

// function getX() {
//   return Math.random() >= 0.5;
// }

const getX = () => Math.random() >= 0.5;

//console.log(getX());

const prom = new Promise((resolve, reject) => {
  //2 parametra prima - resolved i reject

  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000); //kada je x true zelimo pozitivan ishod (izvrsiti cemo funkciju resolve)
  }

  setTimeout(() => reject(x), 1000); //kada je x false zelimo negativan ishod (izvrsiti cemo funkciju reject)
});

prom
  .then((value) => console.log(`Yay! ${value}`))
  .catch((value) => console.log(`Oh, no!${value}`));

//2. nacin pisanja:

async function getData() {
  try {
    const odg = await prom;
    console.log(`Da! ${odg}`);
  } catch (err) {
    console.log(`Ne! ${err}`);
  }
}

getData();
