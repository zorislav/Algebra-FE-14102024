// export
//import

import { Exercise } from "./prva";
import { getTotalSteps } from "./vjezba";

export default function ispisiPozdrav(){
  console.log("hello world!");
}

export function zbrojiDvaBroja(a,b){
  return a + b;
};

export function pomnoziDvaBroja(a,b){
  return a + b;
}

export const mojNiz = [1,2,3,4];
const mojObj = {
  ime: "Ivan",
  prezime: "Horvat",
};



export var Exercise = (function(){
 var steps = 0;
 function increaseSteps(){
  steps++;
 }
 
 return{
  getTotalSteps: function(){
    return steps;
  },
  walk: function(){
increaseSteps();
 }
})();



//export default ispisiPozdrav;   