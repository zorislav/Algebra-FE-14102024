import {
  getCurrentLocation,
  getCityLatLon,
  getLocationFromLocalStorage,
  getWeatherData,
} from "./utility/functions.js";

import { tzMap } from "./utility/constants.js";

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
  const currentWeatherItemsEl = document.getElementById(
    "current-weather-items"
  );
  const currentTempEl = document.getElementById("current-temp");
  const timeZoneEl = document.getElementById("time-zone");

  // Ev listener
  buttonEl.addEventListener("click", buttonElOnClick);

  inputEl.focus();

  displayDate();

  let location = await getCurrentLocation();
  if (location.lat && location.lon) {
    inputLocationEl.innerHTML = "Current Location";
  }

  if (!location.lat && !location.lon) {
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
    const data = await getWeatherData(location.lat, location.lon);
    displayDate(data.timezone);
    showWeatherData(data);
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
        const data = await getWeatherData(
          coordinates.latitude,
          coordinates.longitude
        );
        displayDate(data.timezone);
        showWeatherData(data);
        inputEl.value = "";
      }
    }
  }

  function displayDate(tzOff) {
    const mom = tzOff ? window.moment().utcOffset(tzOff / 60) : window.moment();

    const day = mom.format("dddd");
    const date = mom.format("DD");
    const month = mom.format("MMMM");
    const hour = mom.format("HH");
    const minute = mom.format("mm");

    timeEl.innerHTML = `${hour}:${minute}`;
    dateEl.innerHTML = `${day}, ${date} ${month}`;
  }

  function showWeatherData(data) {
    let humidity = data.main.humidity;
    let pressure = data.main.pressure;
    let wind_speed = data.wind.speed;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let tzOff = data.timezone;

    countryEl.innerHTML = `${lat} | ${lon}`;
    timeZoneEl.innerHTML = tzMap.get(tzOff);

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
        <div>Wind Speed</div>
        <div>${wind_speed}</div>
      </div>
      <div class="weather-item">
        <div>Sunrise</div>
        <div>${window
          .moment(sunrise * 1000)
          .utcOffset(tzOff / 60)
          .format("HH:mm a")}</div>
      </div>
      <div class="weather-item">
        <div>Sunset</div>
        <div>${window
          .moment(sunset * 1000)
          .utcOffset(tzOff / 60)
          .format("HH:mm a")}</div>
      </div>
    `;

    let minTemp = data.main.temp_min;
    let maxTemp = data.main.temp_max;
    let currentDay = window.moment(data.dt * 1000).format("dddd");
    let weatherIcon = data.weather[0].icon;

    currentTempEl.innerHTML = `
      <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="slika" />
      <div class="other">
        <div class="day">${currentDay}</div>
        <div class="temp">Min: ${minTemp}&#176;C</div>
        <div class="temp">Max: ${maxTemp}&#176;C</div>
      </div>
    `;
  }
}
