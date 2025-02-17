import { getCurrentLocation } from "./utility/functions.js";
import { getCityLatLon } from "./utility/functions.js";
import { getLocationFromLocalStorage } from "./utility/functions.js";
import { getWeatherData } from "./utility/functions.js";

document.addEventListener("DOMContentLoaded", main);

async function main() {
  console.log("startam aplikaciju");

  //Dohvati elemente

  const inputEl = document.getElementById("input");
  const buttonEl = document.getElementById("button");
  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const countryEl = document.getElementById("country");
  const inputLocationEl = document.getElementById("input-location");
  const currentWeatherItemsEl = document.getElementById(
    "current-weather-items"
  );

  //Event listener

  buttonEl.addEventListener("click", buttonElOnClick);

  inputEl.focus();

  displayDate();

  let location = await getCurrentLocation();
  if (location.lat && location.lon) {
    inputLocationEl.innerHTML = "Current Location";
    countryEl.innerHTML = `${location.lat} | ${location.lon}`;
  }
  if (!location.lat && !location.lon) {
    //učitaj lokaciju iz localStorage location= .....
    location = getLocationFromLocalStorage();
  }
  if (!location.lat && !location.lon) {
    inputLocationEl.innerHTML = "No Location";
    alert("Please enter city name!");
    inputEl.focus();
  } else {
    if (location.city) {
      inputLocationEl.innerHTML = location.city;
    }
    // dohvati podatke()
    getWeatherData();
    // displayDate()
    showWheatherData();
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
    const mom = window.moment(); //mom se odnosi na moment

    const day = mom.format("dddd");
    const date = mom.format("DD");
    const month = mom.format("MMMM");
    const hour = mom.format("HH");
    const minute = mom.format("mm");

    timeEl.innerHTML = `${hour}:${minute}`;
    dateEl.innerHTML = `${day}, ${date} ${month}`;
  }

  function showWheatherData() {
    let humidity = 0;
    let pressure = 0;
    let wind_speed = 0;
    let sunrise = 0;
    let sunset = 0;
    currentWeatherItemsEl.innerHTML = `
    
    <div class="weather-item">
        <div>Humidity</div>
        <div>${humidity}</div>
    </div>
    <div class="weather-item">
        <div>Pressure</div>
        <div>${pressure}</div>
    </div>
    <div class="weather-item">
        <div>Wind speed</div>
        <div>${wind_speed}</div>
    </div>
    <div class="weather-item">
        <div>Sunrise</div>
        <div>${sunrise}</div>
    </div>
    <div class="weather-item">
        <div>Sunset</div>
        <div>${sunset}</div>
    </div>
    
    `;
  }
}
