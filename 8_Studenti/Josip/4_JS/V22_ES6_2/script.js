const getx = () => Math.random() >= 0.5;

console.log(getx());

const prom = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000);
  }

  return setTimeout(() => reject(x), 1000);
});

/* prom
  .then((value) => console.log("Yay! ${value}))
  .catch((value) => console.log("Oh, no" ${value})); */

async function getData() {
  try {
    const odg = await prom;
    console.log(`Da! ${odg}`);
  } catch (err) {
    console.log(`Ne! ${err}`);
  }
}

getData();
