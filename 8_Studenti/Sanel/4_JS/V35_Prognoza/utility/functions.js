import { API_KEY } from "./constants.js"; 

export function getCurrentLocation() {
    
    const position = {
        lat: null,
        lon: null
    }

    return new Promise ((resolve) => {
        navigator.geolocation.getCurrentPosition((success)=>{
            position.lat = success.coord.latitude;
            position.lon = success.coord.longitude;
            resolve(position);
        }, (fail)=>{
            resolve(position);
        });
    })
        
}