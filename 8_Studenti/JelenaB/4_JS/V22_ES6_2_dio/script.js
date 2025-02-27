const getX = () => Math.random() >= 0.5;
console.log(getX());

const prom = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000);
  }
  return setTimeout(() => reject(x), 1000);
});

/* prom
  .then((value) => console.log(`Yay! ${value}`))
  .catch((value) => console.log(`Oh no! :( ${value}`)); */

async function getData() {
  try {
    const resp = await prom;
    console.log(`Yas! ${resp}`);
  } catch (error) {
    console.log(`Nay! ${error}`);
  }
}

getData();
