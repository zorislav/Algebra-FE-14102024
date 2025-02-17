//export
//import

//dvije su vrste exportiranja:
// 1.
export default function ispisiPozdrav() {
  console.log("hello world");
}

// export default ispisiPozdrav;

export function zbrojiDvaBroja(a, b) {
  return a + b;
}
export function pomnoziDvaBroja(a, b) {
  return a * b;
}

export const mojNiz = [1, 2, 3, 4];

export const mojObj = {
  ime: "Ivan",
  prezime: "Horvat",
};

export var Excercise = (function () {
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
