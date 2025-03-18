import { getCurrentLocation } from "./utility/functions";

document.addEventListener("DOMContentLoaded", main);

async function main() {
    console.log("Startam aplikaciju");

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
    if(location.lat && location.lon) {
        inputLocationEl.innerHTML = "Current Location";
        countryEl.innerHTML = `${location.lat}` | `${location.lon}`
    };

    if(!location.lat && !location.lon) {
        // Ucitaj lokaciju iz localStorage
    }

    if(!location.lat && !location.lon) {
        inputLocationEl.innerHTML = "No Location";
        alert("Please enter city name");
        inputEl.focus();
    } else {
        //if()
        // dohvati podatke
    }

    function buttonElOnClick() {
        console.log("Kliknuo");
    };

    function displayDate() {
        const mom = window.moment();

        const day = mom.format("dddd");
        const date = mom.format("DD");
        const month = mom.format("MMMM");
        const hour =
        const minute
    };
}