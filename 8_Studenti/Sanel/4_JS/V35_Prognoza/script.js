import { getCurrentLocation } from "./utility/functions.js";

document.addEventListener("DOMContentLoaded", main);

async function main() {
    console.log("Startam aplikaciju");

    //Dohvati elemente
    const inputEl = document.getElementById("input");
    const buttonEl = document.getElementById("button");
    const timeEl = document.getElementById("time");
    const dateEl = document.getElementById("date");
    const countryEl = document.getElementById("country");
    const inputLocationEl = document.getElementById("input-location")

    //Event listener
    buttonEl.addEventListener("click", buttonElOnClick);

    inputEl.focus();

    displayDate();

    let location = await getCurrentLocation();
    if(location.lat && location.lon) {
        countryEl.innerHTML = `${location.lat} | ${location.lon}`;
    };

    function buttonElOnClick() {
        console.log("Kliknuo");
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