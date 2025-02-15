const API_KEY = '0fb2eb35622bdaaaa3d2ff6dfa9076e8';
async function getWeather(){
    const city = document.getElementById('city').value
    console.log(city)
    if(!city){
        alert('Unesi grad')
    }

    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?id={city_id}&appid={API_KEY}';
    const forecastUrl = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city_name}&appid={API_KEY}';

    const currentWeatherResponse = await fetch(currentWeatherUrl)
    const currentWeatherData = await currentWeatherResponse.json()
    console.log(currentWeatherData)
    
}