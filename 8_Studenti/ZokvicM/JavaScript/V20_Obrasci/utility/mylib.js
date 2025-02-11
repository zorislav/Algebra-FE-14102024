export default function ispisiPozdrav() {
  console.log("hello world!");
}

export function zbrojiDvaBroja(a, b) {
  return a + b;
}

export function pomnožiDvaBroja(a, b) {
  return a * b;
}

export const mojNiz = [1, 2, 3, 4];

export const mojObjekt = {
  ime: "Ivan",
  prezime: "Horvat",
};

export var Exercise = (function () {
  var steps = 5;
  function increaseSteps() {
    steps++;
  }
  return {
    getTotalSteps: function () {
      return steps;
    },
    walk: function () {
      increaseSteps();
    },
  };
})();
