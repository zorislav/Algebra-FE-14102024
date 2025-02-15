import { API_KEY } from "./constants.js";

export function getCurrentLocation() {
  const position = {
    lat: null,
    lon: null,
  };
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        position.lat = success.coords.latitude;
        position.lon = success.coords.longitude;

        resolve(position);
      },
      (fail) => {
        resolve(position);
      }
    );
  });
}

export async function getCityLatLon(cityName) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();
    const retLat = data[0].lat;
    const retLong = data[0].lon;
    const retCity = data[0].name;

    const coordinates = {
      latitude: retLat,
      longitude: retLong,
      city: retCity,
    };

    localStorage.setItem("latitude", retLat);
    localStorage.setItem("longitude", retLong);
    localStorage.setItem("city", retCity);

    return coordinates;
  } catch (error) {
    alert("City not found!");
  }
}

export function getWeatherData() {}

export function getLocationFromLocalStorage() {
  const position = {
    lat: null,
    lon: null,
    city: null,
  };

  position.lat = localStorage.getItem("latitude");
  position.lon = localStorage.getItem("longitude");
  position.city = localStorage.getItem("city");

  return position;
}
