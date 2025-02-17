//export
//import

export default function ispisiPozdrav() {
  console.log("Hello world");
}

export function zbrojDvaBroja(a, b) {
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

export var Exercise = (function () {
  var steps = 5;

  function increasSteps() {
    steps++;
  }

  return {
    getTotalSteps: function () {
      return steps;
    },
    walk: function () {
      increasSteps();
    },
  };
})();
/* export default ispisiPozdrav; */
