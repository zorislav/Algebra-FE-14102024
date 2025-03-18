async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "0fb2eb35622bdaaaa3d2ff6dfa9076e8"; // Zamijeni sa svojim API ključem
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Grad nije pronađen!");
        }
        const data = await response.json();

        // Popunjavanje podataka
        document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("feelsLike").textContent = data.main.feels_like;
        document.getElementById("humidity").textContent = data.main.humidity;
        document.getElementById("windSpeed").textContent = data.wind.speed;
        document.getElementById("visibility").textContent = data.visibility;
        document.getElementById("clouds").textContent = data.clouds.all;
        document.getElementById("pressure").textContent = data.main.pressure;

        // Pretvaranje Unix vremena za izlazak i zalazak sunca
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("sunrise").textContent = sunrise;
        document.getElementById("sunset").textContent = sunset;

        // Postavljanje ikone vremena
        const icon = data.weather[0].icon;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById("description").textContent = data.weather[0].description;

        // Prikaz sekcije s vremenom
        document.getElementById("weather").style.display = "block";
    } catch (error) {
        alert(error.message);
    }
}