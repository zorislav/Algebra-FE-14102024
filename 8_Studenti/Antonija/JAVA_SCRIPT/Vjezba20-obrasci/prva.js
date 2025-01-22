//1. Napišite modul za brojanje broja koraka. Modul će se brinuti o povećanju broja koraka, a izvana će se moći pristupiti dvjema metodama modula: walk() i getTotalSteps().

export const Exercise = (function(){   
  var steps = 0;
  function increaseSteps(){
      steps++;
  }
  return{
      getTotalSteps:function(){
          return steps;
      },
      walk: function(){
          increaseSteps();            
      }
  };
}());

//2. Exportajte modul iz datoteke.