import { tzMap } from "./utility/constants.js";
import {
  getCurrentLocation,
  getLocationFromLocalStorage,
  getCityLatLon,
  getWeatherData,
} from "./utility/functions.js";

document.addEventListener("DOMContentLoaded", main);

async function main() {
  // Deklaracija varijabli za pristup elementima
  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");
  const currentWeatherItemsEl = document.getElementById(
    "current-weather-items"
  );
  const timezone = document.getElementById("time-zone");
  const inputLocation = document.getElementById("input-location");
  const countryEl = document.getElementById("country");
  const currentTempEl = document.getElementById("current-temp");
  const inputEl = document.getElementById("input");
  const buttonEl = document.getElementById("button");

  // Dodaj click event listener na buttonEl
  buttonEl.addEventListener("click", buttonElOnClick);

  // Prebaci fokus na input element
  inputEl.focus();

  // Prikazi trenutni datum i vrijeme
  displayDate();

  // Procitaj lokaciju browsera
  let location = await getCurrentLocation();
  if (location.lat && location.lon) {
    inputLocation.innerHTML = "Current Location";
  }

  // Ako lokacija nije procitana pokusaj procitati iz localStorage
  if (!location.lat && !location.lon) {
    location = getLocationFromLocalStorage();
  }

  // Ako lokacija i dalje nije procitana prikazi poruku
  if (!location.lat && !location.lon) {
    inputLocation.innerHTML = "No Location";
    alert("Please enter city name!");
    inputEl.focus();
  } else {
    if (location.city) {
      inputLocation.innerHTML = location.city;
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
      inputLocation.innerHTML = cityName ? cityName : "Current Location";

      const coordinates = await getCityLatLon(cityName);

      if (coordinates) {
        const data = await getWeatherData(
          coordinates.latitude,
          coordinates.longitude
        );
        displayDate(data.timezone);
        showWeatherData(data);
        inputEl.value = "";
      }

      inputEl.focus();
    }
  }

  // Funkcija koja prikazuje datum za izabranu lokaciju
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

  // Funkcija koja prikazuje ucitane podatke
  function showWeatherData(data) {
    // Izdvoji dio ucitanih podataka
    let humidity = data.main.humidity;
    let pressure = data.main.pressure;
    let wind_speed = data.wind.speed;
    let sunrise = data.sys.sunrise;
    let sunset = data.sys.sunset;
    let weatherIcon = data.weather[0].icon;

    //let { humidity, pressure, sunrise, sunset, wind_speed } = data.current;

    // Prikazi vremensku zonu, duzinu i sirinu
    timezone.innerHTML = tzMap.get(data.timezone);
    countryEl.innerHTML = data.coord.lat + "N | " + data.coord.lon + "E";

    // Prikazi vlagu, tlak, brzinu vjetra, vrijeme izlaska i zalaska sunca
    currentWeatherItemsEl.innerHTML = `
          <div class="weather-item">
              <div>Humidity</div>
              <div>${humidity}%</div>
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
              <div>${window.moment(sunrise * 1000).format("HH:mm a")}</div>
          </div>
          <div class="weather-item">
              <div>Sunset</div>
              <div>${window.moment(sunset * 1000).format("HH:mm a")}</div>
          </div>
      `;

    // Prikazi tekucu prognozu
    const currentDay = window
      .moment(data.dt * 1000)
      .utcOffset(data.timezone / 60);
    currentTempEl.innerHTML = `
      <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="weather icon" class="w-icon">
      <div class="other">
          <div class="day">${currentDay.format("dddd")}</div>
          <div class="temp">Min: ${data.main.temp_min}&#176;C</div>
          <div class="temp">Max: ${data.main.temp_max}&#176;C</div>
      </div>
     `;
  }
}
