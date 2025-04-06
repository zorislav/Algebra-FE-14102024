// 1.

var num = 3;

while (num <= 20) {
    if (num % 9 !== 0) {
        console.log(num);
    }
    num++;
}

// 1. alternativa

for (let i = 3; i <= 20; i++) {
    if (i % 9 !== 0) {
        console.log(i);
    }
}

// 2.

var varOne = 0;
for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
        varOne++;
    }
}
console.log(varOne);

// Bonus

const niz = ['a', 'b', 'c', 'd'];

for (let i = 0; i < niz.length; i++) {
    console.log(niz[i]);
}

// for...of

for (const element of niz) {
    console.log(element);
}

// for...in

const objekt = {a: 1, b: 2, c: 3};

for (const svojstvo in objekt) {
    console.log(svojstvo + ' : ' + objekt[svojstvo]);
}