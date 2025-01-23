const fn = () => "Bok";

console.log(fn());

const fn1 = (par) => `Dobio sam ${par}`; 
// jedan argument ne mora biti u (), ako ima vise treba biti i onda je kontekst `Dobio sam ${par} i ${par2}`
// ili 
// {let odg = `Dobio sam ${par} i ${par2}` 
// return odg;
// }

console.log(fn('22'));