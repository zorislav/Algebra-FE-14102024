import { getCurrentLocation } from "./utility/function";

document.addEventListener("DOMContentLoaded", main);

async function main() {
  console.log("Startam aplikaciju");

  /* Dohvati elemente*/
  const inputEl = document.getElementById("input");
  const buttonEl = document.getElementById("button");

  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");

  /* Event listener */

  buttonEl.addEventListener("click", buttonElOnClick);

  inputEl.focus();

  displayDate();

  let location = await getCurrentLocation();
  console.log(location);
  function buttonElOnClick() {
    console.log("Kliknuo!");
  }

  function displayDate() {
    const mom = window.moment();

    const day = mom.format("dddd");
    const date = mom.format("DD");
    const month = mom.format("MMMM");
    const hour = mom.format("HH");
    const minute = mom.format("mm");
    /* 19:58 */
    timeEl.innerHTML = `${hour}:${minute}`;
    dateEl.innerHTML = `${day}, ${date} ${month}`;
  }
}
