// 1. Napišite Promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa console.log-om stringa "Oh no!"
// 2. Ako već niste, prepišite sve funkcije u arrow funkcije.

// function getX() {
// 	return Math.random() >= 0.5;
// }

const getX = () => Math.random() >= 0.5;

// console.log(getX());

const prom = new Promise((resolve, reject) => {

    const x = getX();

    if (x) {
       return setTimeout(() => resolve(x),1000);
    }

    return setTimeout(() => reject(x),1000)
});

// prom
// .then((value) => console.log(`Yay ${value}`))
// .catch((value) => console.log(`Oh no ${value}`));

async function getData() {
    
    try {

        const odg = await prom;
        console.log(`Da! ${odg}`);

    } 
    catch(err){

        console.log(`Ne! ${err}`);

    }

}

getData();