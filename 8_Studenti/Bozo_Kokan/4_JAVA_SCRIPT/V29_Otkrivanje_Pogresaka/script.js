// console.log("Pocetak");
// var brojac = 0;
// console.log("Sredina");
// brojac = brojac + 1;
// console.log(brojac);
// console.log("Kraj");

var name1 = "James";
const person = {
    first: name1
};

console.log(person);

const sayHelloLinting = (fName) => {
    console.log(`Hello linting, ${fName}`);
}

// terminal npm install {package} --save-dev samo za development proces u build nece bit ukljucen
// terminal npm install {package} ukljucuje se u build product
// netreba node_module file samo package.json onda upisati npm install i npm vuce iz package.json dependencies, dobro je za automatski update verzije
// netreba node_module file samo package-lock.json onda upisati npm ci - (Clean Install) i npm vuce sve verzije iz package-lock.json, dobro za odrzavanje verzije koja je vec u projektu
// za uplodanje na git ignorirati node_modules za upload