import { API_KEY } from "./constants.js";

export function getCurrentLocation() {
 const position = {
    lat: null,
    lon: null
 };

 return new Promise ((resolve) => {
     navigator.geolocation.getCurrentPosition((success) =>{
        position.lat = success.coords.latitude;
        position.lon = success.coords.longitude;
        resolve(position);
     }, (fail)=>{
        resolve(position);    
     })
 });
}

export async function getCityLatLon (cityName){
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
        const data = await response.json();
        const retLat = data[0].lat;
        const retLon = data[0].lon;
        const retCity = data[0].name;
    
        const coordinates = {
          latitude: retLat,
          longitude: retLon,
          city: retCity,
        };
    
        // Spremi duzinu i sirinu u local storage
        localStorage.setItem("latitude", retLat);
        localStorage.setItem("longitude", retLon);
        localStorage.setItem("city", retCity);
    
        return coordinates;
      } catch (error) {
        alert("City not found!");
      }
}