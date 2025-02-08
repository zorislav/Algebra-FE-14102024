//1. Napišite Promise koji čeka funkciju getX,
// i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti,
//  a na reject reagira sa console.log-om stringa "Oh no!"

//2. Ako već niste, prepišite sve funkcije u arrow funkcije.

// function getX() {
//   return Math.random() >= 0.5;
// }

const getX = () => Math.random() >= 0.5;
//ova funkcija vraća true ili false (Math.random generira nasumične brojeve između 0 i 1), a funkcija onda gleda jel taj broj veći ili jednak 0,5 i prema tome izbacuje u konzoli true ili false

//console.log(getX());

const prom = new Promise((resolve, reject) => {
  //2 parametra prima - resolved i reject

  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000); //kada je x true zelimo pozitivan ishod (izvrsiti cemo funkciju resolve)
  }

  return setTimeout(() => reject(x), 1000); //kada je x false zelimo negativan ishod (izvrsiti cemo funkciju reject)
});

prom
  .then((value) => console.log(`Yay! ${value}`))
  .catch((value) => console.log(`Oh, no! ${value}`));

//2. nacin pisanja async await (moderni JS): ovo se koristi za nešto gdje može doći do errora
// await pričeka da se promise razriješi i tek onda izvršava ostatak koda

async function getData() {
  try {
    const odg = await prom;
    console.log(`Da! ${odg}`);
  } catch (err) {
    console.log(`Ne! ${err}`);
  }
}

getData();

//moj dodatak za objašnjenje arrow funkcije
const fn = (ime) => console.log(`Bok ${ime}`);
fn("Edina");

const fn2 = (ime) => `Bok ${ime}`;

console.log(fn2("Edina"));

//01:18 predavanja
