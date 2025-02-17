export function getCurrentLocation() {
    const position = {
        lat: null,
        lon: null
    };

    new Promise ((resolve) => {
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

function getCityLatLon(cityName) {
    try {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit={limit}&appid={API key}`);
    } catch(error) {
        alert("City not found");
    }
}