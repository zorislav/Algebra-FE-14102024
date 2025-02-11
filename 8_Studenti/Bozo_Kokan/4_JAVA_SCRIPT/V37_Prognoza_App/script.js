import { getCurrentLocation, getCityLatLon } from "./utility/functions.js";

document.addEventListener("DOMContentLoaded", main);

async function main() {
    console.log("Startam APP");

    // Dohvati elemnte
    const inputEl = document.getElementById("input");
    const buttonEl = document.getElementById("button");
    const timeEl = document.getElementById("time");
    const dateEl = document.getElementById("date");
    const countryEl = document.getElementById("country");
    const inputLocationEl = document.getElementById("input-location");


    // Event Listener
    buttonEl.addEventListener("click", buttonElOnClick);

    inputEl.focus();

    displayDate();

    let location = await getCurrentLocation();
    if (location.lat && location.lon){
        inputLocationEl.innerHTML = "Current Location";
        countryEl.innerText = `LAT ${location.lat} | LON: ${location.lon}`;
    }

    if (!location.lat && !location.lon){
        // ucitaj lokaciju iz lokal storage location = ....
    }

    if (!location.lat && !location.lon){
        inputLocationEl.innerHTML = "No Location";
        alert("Please enter city name!");
        inputEl.focus();
    } else {
        // if ()
        // Dohvati podatke
    }

    async function buttonElOnClick(){
        const cityName = inputEl.value.trim();

        if (!cityName){
            alert("Pleast enter city name!");
            inputEl.focus();
        } else {
          const coordinates = await getCityLatLon(cityName);
          if (coordinates){
            inputLocationEl.innerHTML = coordinates.city;
            countryEl.innerHTML = `LAT: ${coordinates.latitude} | LON: ${coordinates.longitude}`;
          }
        }
    }

    function displayDate() {
        
        const mom = window.moment();

        const day = mom.format("dddd");
        const date = mom.format("DD");
        const month = mom.format("MMMM");
        const hour = mom.format("HH");
        const minut = mom.format("mm");

        timeEl.innerText = `${hour}:${minut}`;
        dateEl.innerText = `${day},${date} ${month}`;

    }
}