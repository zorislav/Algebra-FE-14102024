import { getCurrentLocation, getCityLatLon } from "./utility/functions.js";

document.addEventListener("DOMContentLoaded", main);

async function main() {
  console.log("Startam aplikaciju!");

  // Dohvati elemente
  const inputEl = document.getElementById("input");
  const buttonEl = document.getElementById("button");
  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const countryEl = document.getElementById("country");
  const inputLocationEl = document.getElementById("input-location");

  // Ev listener
  buttonEl.addEventListener("click", buttonElOnClick);

  inputEl.focus();

  displayDate();

  let location = await getCurrentLocation();
  if (location.lat && location.lon) {
    inputLocationEl.innerHTML = "Current Location";
    countryEl.innerHTML = `${location.lat} | ${location.lon}`;
  }

  if (!location.lat && !location.lon) {
    // ucitaj lokaciju iz localStorage location = ....
  }

  if (!location.lat && !location.lon) {
    inputLocationEl.innerHTML = "No Location";
    alert("Please enter city name!");
    inputEl.focus();
  } else {
    //if()
    // dohvati podatke()
  }

  async function buttonElOnClick() {
    const cityName = inputEl.value.trim();

    if (!cityName) {
      alert("Please enter city name!");
      inputEl.focus();
    } else {
      const coordinates = await getCityLatLon(cityName);
      if (coordinates) {
        inputLocationEl.innerHTML = coordinates.city;
        countryEl.innerHTML = `${coordinates.latitude} | ${coordinates.longitude}`;
      }
    }
  }

  function displayDate() {
    const mom = window.moment();

    const day = mom.format("dddd");
    const date = mom.format("DD");
    const month = mom.format("MMMM");
    const hour = mom.format("HH");
    const minute = mom.format("mm");

    timeEl.innerHTML = `${hour}:${minute}`;
    dateEl.innerHTML = `${day}, ${date} ${month}`;
  }
}
