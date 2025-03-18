var auto = {
  marka: {
    tip: "Volvo",
    model: "V40",
  },
  boja: "crvena",
  brzina: 60,
  maxBrzina: 160,
  godiste: 1998,
  ubrzaj: function (sekunde) {
    while ((sekunde > 0) & (this.brzina < this.maxBrzina)) {
      this.brzina = Math.min(this.brzina + 5, this.maxBrzina);
      sekunde -= 1;
    }
  },
  zakoci: function (sekunde) {
    while ((sekunde > 0) & (this.brzina > 0)) {
      this.brzina = Math.max(this.brzina - 20, 0);
      sekunde -= 1;
    }
  },
  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
  },
};

console.log(auto);

auto.ubrzaj(2);
auto.zakoci(100);
auto.promijeniBoju("plava");

console.log(auto);

console.log(
  "Moj auto je " +
    auto.marka.tip +
    " " +
    auto.marka.model +
    " iz godine " +
    auto.godiste +
    "."
);

console.log(JSON.stringify(auto));
